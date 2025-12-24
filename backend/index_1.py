import os
import sqlite3
import re
from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI  # <--- New Import

app = Flask(__name__)
CORS(app)

# Initialize OpenAI Client (It will look for OPENAI_API_KEY in environment variables)
client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

SERVICES_DB = {
    "Programmatic Display": "programmatic-display",
    "Mobile & Geolocation Targeting": "mobile-geolocation",
    "Email Marketing": "email-marketing",
    "Native Advertising": "native-advertising",
    "Video Advertising": "video-advertising",
    "OTT & CTV": "ott-ctv",
    "Streaming Audio": "streaming-audio",
    "Social Media Marketing": "social-media",
    "Google Ads Management": "google-ads",
    "Organic SEO": "organic-seo",
    "Local SEO & Visibility": "local-seo",
    "Chat Widget & Messaging": "chat-messaging",
    "Website Design & Development": "web-design",
    "Web Accessibility": "web-accessibility",
    "White Label Services": "white-label",
    "Creative & Design Services": "creative-design",
    "Proprietary Ad Tech Platform": "ad-tech-platform",
    "Restricted Vertical Advertising": "restricted-verticals"
}

@app.route('/api/generate', methods=['POST'])
def generate_strategy():
    try:
        data = request.json
        user_prompt = data.get('prompt', '')

        if not user_prompt:
            return jsonify({"error": "No prompt provided"}), 400

        # --- REAL AI LOGIC START ---
        system_message = f"""
        You are a B2B Marketing Strategist. Analyze the user's business goal and provide a 2-sentence strategy.
        Then, pick the 3 best services from this list: {list(SERVICES_DB.keys())}.
        Output ONLY valid JSON in this format:
        {{
            "strategy_overview": "Your 2-sentence strategy here",
            "solutions": [
                {{"title": "Step Name", "description": "Why this works", "service_match": "Exact Service Name"}},
                ...
            ]
        }}
        """

        response = client.chat.completions.create(
            model="gpt-4o-mini", # Cheaper and faster for B2B tools
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": user_prompt}
            ],
            response_format={ "type": "json_object" }
        )
        
        # Parse the AI response
        import json
        ai_data = json.loads(response.choices[0].message.content)

        # Attach the correct 'service_link' (slug) from your DB
        for solution in ai_data['solutions']:
            name = solution['service_match']
            solution['service_link'] = SERVICES_DB.get(name, "contact")
        # --- REAL AI LOGIC END ---

        # SAVE TO DATABASE
        try:
            suggested_ids = ", ".join([s['service_link'] for s in ai_data['solutions']])
            with sqlite3.connect('advantage_leads.db') as conn:
                conn.execute(
                    "INSERT INTO leads (prompt, strategy_summary, suggested_ids) VALUES (?, ?, ?)",
                    (user_prompt, ai_data['strategy_overview'], suggested_ids)
                )
        except Exception as db_err:
            print(f"Database error: {db_err}")

        return jsonify(ai_data)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ... (Keep health and leads routes) ...
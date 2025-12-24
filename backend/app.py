import os
import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS
import re


app = Flask(__name__)

# UPDATED CORS: Explicitly allow the Next.js dev server
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

DATABASE_FILE = 'advantage_leads.db'

# 1. Database Initialization
def init_db():
    """Creates the database and table if they don't exist."""
    with sqlite3.connect(DATABASE_FILE) as conn:
        conn.execute('''
            CREATE TABLE IF NOT EXISTS leads (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                prompt TEXT,
                strategy_summary TEXT,
                suggested_ids TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
    print("✓ Database verified and ready.")

init_db()
def is_gibberish(text):
    # Calculate vowel-to-consonant ratio
    vowels = len(re.findall(r'[aeiouAEIOU]', text))
    consonants = len(re.findall(r'[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]', text))
    
    if consonants > 0 and (vowels / (vowels + consonants)) < 0.15:
        return True # Likely keyboard smashing
        
    # Check for unusually long words (B2B terms aren't usually 40 chars long)
    if any(len(word) > 35 for word in text.split()):
        return True
        
    return False

@app.route('/generate-strategy', methods=['POST'])
def handle_request():
    data = request.json
    user_input = data.get('prompt', '')

    if is_gibberish(user_input):
        return {"error": "Input quality too low. Please provide a clear business goal."}, 400
# The "Source of Truth" Mapping (Updated to match your ServicesAlternate IDs)
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

        # Mock Response for testing
        mock_response = {
            "strategy_overview": f"Strategic roadmap for: {user_prompt}",
            "solutions": [
                {
                    "title": "Hyper-Local Precision",
                    "description": "Leveraging real-time location data to capture intent.",
                    "service_match": "Mobile & Geolocation Targeting",
                    "service_link": "mobile-geolocation"
                }
            ]
        }

        # 2. SAVE TO DATABASE
        try:
            suggested_ids = ", ".join([s['service_link'] for s in mock_response['solutions']])
            with sqlite3.connect(DATABASE_FILE) as conn:
                conn.execute(
                    "INSERT INTO leads (prompt, strategy_summary, suggested_ids) VALUES (?, ?, ?)",
                    (user_prompt, mock_response['strategy_overview'], suggested_ids)
                )
        except Exception as db_err:
            print(f"Database error: {db_err}") 
            # We don't return error to user; we want the AI response to finish anyway

        return jsonify(mock_response)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/admin/leads', methods=['GET'])
def get_leads():
    with sqlite3.connect(DATABASE_FILE) as conn:
        conn.row_factory = sqlite3.Row  # Allows us to return as a dictionary
        cursor = conn.execute("SELECT * FROM leads ORDER BY created_at DESC")
        leads = [dict(row) for row in cursor.fetchall()]
    return jsonify(leads)

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({"status": "online", "database": "connected"})

if __name__ == '__main__':
    print("AdVantage AI Backend running at http://127.0.0.1:8000")
    app.run(host='127.0.0.1', port=8000, debug=True)
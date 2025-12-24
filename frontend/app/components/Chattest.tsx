"use client";
import React, { useState } from 'react';

export default function ChatTest() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTest = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://127.0.0.1:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setResponse(data.reply || data.message || "No response");
    } catch (err) {
      setResponse("Error: Backend might be offline.");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>EchoShift AI Test</h3>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Ask the AI..."
        className="text-black p-2 mr-2 border"
      />
      <button 
        onClick={handleTest}
        className="bg-blue-600 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? 'Thinking...' : 'Send'}
      </button>
      <div className="mt-4 p-2 bg-gray-100 text-black">
        <strong>AI Says:</strong> {response}
      </div>
    </div>
  );
}
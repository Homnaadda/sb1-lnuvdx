import React, { useState, useRef, useEffect } from 'react';
import { Shield, Send } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { ExampleQuestions } from './components/ExampleQuestions';
import { findBestResponse } from './utils/responseUtils';

interface Message {
  text: string;
  isBot: boolean;
}

const INITIAL_MESSAGE = "Hello! I'm your AI Cybersecurity Assistant. I can help you with questions about cybersecurity, privacy, and best practices for staying safe online. What would you like to know?";

function App() {
  const [messages, setMessages] = useState<Message[]>([
    { text: INITIAL_MESSAGE, isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateTyping = (response: string) => {
    setIsTyping(true);
    // Simulate natural typing delay based on response length
    const delay = Math.min(1000, Math.max(500, response.length * 10));
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isBot: true }]);
      setIsTyping(false);
    }, delay);
  };

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text, isBot: false }]);
    setInput('');

    // Get and display AI response
    const response = findBestResponse(text);
    simulateTyping(response);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="flex h-[800px] flex-col">
          {/* Header */}
          <div className="bg-blue-600 p-4 flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Cybersecurity Assistant</h1>
              <p className="text-blue-100 text-sm">Expert AI Security Guidance</p>
            </div>
          </div>

          {/* Chat Container */}
          <div className="flex flex-1 overflow-hidden">
            {/* Main Chat */}
            <div className="flex-1 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <ChatMessage
                    key={index}
                    message={message.text}
                    isBot={message.isBot}
                  />
                ))}
                {isTyping && (
                  <div className="flex gap-3 bg-gray-50 p-4 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-1">SecurityBot</p>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                    placeholder="Ask about cybersecurity..."
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => handleSend(input)}
                    disabled={!input.trim() || isTyping}
                    className={`px-4 py-2 bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2 ${
                      !input.trim() || isTyping ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-64 border-l p-4 hidden md:block">
              <ExampleQuestions onQuestionClick={(q) => handleSend(q)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
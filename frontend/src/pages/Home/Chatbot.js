import React, { useState } from 'react';
import './Chatbot.css'; 
import Groq from 'groq-sdk';


const groq = new Groq({
  apiKey: "your api key", 
});

const systemMessage = {
  role: 'system',
  content: "You are an expert assistant specializing in educational and career guidance. "
         + "You should only answer questions related to education pathways, career options, and professional development. "
         + "If the question is not related to these topics, kindly inform the user that you only handle educational and career-related queries. "
         + "Respond concisely with actionable advice to support informed decision-making in 1 - 2 lines. "
         + "Tell the content in points with bullet points."
};

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);
      setInput(''); // Clear input field after sending the message

      await getResponse(input);
    }
  };

  const getResponse = async (userInput) => {
    try {
      const responseFromAi = await groq.chat.completions.create({
        messages: [
          systemMessage,
          {
            role: 'user',
            content: userInput,
          },
        ],
        model: 'llama3-8b-8192',
      });

      const aiMessage = {
        text: responseFromAi.choices[0]?.message?.content || 'Sorry, I could not process that.',
        sender: 'ai',
      };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <h3>Your AI Assistant</h3>
      </div>
      <div className="chat-area">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${message.sender === 'user' ? 'user-message' : 'ai-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="send-text">
        <input
          type="text"
          placeholder="Type your message..."
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="chat-send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

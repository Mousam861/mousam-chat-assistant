import React from 'react';
import { assets } from '../../assets/assets';
import { useAppContext } from '../context/Context';

const ChatHistory = () => {
  const { prevPrompts, setShowResult, setRecentPrompt, setResultData } = useAppContext();

  const handleChatClick = (prompt) => {
    setRecentPrompt(prompt);
    setShowResult(true);
    setResultData(''); // Clear previous result
  };

  if (prevPrompts.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        <p>No chat history yet</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto px-4 py-2">
      <div className="space-y-2">
        {prevPrompts.map((prompt, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
            onClick={() => handleChatClick(prompt)}
          >
            <img
              className="h-6 w-6 rounded-full"
              src={assets.message_icon}
              alt="Chat"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-800 truncate">
                {prompt.length > 50 ? `${prompt.substring(0, 50)}...` : prompt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory; 
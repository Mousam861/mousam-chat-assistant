import React, { createContext, useContext, useState } from 'react';
import { generateGeminiResponse } from '../config/gemini';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData(prev => prev + nextWord);
    }, 25 * index);
  };

  const onSent = async (prompt) => {
    if (prompt) {
      setLoading(true);
      setShowResult(true);
      setInput('');
      setRecentPrompt(prompt);
      setPrevPrompts(prev => [...prev, prompt]);
      
      try {
        
        setResultData('');
        
        // For streaming effect, we'll use the regular API and simulate streaming
        const response = await generateGeminiResponse(prompt);
        
        // Simulate streaming effect
        const words = response.split(' ');
        words.forEach((word, index) => {
          delayPara(index, word + ' ');
        });
      } catch (error) {
        console.error('Error generating response:', error);
        setResultData('Sorry, there was an error generating the response. Please check your API key and try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useAppContext must be used within a ContextProvider');
  }
  return context;
};

export default ContextProvider;

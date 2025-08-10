import { GoogleGenAI } from '@google/genai';

// Initialize the Gemini AI client for Vite Project
const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({
  apiKey: apiKey,
});

export const generateGeminiResponse = async (prompt: string): Promise<string> => {
  try {
    const model = 'gemini-2.0-flash-exp';
    
    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ];

    const response = await ai.models.generateContent({
      model,
      contents,
    });

    return response.text || 'No response generated';
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw new Error('Failed to generate response from Gemini API');
  }
};

export const generateGeminiStream = async (prompt: string, onChunk: (chunk: string) => void): Promise<void> => {
  try {
    const model = 'gemini-2.0-flash-exp';
    
    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ];

    const response = await ai.models.generateContentStream({
      model,
      contents,
    });

    for await (const chunk of response) {
      if (chunk.text) {
        onChunk(chunk.text);
      }
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw new Error('Failed to generate streaming response from Gemini API');
  }
};

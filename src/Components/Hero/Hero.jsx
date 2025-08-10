import React from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../context/Context";

const data = [
  {
    text: "Suggest beautiful places to see on an upcoming road trip",
    image: assets.compass_icon,
  },
  { text: "Plan a healthy meal for the week", image: assets.bulb_icon },
  {
    text: "Explain quantum computing in simple terms",
    image: assets.message_icon,
  },
  { text: "Draft an email to schedule a meeting", image: assets.code_icon },
];

const hideScrollbarClass =
  "scrollbar-hide overflow-y-auto";

const Hero = () => {
  const {
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
    onSent
  } = useAppContext();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      onSent(input);
    }
  };

  const handleSendClick = () => {
    if (input.trim()) {
      onSent(input);
    }
  };

  return (
    <div
      className="w-full max-h-screen h-screen flex flex-col"
      style={{
        maxHeight: "100vh",
        height: "100vh",
        overflowY: "auto",
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE 10+
      }}
    >
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          /* Hide scrollbar for IE, Edge and Firefox */
          .hide-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>
      <div className="flex justify-between p-9 flex-shrink-0">
        <h1 className="text-3xl text-blue-600">
          Gemini
        </h1>
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={assets.user_icon} alt=""
        />
      </div>
      
      <div className="flex-1 hide-scrollbar" style={{ overflowY: "auto" }}>
        {!showResult ? (
          <>
            <div className="pl-25">
              <h2
                className="text-7xl pb-3 font-semibold bg-gradient-to-r from-blue-500 via-red-500 via-yellow-400 via-green-500 to-blue-500 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #4285F4 16%, #EA4335 32%, #FBBC05 48%, #34A853 64%, #4285F4 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hello, Mousam
              </h2>
              <p className="text-3xl pt-5">How Can I Help You today?</p>
            </div>
            <div className="h-50 mt-20 pl-30 w-full flex gap-10">
              {data.map((item, index) => (
                <div 
                  key={index} 
                  className="w-50 h-50 relative bg-gray-200 rounded-2xl cursor-pointer hover:bg-gray-300 transition-colors"
                  onClick={() => onSent(item.text)}
                >
                  <h2 className="p-4">{item.text}</h2>
                  <img
                    className="absolute h-10 w-10 bg-white rounded-full bottom-3 right-2"
                    src={item.image}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4 hide-scrollbar" style={{ overflowY: "auto" }}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={assets.user_icon}
                    alt="User"
                  />
                  <div className="flex-1">
                    <p className="text-gray-800">{recentPrompt}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-3">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={assets.gemini_icon}
                    alt="Gemini"
                  />
                  <div className="flex-1">
                    {loading ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                        <span className="text-gray-600 items-center">Gemini is thinking...</span>
                      </div>
                    ) : (
                      <p className="text-gray-800 whitespace-pre-wrap">{resultData}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-250 bg-gray-200 ml-28 mb-10 rounded-3xl flex justify-between flex-shrink-0">
        <div className="flex-1">
          <input 
            className='px-5 py-4 w-full h-full outline-0 bg-transparent'  
            type="text" 
            placeholder="Enter a prompt" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="flex items-center gap-2 p-2">
          <img className="h-7 w-7 object-cover cursor-pointer hover:opacity-70" src={assets.gallery_icon} alt="" />
          <img className="h-7 w-7 object-cover cursor-pointer hover:opacity-70" src={assets.mic_icon} alt="" />
          <img 
            className="h-7 w-7 object-cover cursor-pointer hover:opacity-70" 
            src={assets.send_icon} 
            alt="" 
            onClick={handleSendClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

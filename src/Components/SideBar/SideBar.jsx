import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../context/Context'
import ChatHistory from '../ChatHistory/ChatHistory'

const sideStyle = 'flex justify-between items-center rounded-4xl px-3 mt-4 text-grey hover:bg-[#e2e6eb] cursor-pointer'

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const [activeTab, setActiveTab] = useState('recent'); // 'recent', 'help', 'activity', 'settings'
  const { setShowResult, setResultData, setRecentPrompt } = useAppContext();

  const handleNewChat = () => {
    setShowResult(false);
    setResultData('');
    setRecentPrompt('');
    setActiveTab('recent');
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'recent':
        return <ChatHistory />;
      case 'help':
        return (
          <div className="flex-1 overflow-y-auto px-4 py-2">
            <h3 className="font-semibold text-gray-800 mb-4">Help & Support</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>• Type your questions in the chat input</p>
              <p>• Click on suggested prompts to get started</p>
              <p>• Use the sidebar to navigate between features</p>
              <p>• Your chat history is saved automatically</p>
            </div>
          </div>
        );
      case 'activity':
        return (
          <div className="flex-1 overflow-y-auto px-4 py-2">
            <h3 className="font-semibold text-gray-800 mb-4">Activity</h3>
            <div className="text-sm text-gray-600">
              <p>Activity tracking coming soon...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="flex-1 overflow-y-auto px-4 py-2">
            <h3 className="font-semibold text-gray-800 mb-4">Settings</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>• Theme: Light</p>
              <p>• Language: English</p>
              <p>• API Status: Connected</p>
            </div>
          </div>
        );
      default:
        return <ChatHistory />;
    }
  };

  return (
    <div className={`h-screen left-0 bg-[#f0f4f9] flex justify-between flex-col px-2 transition-all ease-in duration-500 ${extended ? 'w-70' : 'w-20'}`}>
      <div>
        <div className='py-2'>
          <img
            onClick={() => setExtended((prev) => !prev)}
            className='h-10 w-10 cursor-pointer ml-3'
            src={assets.menu_icon}
            alt=''
          />
        </div>
        <div className={sideStyle} onClick={handleNewChat}>
          <img className='h-10 w-10' src={assets.plus_icon} alt="" />
          {extended ? <p className='font-semibold text-gray-800'>New Chat</p> : null}
        </div>
        <div>
          <h1 className={`font-semibold text-gray-800 pt-4 ${extended ? '' : 'hidden'}`}>Recent</h1>
          <div className={sideStyle} onClick={() => handleTabClick('recent')}>
            <img className='h-10 w-10' src={assets.message_icon} alt="" />
            {extended ? <p className='font-semibold text-gray-800'>Chats</p> : null}
          </div>
        </div>
      </div>
      
      {extended && (
        <div className="flex-1 overflow-hidden">
          {renderTabContent()}
        </div>
      )}
      
      <div>
        <div className={sideStyle} onClick={() => handleTabClick('help')}>
          <img className='h-10 w-10' src={assets.question_icon} alt="" />
          {extended ? <p className='font-semibold text-gray-800'>Help</p> : null}
        </div>
        <div className={sideStyle} onClick={() => handleTabClick('activity')}>
          <img className='h-10 w-10' src={assets.history_icon} alt="" />
          {extended ? <p className='font-semibold text-gray-800'>Activity</p> : null}
        </div>
        <div className={sideStyle} onClick={() => handleTabClick('settings')}>
          <img className='h-10 w-10' src={assets.setting_icon} alt="" />
          {extended ? <p className='font-semibold text-gray-800'>Settings</p> : null}
        </div>
      </div>
    </div>
  )
}

export default SideBar
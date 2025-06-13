import React, { useState } from 'react';
import { SendIcon, SearchIcon, PhoneIcon, VideoIcon, InfoIcon } from 'lucide-react';
const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const chats = [{
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastMessage: 'That sounds great! Let me check my calendar.',
    time: '2m',
    unread: 1
  }, {
    id: 2,
    name: 'Robert Chen',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastMessage: "Thanks for connecting! I'd love to hear more about your experience at Tech Co.",
    time: '1h',
    unread: 0
  }, {
    id: 3,
    name: 'Alumni Network Group',
    avatar: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastMessage: 'David: Is anyone attending the networking event next week?',
    time: '3h',
    unread: 3
  }, {
    id: 4,
    name: 'Alex Wong',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastMessage: "I'll send you the job posting when it goes live.",
    time: '1d',
    unread: 0
  }, {
    id: 5,
    name: 'Maria Garcia',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastMessage: 'Looking forward to catching up at the reunion!',
    time: '2d',
    unread: 0
  }];
  const messages = [{
    id: 1,
    sender: 'Sarah Johnson',
    content: "Hi John! I saw that you're working at Tech Company now. How's it going?",
    time: '10:23 AM',
    isMine: false
  }, {
    id: 2,
    content: "Hey Sarah! Yes, I joined about 6 months ago. It's been great so far - really enjoying the team and projects.",
    time: '10:30 AM',
    isMine: true
  }, {
    id: 3,
    sender: 'Sarah Johnson',
    content: "That's awesome to hear! I'm actually looking for new opportunities in the tech field. Would you mind if I asked you a few questions about your company?",
    time: '10:32 AM',
    isMine: false
  }, {
    id: 4,
    content: "Not at all! Happy to help. We're actually hiring for several positions right now. What kind of role are you looking for?",
    time: '10:35 AM',
    isMine: true
  }, {
    id: 5,
    sender: 'Sarah Johnson',
    content: "I'm interested in product management roles. I've been working as a PM for about 3 years now, focusing on fintech products.",
    time: '10:38 AM',
    isMine: false
  }, {
    id: 6,
    content: "That's perfect timing! We're expanding our product team and looking for experienced PMs. Would you be interested in grabbing coffee sometime this week to chat more about it?",
    time: '10:42 AM',
    isMine: true
  }, {
    id: 7,
    sender: 'Sarah Johnson',
    content: 'That sounds great! Let me check my calendar.',
    time: '10:45 AM',
    isMine: false
  }];
  return <div className="flex h-[calc(100vh-64px)] bg-white rounded-lg shadow overflow-hidden">
      {/* Chat list */}
      <div className="w-80 border-r flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Messaging</h2>
          <div className="mt-2 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-4 w-4 text-gray-400" />
            </div>
            <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Search messages" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {chats.map(chat => <button key={chat.id} className={`w-full text-left px-4 py-3 border-b hover:bg-gray-50 flex items-start ${selectedChat === chat.id ? 'bg-blue-50' : ''}`} onClick={() => setSelectedChat(chat.id)}>
              <img src={chat.avatar} alt={chat.name} className="h-12 w-12 rounded-full mr-3" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-medium truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <p className="text-xs text-gray-500 truncate">
                  {chat.lastMessage}
                </p>
              </div>
              {chat.unread > 0 && <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-xs font-medium text-white">
                  {chat.unread}
                </span>}
            </button>)}
        </div>
      </div>
      {/* Chat window */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="px-4 py-3 border-b flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Sarah Johnson" className="h-8 w-8 rounded-full mr-3" />
            <div>
              <h3 className="text-sm font-medium">Sarah Johnson</h3>
              <p className="text-xs text-gray-500">Product Manager • Online</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <PhoneIcon className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <VideoIcon className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <InfoIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(message => <div key={message.id} className={`flex ${message.isMine ? 'justify-end' : 'justify-start'}`}>
              {!message.isMine && <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Sarah Johnson" className="h-8 w-8 rounded-full mr-2 self-end" />}
              <div>
                <div className={`rounded-lg px-4 py-2 max-w-xs lg:max-w-md ${message.isMine ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  <p className="text-sm">{message.content}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">{message.time}</p>
              </div>
            </div>)}
        </div>
        {/* Message input */}
        <div className="border-t p-4">
          <div className="flex items-center">
            <input type="text" className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Type a message..." />
            <button className="ml-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <SendIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default Chat;
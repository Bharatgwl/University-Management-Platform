import React from 'react';
import { PlusIcon, ThumbsUpIcon, MessageSquareIcon, ShareIcon } from 'lucide-react';
import PostCard from '../components/home/PostCard';
const Home = () => {
  // Sample post data
  const posts = [{
    id: 1,
    author: {
      name: 'Jane Smith',
      role: 'Product Manager at Tech Co',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    content: "Excited to announce that we just launched our new product! It's been months in the making, and I'm so proud of the team for all their hard work.",
    timestamp: '2 hours ago',
    likes: 42,
    comments: 8
  }, {
    id: 2,
    author: {
      name: 'Robert Chen',
      role: 'Software Engineer at StartupX',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    content: 'Just finished a fascinating course on machine learning. Looking to connect with others in the field. Anyone working on interesting ML projects?',
    timestamp: '5 hours ago',
    likes: 18,
    comments: 3
  }, {
    id: 3,
    author: {
      name: 'Sarah Johnson',
      role: 'Marketing Director at Global Corp',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    content: 'Our alumni networking event last night was a huge success! Great to reconnect with so many familiar faces and meet new graduates. Looking forward to our next event!',
    image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    timestamp: '1 day ago',
    likes: 87,
    comments: 14
  }];
  return <div className="max-w-3xl mx-auto">
      {/* Create post card */}
      <div className="bg-white rounded-lg shadow mb-4 p-4">
        <div className="flex items-center space-x-4">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" className="w-10 h-10 rounded-full" />
          <button className="bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 text-gray-500 flex-grow text-left">
            Start a post...
          </button>
        </div>
        <div className="flex mt-3 pt-2 border-t">
          <button className="flex items-center justify-center space-x-1 flex-1 py-1 hover:bg-gray-100 rounded text-sm text-gray-500">
            <PlusIcon className="h-5 w-5 text-blue-500" />
            <span>Photo</span>
          </button>
          <button className="flex items-center justify-center space-x-1 flex-1 py-1 hover:bg-gray-100 rounded text-sm text-gray-500">
            <PlusIcon className="h-5 w-5 text-green-500" />
            <span>Video</span>
          </button>
          <button className="flex items-center justify-center space-x-1 flex-1 py-1 hover:bg-gray-100 rounded text-sm text-gray-500">
            <PlusIcon className="h-5 w-5 text-orange-500" />
            <span>Event</span>
          </button>
          <button className="flex items-center justify-center space-x-1 flex-1 py-1 hover:bg-gray-100 rounded text-sm text-gray-500">
            <PlusIcon className="h-5 w-5 text-red-500" />
            <span>Article</span>
          </button>
        </div>
      </div>
      {/* Posts feed */}
      <div className="space-y-4">
        {posts.map(post => <PostCard key={post.id} post={post} />)}
      </div>
    </div>;
};
export default Home;
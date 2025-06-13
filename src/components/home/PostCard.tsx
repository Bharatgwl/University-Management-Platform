import React from 'react';
import { ThumbsUpIcon, MessageSquareIcon, ShareIcon, MoreHorizontalIcon } from 'lucide-react';
interface Author {
  name: string;
  role: string;
  avatar: string;
}
interface Post {
  id: number;
  author: Author;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
}
interface PostCardProps {
  post: Post;
}
const PostCard = ({
  post
}: PostCardProps) => {
  return <div className="bg-white rounded-lg shadow">
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex space-x-3">
            <img src={post.author.avatar} alt={post.author.name} className="h-10 w-10 rounded-full" />
            <div>
              <h3 className="text-sm font-medium">{post.author.name}</h3>
              <p className="text-xs text-gray-500">{post.author.role}</p>
              <p className="text-xs text-gray-400">{post.timestamp}</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-500">
            <MoreHorizontalIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-800">{post.content}</p>
        </div>
      </div>
      {post.image && <div className="relative h-64 w-full bg-gray-100">
          <img src={post.image} alt="Post" className="w-full h-full object-cover" />
        </div>}
      <div className="px-4 py-2 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div>
            <span>{post.likes} likes</span>
          </div>
          <div>
            <span>{post.comments} comments</span>
          </div>
        </div>
      </div>
      <div className="px-2 py-1 border-t border-gray-100 flex">
        <button className="flex items-center justify-center space-x-1 flex-1 py-1 hover:bg-gray-100 rounded text-sm text-gray-500">
          <ThumbsUpIcon className="h-5 w-5" />
          <span>Like</span>
        </button>
        <button className="flex items-center justify-center space-x-1 flex-1 py-1 hover:bg-gray-100 rounded text-sm text-gray-500">
          <MessageSquareIcon className="h-5 w-5" />
          <span>Comment</span>
        </button>
        <button className="flex items-center justify-center space-x-1 flex-1 py-1 hover:bg-gray-100 rounded text-sm text-gray-500">
          <ShareIcon className="h-5 w-5" />
          <span>Share</span>
        </button>
      </div>
    </div>;
};
export default PostCard;
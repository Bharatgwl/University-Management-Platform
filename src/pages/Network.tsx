import React from 'react';
import { UserPlusIcon, UsersIcon, BriefcaseIcon } from 'lucide-react';
const Network = () => {
  const connections = [{
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager at Tech Co',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    mutualConnections: 12
  }, {
    id: 2,
    name: 'Robert Chen',
    role: 'Software Engineer at StartupX',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    mutualConnections: 8
  }, {
    id: 3,
    name: 'Alex Wong',
    role: 'Data Scientist at Analytics Corp',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    mutualConnections: 5
  }, {
    id: 4,
    name: 'Maria Garcia',
    role: 'Marketing Director at Global Co',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    mutualConnections: 15
  }];
  const pendingRequests = [{
    id: 1,
    name: 'David Kim',
    role: 'UX Designer at Design Studio',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    mutualConnections: 3
  }, {
    id: 2,
    name: 'Lisa Wang',
    role: 'Project Manager at ConsultCo',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    mutualConnections: 7
  }];
  const suggestions = [{
    id: 1,
    name: 'Michael Brown',
    role: 'CTO at TechStart',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    mutualConnections: 23
  }, {
    id: 2,
    name: 'Emily Chen',
    role: 'Senior Developer at WebCorp',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    mutualConnections: 11
  }, {
    id: 3,
    name: 'James Wilson',
    role: 'VP of Engineering at SoftwareInc',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    mutualConnections: 15
  }, {
    id: 4,
    name: 'Sophia Martinez',
    role: 'Frontend Developer at AppDev',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    mutualConnections: 9
  }];
  return <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Network</h1>
      {/* Network stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="rounded-full bg-blue-100 p-3 mr-4">
            <UsersIcon className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-500">Connections</h2>
            <p className="text-2xl font-semibold">143</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <UserPlusIcon className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-500">
              Pending Requests
            </h2>
            <p className="text-2xl font-semibold">2</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center">
          <div className="rounded-full bg-purple-100 p-3 mr-4">
            <BriefcaseIcon className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-500">
              Alumni Opportunities
            </h2>
            <p className="text-2xl font-semibold">12</p>
          </div>
        </div>
      </div>
      {/* Pending requests */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-medium text-gray-900">
            Pending Requests
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {pendingRequests.map(request => <div key={request.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center">
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                <img src={request.avatar} alt={request.name} className="h-16 w-16 rounded-full" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium">{request.name}</h3>
                <p className="text-sm text-gray-500">{request.role}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {request.mutualConnections} mutual connections
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex space-x-2">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Accept
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Ignore
                </button>
              </div>
            </div>)}
        </div>
      </div>
      {/* Suggestions */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-medium text-gray-900">
            People You May Know
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {suggestions.map(suggestion => <div key={suggestion.id} className="p-4 flex">
              <div className="flex-shrink-0 mr-4">
                <img src={suggestion.avatar} alt={suggestion.name} className="h-16 w-16 rounded-full" />
              </div>
              <div>
                <h3 className="text-sm font-medium">{suggestion.name}</h3>
                <p className="text-sm text-gray-500">{suggestion.role}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {suggestion.mutualConnections} mutual connections
                </p>
                <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Connect
                </button>
              </div>
            </div>)}
        </div>
        <div className="px-6 py-3 bg-gray-50 text-center">
          <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
            See more suggestions
          </button>
        </div>
      </div>
      {/* Your connections */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">
            Your Connections
          </h2>
          <input type="text" placeholder="Search connections" className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {connections.map(connection => <div key={connection.id} className="p-4 flex">
              <div className="flex-shrink-0 mr-4">
                <img src={connection.avatar} alt={connection.name} className="h-16 w-16 rounded-full" />
              </div>
              <div>
                <h3 className="text-sm font-medium">{connection.name}</h3>
                <p className="text-sm text-gray-500">{connection.role}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {connection.mutualConnections} mutual connections
                </p>
                <button className="mt-2 px-3 py-1 border border-gray-300 text-gray-700 text-xs font-medium rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Message
                </button>
              </div>
            </div>)}
        </div>
        <div className="px-6 py-3 bg-gray-50 text-center">
          <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
            See all connections
          </button>
        </div>
      </div>
    </div>;
};
export default Network;
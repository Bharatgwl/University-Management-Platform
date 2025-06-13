import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { Header } from './Header';
interface LayoutProps {
  children: React.ReactNode;
  userRole: string;
  setUserRole: (role: string) => void;
}
export const Layout = ({
  children,
  userRole,
  setUserRole
}: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar for desktop */}
      <Sidebar userRole={userRole} isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      {/* Main content */}
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} userRole={userRole} setUserRole={setUserRole} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
        {/* Mobile navigation */}
        <MobileNav userRole={userRole} />
      </div>
    </div>;
};
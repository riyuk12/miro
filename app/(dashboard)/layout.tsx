interface DasboardLayoutProps {
    children: React.ReactNode; 
};

import { Sidebar } from './_components/sidebar';
import { OrgSidebar } from './_components/org-sidebar';
import React from 'react'
import { Navbar } from './_components/navbar';

const DashboardLayout = ({children}:DasboardLayoutProps) => {
  return (
    <main className='h-full'>
        <Sidebar/>
        <div className='pl-[60px] h-full'>
            <div className='flex gap-x-3 h-full'>
                <OrgSidebar />
                <div className='h-full flex-1'>
                    <Navbar/>
                    {children}
                </div>
            </div>
        </div>
    </main>
  )
}

export default DashboardLayout
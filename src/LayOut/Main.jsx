import React from 'react';
import { Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

const Main = () => {
    return (
        <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
            <SiteHeader />
            <main className="flex-1">
                <Outlet />
            </main>
            <SiteFooter />
        </div>
    );
};

export default Main;

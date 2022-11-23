import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { RightSideBar } from './RightSideBar/RightSideBar';
import css from './Layout.module.scss';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <div className={css.box}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <RightSideBar />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

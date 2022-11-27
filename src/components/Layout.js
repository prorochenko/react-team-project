import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { RightSideBar } from './RightSideBar/RightSideBar';
import css from './Layout.module.scss';
import LoadingComponent from './Loader/Loader.jsx';

const Layout = () => {
  return (
    // <Suspense fallback={<LoadingComponent />}>
    <div>
      {/* <Suspense fallback={<LoadingComponent />}> */}
      <AppBar />
      {/* </Suspense> */}
      <div className={css.box}>
        <Suspense fallback={<LoadingComponent />}>
          <Outlet />
        </Suspense>
        <RightSideBar />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Layout;

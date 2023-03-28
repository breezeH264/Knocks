import { Outlet } from 'react-router-dom';

import Header from './Header';
import FirstVisit from '../components/FirstVisit';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <FirstVisit />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

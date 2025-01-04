import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
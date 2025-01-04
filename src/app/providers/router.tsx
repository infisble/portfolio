import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/widgets/layout';
import { HomePage } from '@/pages/home';
import { ProjectsPage } from '@/pages/projects';
import { ContactPage } from '@/pages/contact';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
]);
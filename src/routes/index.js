/* eslint-disable no-undef */
import { Suspense, lazy } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import MainLayout from "../layouts/main";
import LoadingScreen from "../components/LoadingScreen";
const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("/dashboard");

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
        { path: 'consulting', element: <Consulting /> },
        // { path: 'guidance', element: <Guidance /> },
        { path: 'scholarship', element: <Scholarship /> },
        { path: 'tution', element: <Tution /> },
        { path: 'engineering', element: <Engineering /> },
        { path: 'medical', element: <Medical /> },
        { path: 'Arts-and-Science', element: <Arts /> },
        { path: 'Polytechnic', element: <Polytechnic /> },
        { path: 'Design-and-Creativity', element: <Design /> },
        { path: 'Business-Management', element: <Business /> },
        { path: 'Agricultural-Sciences', element: <Agricultural /> },
        { path: 'Emerging-Tech', element: <Emerging /> },
      ],
    },
  ]);
}

const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
const About = Loadable(lazy(() => import('../pages/About')));
const Contact = Loadable(lazy(() => import('../pages/Contact')));
const Consulting = Loadable(lazy(() => import('../pages/Consulting')));
// const Guidance = Loadable(lazy(()=>import('../pages/Guidance')));
const Scholarship = Loadable(lazy(()=> import('../pages/Scholarship')));
const Tution  = Loadable(lazy(()=>import('../pages/Tution')));
const Faqs = Loadable(lazy(() => import('../pages/Faqs')));
const Engineering = Loadable(lazy(() => import('../pages/engineering')));
const Medical = Loadable(lazy(() => import('../pages/medical')));
const Arts = Loadable(lazy(() => import('../pages/arts')));
const Polytechnic = Loadable(lazy(() => import('../pages/polytechnic')));
const Design = Loadable(lazy(() => import('../pages/design')));
const Business = Loadable(lazy(() => import('../pages/business')));
const Agricultural = Loadable(lazy(() => import('../pages/agricultural')));
const Emerging = Loadable(lazy(() => import('../pages/emerging')));

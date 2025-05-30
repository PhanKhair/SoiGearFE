import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UserLayout from "./components/globals/layouts/user";

import LoadingPage from "./pages/loading-page";
import ScrollToTop from "./components/globals/organisms/scroll-to-top";

function App() {
  const Home = lazy(() => import("./pages/home-page"));
  const Contact = lazy(() => import("./pages/contact-page"));
  const About = lazy(() => import("./pages/about-page"));
  const Favorite = lazy(() => import("./pages/favorite-page"));

  const KeyboardDetail = lazy(() => import("./pages/keyboard-detail-page"));
  const KeycapDetail = lazy(() => import("./pages/keycap-detail-page"));

  const Login = lazy(() => import("./pages/login-page"));

  return (
    <Suspense fallback={<LoadingPage />}>
      <ScrollToTop />
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />

          <Route path="/keyboards/:keyboardId" element={<KeyboardDetail />} />
          <Route path="/keycaps/:keycapId" element={<KeycapDetail />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;

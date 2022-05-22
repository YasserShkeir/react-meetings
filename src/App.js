import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/react-meetings" element={<AllMeetupsPage />} />
        <Route path="/react-meetings/new-meetup" element={<NewMeetupPage />} />
        <Route path="/react-meetings/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

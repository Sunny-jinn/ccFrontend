import "./App.css";
import FilePage from "./components/pages/FilePage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import FavoritesPage from "./components/pages/FavoritesPage";
import SharePage from "./components/pages/SharePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ProfilePage from "./components/pages/ProfilePage";
import FolderPage from "./components/pages/FolderPage";
import SearchPage from "./components/pages/SearchPage";
import TagSearchPage from "./components/pages/TagSearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:userId/file" element={<FilePage />} />
        <Route path="/:userId/share" element={<SharePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:userId/favorites" element={<FavoritesPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/userProfile" element={<ProfilePage />} />
        <Route
          path="/:userId/folder/:folderId/:folderName"
          element={<FolderPage />}
        />
        <Route path="/search/:searchtext" element={<SearchPage />} />
        <Route path="/search/tag/:tag" element={<TagSearchPage />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import CharacterPage from './pages/CharacterPage';
import LorePage from './pages/LorePage';
import Navbar from './components/Navbar';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lore" element={<Navigate to="/lore/section1" />} />
      <Route path="/lore/:sectionId" element={<LorePage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/character/:name" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
}

export default App;



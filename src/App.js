import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* ヘッダーを表示 */}
        <Header />

        {/* ルーティング設定 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

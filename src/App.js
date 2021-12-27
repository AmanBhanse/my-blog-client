import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ArticlePage from "./Pages/ArticlePage";
import ArticlesList from "./Pages/ArticlesList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/articles-list" element={<ArticlesList />} />
                    <Route path="/article" element={<ArticlePage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

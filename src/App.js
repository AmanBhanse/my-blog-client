import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ArticlePage from "./Pages/ArticlePage";
import ArticlesList from "./Pages/ArticlesList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <div className="page-body">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/articles-list" element={<ArticlesList />} />
                        <Route path="/article" element={<ArticlePage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ArticlePage from "./Pages/ArticlePage";
import ArticlesListPage from "./Pages/ArticlesListPage";
import NotFoundPage from "./Pages/NotFoundPage";

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
                        <Route path="/article/:name" element={<ArticlePage />} />
                        <Route path="/articles" element={<ArticlesListPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

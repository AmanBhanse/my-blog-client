import React from "react";
import articlesContent from "./ArticlesContent";
import ArticlesList from "../components/ArticlesList";

function ArticlesListPage() {
    return (
        <div className="article-list-page">
            <h2>📑List of Articles</h2>
            <ArticlesList articles={articlesContent} />
        </div>
    );
}

export default ArticlesListPage;

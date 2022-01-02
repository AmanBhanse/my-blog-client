import React from "react";
import articlesContent from "./ArticlesContent";
import ArticlesList from "../components/ArticlesList";

function ArticlesListPage() {
    return (
        <>
            <h2>List of Articles</h2>
            <ArticlesList articles={articlesContent} />
        </>
    );
}

export default ArticlesListPage;

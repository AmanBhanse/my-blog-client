import React from "react";
import { useParams } from "react-router-dom";
import articlesContent from "./ArticlesContent";

function ArticlePage() {
    const { name } = useParams();

    const article = articlesContent.find((article) => article.name === name);

    if (!article) return <h1>Oops! Article not found</h1>;
    return (
        <>
            <h2>{article.title}</h2>
            {article.content.map((paragraph, key) => {
                return <p key={key}>{paragraph}</p>;
            })}
        </>
    );
}

export default ArticlePage;

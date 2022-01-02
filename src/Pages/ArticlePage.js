import React from "react";
import { useParams } from "react-router-dom";
import articlesContent from "./ArticlesContent";
import NotFoundPage from "./NotFoundPage";

function ArticlePage() {
    const { name } = useParams();

    const article = articlesContent.find((article) => article.name === name);

    if (!article) return <NotFoundPage />;
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

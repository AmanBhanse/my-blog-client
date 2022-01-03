import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articlesContent from "./ArticlesContent";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";

function ArticlePage() {
    const { name } = useParams();

    const article = articlesContent.find((article) => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0 });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo({ ...body });
        };
        fetchData();
    }, [name]);

    if (!article) return <NotFoundPage />;

    return (
        <>
            <h2>{article.title}</h2>
            <p>This article has {articleInfo.upvotes} votes</p>
            {article.content.map((paragraph, key) => {
                return <p key={key}>{paragraph}</p>;
            })}
            <CommentsList comments={articleInfo.comments} />
        </>
    );
}

export default ArticlePage;

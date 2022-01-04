import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articlesContent from "./ArticlesContent";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import UpVotes from "../components/UpVotes";
import AddCommentSection from "../components/AddCommentSection";

function ArticlePage() {
    const { name } = useParams();

    const article = articlesContent.find((article) => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0 });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo({ ...body });
            console.log("h");
        };
        fetchData();
    }, [name]);

    if (!article) return <NotFoundPage />;

    return (
        <>
            <div className="articlePage-article-section">
                <h1>{article.title}</h1>
                <UpVotes
                    artcileName={name}
                    articleInfo={articleInfo}
                    setArticleInfo={setArticleInfo}
                />
                {article.content.map((paragraph, key) => {
                    return <p key={key}>{paragraph}</p>;
                })}
            </div>
            <CommentsList comments={articleInfo.comments} />
            <AddCommentSection articleName={name} setArticleInfo={setArticleInfo} />
        </>
    );
}

export default ArticlePage;

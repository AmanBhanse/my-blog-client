import React from "react";

function UpVotes({ artcileName, articleInfo, setArticleInfo }) {
    const articleUpvote = async () => {
        const result = await fetch(`/api/articles/${artcileName}/upvote`, {
            method: "post",
        });

        const body = await result.json();
        setArticleInfo({ ...body });
    };

    return (
        <div className="upvote-section">
            <button onClick={articleUpvote}>Add upvote</button>
            <p>This article has {articleInfo.upvotes} votes</p>
        </div>
    );
}

export default UpVotes;

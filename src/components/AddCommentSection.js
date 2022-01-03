import React, { useState } from "react";

function AddCommentSection({ articleName, setArticleInfo }) {
    const [userName, setUserName] = useState("");
    const [commentText, setCommentText] = useState("");

    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: "post",
            body: JSON.stringify({
                userName,
                text: commentText,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const body = await result.json();
        setArticleInfo(body);
        setUserName("");
        setCommentText("");
    };

    return (
        <div className="add-comment-section">
            <label>
                Name:
                <input
                    type="text"
                    value={userName}
                    onChange={(event) => {
                        setUserName(event.target.value);
                    }}
                />
            </label>

            <label>
                Comment:
                <textarea
                    rows="4"
                    cols="50"
                    value={commentText}
                    onChange={(event) => {
                        setCommentText(event.target.value);
                    }}
                />
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    );
}

export default AddCommentSection;

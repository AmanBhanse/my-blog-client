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
            <h3>Add Comment</h3>
            <div className="property-value-container">
                <label>Name:</label>
                <input
                    placeholder="enter user name"
                    type="text"
                    value={userName}
                    onChange={(event) => {
                        setUserName(event.target.value);
                    }}
                />
            </div>

            <div className="property-value-container">
                <label>Comment:</label>
                <textarea
                    placeholder="enter comment here"
                    rows="4"
                    cols="50"
                    value={commentText}
                    onChange={(event) => {
                        setCommentText(event.target.value);
                    }}
                />
            </div>
            <button
                id="add-comment-button"
                disabled={!userName && !commentText}
                onClick={addComment}
            >
                Add Comment
            </button>
        </div>
    );
}

export default AddCommentSection;

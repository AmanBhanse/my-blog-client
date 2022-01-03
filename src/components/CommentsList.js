import React from "react";

function CommentsList({ comments }) {
    let CommentsSection = (
        <div>
            <h4>Comments Loading</h4>
        </div>
    );

    if (comments) {
        CommentsSection = (
            <div className="comments-list-container">
                {comments.map((commentMeta, key) => {
                    return (
                        <div className="comment-container" key={key}>
                            <div className="comment-user">{commentMeta.userName}</div>
                            <div className="comment-text">{commentMeta.text}</div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="comments-list-wrapper">
            <h3>Comments</h3>
            {CommentsSection}
        </div>
    );
}

export default CommentsList;

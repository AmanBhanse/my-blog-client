import React from "react";
import { Link } from "react-router-dom";

function ArticlesList({ articles }) {
    return (
        <div className="article-list-container">
            {articles.map((article, key) => {
                return (
                    <div key={key} className="articleList-singleArticleBody">
                        <Link to={`/article/${article.name}`}>
                            <h3>{article.title}</h3>
                        </Link>
                        <p>{article.content[0].substring(0, 250)}...</p>
                    </div>
                );
            })}
        </div>
    );
}

export default ArticlesList;

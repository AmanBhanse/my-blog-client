import React from "react";
import articlesContent from "./ArticlesContent";
import { Link } from "react-router-dom";

function ArticlesList() {
    return (
        <>
            <h2>List of Articles</h2>
            <div className="article-list-container">
                {articlesContent.map((article, key) => {
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
        </>
    );
}

export default ArticlesList;

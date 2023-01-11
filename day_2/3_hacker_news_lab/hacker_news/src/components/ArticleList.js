import React from "react";


const ArticleList = ({articles}) => {

    const listArticles = articles.map(article => <li key={article.id}><a href={article.url}>
        <strong>{article.title}</strong>, by {article.by}</a>
        </li>)

    return (
        <div>
            <ul>
                {listArticles}
            </ul>
        </div>
    )


}

export default ArticleList;
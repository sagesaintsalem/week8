import {useState, useEffect} from "react";
import Search from "../components/Search";
import ArticleList from "../components/ArticleList";

const Container = () => {
    const[articles, setArticles] = useState([]);
    const[filteredArticles, setFilteredArticles] = useState([]);


    const filterData = (term) => {
        const filteredData = articles.filter(article => {
            return article.title.includes(term);
        })
        setFilteredArticles(filteredData);
    }

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(storyIds => {
            const storyPromises = storyIds.slice(0,50).map(storyId => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                .then(res => res.json())
            })
            Promise.all(storyPromises)
            .then(storyDetails => {
                setArticles(storyDetails);
                setFilteredArticles(storyDetails);
            })
        }); 
    }, [])




    return (
        <div>
            <Search filterData={filterData}></Search>
            <ul>
                <ArticleList articles={filteredArticles}/>
            </ul>

        </div>
    )
}

export default Container;
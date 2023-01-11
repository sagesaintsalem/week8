import {useState, useEffect} from "react";
import Search from "../components/Search";
import ArticleList from "../components/ArticleList";

const Container = () => {
    const[articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(storyIds => {
            const storyPromises = storyIds.slice(0,10).map(storyId => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                .then(res => res.json())
            })
            Promise.all(storyPromises)
            .then(storyDetails => {
                setArticles(storyDetails)
            })
        }); 
    }, [])

    



    return (
        <div>
            <Search></Search>
            <ul>
                <ArticleList articles={articles}/>
            </ul>

        </div>
    )
}

export default Container;
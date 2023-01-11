import {useState, useEffect} from "react";

const Search = () => {
    const [searchResults, setsearchResults] = useState([]);
    const [term, setTerm] = useState("");

    const handleInput = function(event){
        const term = event.target.value
        setTerm(term);
    }


    return (
        <div className='search-area'>
            <form>
                <input type="text" placeholder="Search" onChange={handleInput} value={term}/>
                <button type='submit'>Go!</button>
            </form>
            <ul className='search-results'>
                <li>Placeholder</li>
            </ul>
        </div>
    )


}

export default Search;
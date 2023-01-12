import {useState, useEffect} from "react";

const Search = ({ filterData }) => {
    // const [searchResults, setsearchResults] = useState([]);
    const [term, setTerm] = useState("");

    const handleInput = function(event){
        const term = event.target.value
        setTerm(term);
    }

    useEffect(() => {
        filterData(term);
    },[term])

    return (
        <div className='search-area'>
            <form>
                <input type="text" placeholder="Search" onChange={handleInput} value={term}/>
                <button type='submit'>Go!</button>
            </form>
        </div>
    )


}

export default Search;
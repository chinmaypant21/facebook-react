import { SearchIcon } from "../../utils/icons"

const SearchBar = () => {
    return (
        <div className="searchBar-container">
            <SearchIcon style={{height:'100%'}}/>
            <input placeholder="Search Facebook"/>
        </div>
    )
}

export default SearchBar
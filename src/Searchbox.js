import React from "react";
const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
      <input type='search' placeholder='search-cats' className="search-form pa2 hover-bg-lightest-blue ba b--purple" onChange={searchChange}/>
        </div>
    );
}
export default SearchBox;
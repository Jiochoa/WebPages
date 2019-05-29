import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div clasName ='p2'>
            <input className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots' 
                onChange={searchChange}
            />
        </div> 

    );
}
export default SearchBox;
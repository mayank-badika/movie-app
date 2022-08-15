import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchBox;

//Takes a value from props, and when the user types, 
//calls a function which updates the value. This is also taken from props
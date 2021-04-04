import React,{useState} from 'react';

function Search(props){
    function handleSubmit (event){
        event.preventDefault();
        props.setSearchName(event.target[0].value)
        console.log(event.target[0].value);
       // props.handleClick(event.target[0].value)
    }


return(
    <div>
    <form onSubmit={handleSubmit}>
        <input type="text" value={props.value}></input>
        <button type="submit" >Search</button>
    </form>
    </div>
)
}

export default Search;
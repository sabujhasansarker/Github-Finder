import React,{useState,useContext} from 'react';
import GithubContext from '../../Context/Github/GithubContext';

const Search = ( ) => {
	const githubContext = useContext(GithubContext)
	const {searchUser,clear,hendelClear,alartItem} = githubContext
	const [searchValue,setSearchValue]=useState('')
	const hendelSubmit = (e) =>{
		e.preventDefault()
		if (searchValue === '') {
			alartItem('please enter someting','light')
		}else {
			setSearchValue(e.target.value)
			searchUser(searchValue)
			setSearchValue('')
		}
	}
  return (
    <div>
		<form className="from" onSubmit={hendelSubmit}>
			<input type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
			<input type="submit" value="search" className="btn-block btn btn-dark" />
		</form>
		{clear ? (<input type="submit" onClick={hendelClear} value="Clear" className="btn-block btn btn-light"/>) :''}		
    </div>
  )
}

export default Search;
import React,{useContext} from 'react';
import UserItem from './UserItem'
import Spinner from '../Layout/spinner'
import GithubContext from '../../Context/Github/GithubContext';
const User = () => {
	const githubContext = useContext(GithubContext)
	const {gitHubUser,loading} = githubContext
	const userStyle = {
  			display : 'grid',
  		    gridTemplateColumns: 'repeat(3,1fr)',
  		    gridGap: '1rem'
  	}
	if (!loading) {
		return <Spinner/>
	}else {
		return (
    <div style = {userStyle}>
    	{gitHubUser.map(user=>(
			<UserItem 
				image={user.avatar_url} 
				key={user.id} 
				name={user.login} 
				url={user.html_url} 
			/>
    		))}
	</div>
  )
	}
  
}

export default User;	
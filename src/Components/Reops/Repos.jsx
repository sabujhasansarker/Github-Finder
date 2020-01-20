import React from 'react';
import ReposIteam from './ReposIteam'
const Repos = ({repos}) => {
  return (
    	<div>
			{repos.map(e=>(
			<ReposIteam html_url={e.html_url} name={e.name} key={e.id}/>
    		))}
    	</div>
  )
}

export default Repos;
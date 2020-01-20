import React from 'react';
import {Link} from 'react-router-dom'
const UserItem = ({image,name,url}) => {
 
  return (
    <div className="card text-center">
		<img src ={image} alt={name} className="round-img" style ={{width:'60px'}}/>
		<h3>{name}</h3>
		<div>
			<Link to={`/user/${name}`} className="btn btn-dark btn-sm my-1">More</Link>
		</div>
    </div>
  )
}

export default UserItem;	
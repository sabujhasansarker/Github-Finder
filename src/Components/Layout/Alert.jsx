import React, { useContext } from 'react';
import GithubContext from '../../Context/Github/GithubContext';

const Alert = () => {
  const githubContext = useContext(GithubContext)
const {alert} = githubContext
  return (
    alert !== null && (
			<div className={`alert alert-${alert.type}`}>
    <i className="fas fa-info-circle"> {alert.msg}</i>
    </div>
    	)
  )
}

export default Alert;
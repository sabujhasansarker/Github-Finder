import React,{useEffect,useContext,Fragment} from 'react';
import Spinner from '../Layout/spinner'
import {Link} from 'react-router-dom'
import GithubContext from '../../Context/Github/GithubContext';
import Repos from '../Reops/Repos';
const DemoUser = ({match}) => {
    const gethubContext = useContext(GithubContext)
    const {getUser,user,loading,getRepo,repo}= gethubContext
    useEffect(() => {
		getRepo(match.params.name)
	   getUser(match.params.name)
	   
    }, [])
    const {login,avatar_url,html_url,followers,following,hireable,blog,bio,public_repos,public_gists,location,company} = user	
    if (!loading) {
        return <Spinner/>
    }else {
        return (
           <div className="container">
               <Link to='/' className="btn btn-light">Back To Home</Link>
                   Hireable : {''}
                       {hireable ? 
                           (<i className="fas fa-check text-success"></i>) :
                           (<i className="fas fa-times-circle text-danger"></i>)
                       }
                   <div className="card grid-2">
                       <div className="all-center">
                           <img src ={avatar_url} className="round-img" alt={login} style ={{width:'150px'}}/>
                           <h1>{login}</h1>
                           <p>Location: {location}</p>
                       </div>
                       <Fragment>
                           {bio && <Fragment>
                                       <h3>Bio</h3>
                                       <p>{bio}</p>
                                   </Fragment>	
                           }
                           <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                           <ul>
                               {login && (<li><strong>Username: </strong> {login}</li>)}
                               {company && (<li><strong>Company: </strong> {company}</li>)}
                               {blog && (<li><strong>Website: </strong> {blog}</li>)}
                           </ul>
                       </Fragment>
                   </div>
                   <div className="card text-center">
                       <div className="badge badge-primary">Followers: {followers}</div>
                       <div className="badge badge-success">Following: {following}</div>
                       <div className="badge badge-danger">Public Repos: {public_repos}</div>
                       <div className="badge badge-dark">Public GIsts: {public_gists}</div>
                   </div>
                   {/* <Repos repo={userRrop.user}/> */}
				   <Repos repos={repo}/>
           </div>
       );

    }
}
 
export default DemoUser;
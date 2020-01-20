import React,{useReducer,useEffect} from 'react';
import axios from 'axios'
import GithubReducer from './GithubReducer'
import GithubContext from './GithubContext'
import {
		SEARCH_USERS,
		GET_USERS,
		CLEAR_USERS,
		GET_REPOS,
		SET_LOADING,
		SET_ALERT,
		REMOVE_ALERT,
		SINGLE_USER
} from '../Type'
const GithubState = props =>{
	const initialState = {
		users:[ ],
		user : { },
		repo : [ ],
		clear : false,
		loading : false,
		alert : null
	}
	const [state,dispatch] = useReducer(GithubReducer, initialState)

	// Search Users
	const searchUser = async text => {
		const user = await axios.get(
		  `https://api.github.com/search/users?q=${text}&user_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
		);
		// setGitHubUser({ user: user.data.items, loading: true });
		// setClear(true);
		dispatch({
			type : SEARCH_USERS,
			payload : user.data.items
		})
	  };
	// Get user
	useEffect(() => {
		const getMount = async () => {
		  const show = await axios.get(
			`https://api.github.com/users?&user_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
		  );
		  dispatch({
			  type: GET_USERS,
			  payload : show.data,
		  })
		};
		getMount();
		getUser();
		getRepo();
		// eslint-disable-next-line
	  }, []);

	

	//   alert
	const alartItem = (msg, type) => {
		dispatch({
			type : SET_ALERT,
			payload : { msg: msg, type: type }
		})
		setTimeout( () => dispatch({
			type : REMOVE_ALERT,
		}), 5000);
	  };

	// clear  user
	const hendelClear = async () => {
		const show = await axios.get(
		  `https://api.github.com/users?&user_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
		);
		// setGitHubUser({ user: show.data, loading: true });
		dispatch({
			type : CLEAR_USERS,
			payload : show.data
		})
	  };

	//   single user
	const getUser = async username => {
		const user = await axios.get(
		  `https://api.github.com/users/${username}?&user_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
		);
		// setsingleUserView({ user: user.data, loading: true });
		dispatch ({
			type :  SINGLE_USER,
			payload : user.data
		})
		
	  };

	  // get repos
	const getRepo = async username => {
		const show = await axios.get(
		  `https://api.github.com/users/${username}/repos?per_page=5&user_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
		);
		// setuserRrop({ user: show.data, loading: true });
		dispatch({
			type : GET_REPOS,
			 payload : show.data,
		})
	  };
	// set loading
	  const setLoading=()=>dispatch({ type:SET_LOADING })

	return(

			<GithubContext.Provider value={
				{
						gitHubUser:state.users,
						user:state.user,
						repo:state.repo,
						loading:state.loading,
						searchUser,
						hendelClear,
						clear : state.clear,
						getUser,
						getRepo,
						alartItem,
						alert:state.alert
				}
			}>
				{props.children}
			</GithubContext.Provider>
		)
} 
export default GithubState;
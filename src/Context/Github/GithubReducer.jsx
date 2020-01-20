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

export default (state,action)=>{
    switch (action.type) {
        case GET_USERS : 
        return {
            ...state,
            users: action.payload,
            loading : true
        }
        case SEARCH_USERS : 
        return {
            ...state,
            users : action.payload,
            loading : true,
            clear : true
        }
        case SET_LOADING :
            return{
                ...state,
                loading: true
            }
       
        case CLEAR_USERS :
            return{
                ...state,
                users : action.payload,
                clear : false,
                loading : true
            }
        case SET_ALERT :
        return {
            ...state,
            alert : action.payload,
        }  
    case REMOVE_ALERT : 
        return{
            ...state,
            alert : null
        }
    case GET_REPOS :
        return{
            ...state,
            repo : action.payload,
            loading : true
    }   
    case SINGLE_USER :
        return {
            ...state,
            user : action.payload,
            loading : true
        }   
      
        default:
            return state
    }
}
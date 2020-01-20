import React,{Fragment} from 'react';
import spinner from './spinner.gif'
const Spinner = (props) => {
  return (
    <Fragment>
		<img src={spinner} alt="spinner" style ={{width : '200px',display : 'block', margin:'0 auto'}}/>
    </Fragment>
  )
}

export default Spinner;
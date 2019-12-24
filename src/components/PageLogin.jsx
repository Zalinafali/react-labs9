import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class PageLogin extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = { 
          
        }
      }

      render(){
          return(
                <div>
                    <h1>Login:</h1>
                    <div>Username: <input type="text"/> </div>
                </div>
          )
      }

}
  
  export default connect(
    null,
    null
  )(PageLogin)
import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import {login} from '../redux/actions'

class PageLogin extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
          username: ''
        }

        this.usernameChanged = this.usernameChanged.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
      }

      usernameChanged(e) {
        this.setState({ username: e.target.value });
      }

      loginHandler(e) {
        e.preventDefault();
        this.props.login(this.state.username);
      }

      componentDidUpdate() {
        if (this.props.user === null)
          return;
        this.props.history.push("/list");
      }

      render(){
          return(
                <div>
                    <h1>Login:</h1>
                    <div>Username: <input type="text" onChange={this.usernameChanged}/> </div>
                    <button onClick={this.loginHandler}>Log</button>
                </div>
          )
      }

}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (username) => dispatch(login(username))
})
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PageLogin))
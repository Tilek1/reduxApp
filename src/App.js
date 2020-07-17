import React from 'react'
import  Users from './components/User'
import  Main  from './components/Main'
import {connect} from 'react-redux'
import {setName} from './actions/userActions'

class App extends React.Component {
    

    render() {
      return (
        <div className="container">
          <Main changeUsername={this.props.setName} />
          <Users username={this.props.user.name} />
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
      user: state.userReducer,
      math: state.mathReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



















/*import React from 'react';

import User from './components/User'
import Main from './components/Main'
import {connect} from 'react-redux'

import {setName} from './actions/userActions';

class App extends React.Component {
  constructor() {
    super();
  }

  changeUsername(newName) {
    this.props.setName(newName)
  }

  render() {
    return (
      <div className="container"> 
        <Main changeUsername={this.changeUsername.bind(this)} />
        <User username= {this.props.user.name}/>
      
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { simpleAction } from '../../actions/simpleAction'
import { HomeConetent } from './style'

class Home extends Component {
  simpleAction = event => {
    this.props.simpleAction()
  }

  render () {
    console.log(this.props.getData,"getData")
    return (
      <div>
        <HomeConetent>Home Page</HomeConetent>
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
  getData: state.simpleReducer
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

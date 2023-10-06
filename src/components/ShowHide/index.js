import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  ShowFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  ShowLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card">
          <button className="button" type="button" onClick={this.ShowFirstName}>
            Show/Hide Firstname
          </button>
          {isFirstName && <p>Joe</p>}
        </div>
        <div className="card">
          <button className="button" type="button" onClick={this.ShowLastName}>
            Show/Hide Lastname
            {isLastName && <p>Jonas</p>}
          </button>
        </div>
      </div>
    )
  }
}

export default ShowHide

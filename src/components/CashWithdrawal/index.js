// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  sub = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state

    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="container">
          <div className="mini-container">
            <p className="circle">s</p>
            <p className="para">Sarah Williams</p>
          </div>
          <div className="balance">
            <p className="your-balance">Your Balance</p>
            <div className="rupees-container">
              <p className="rupees">{amount}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <div>
            <p className="withdraw">Withdraw</p>
            <p className="sum">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul>
            {denominationsList.map(each => (
              <DenominationItem name={each} key={each.id} sub={this.sub} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

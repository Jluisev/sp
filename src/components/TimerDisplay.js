import React, {Component} from 'react'

class TimerDisplay extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="timer-display">
        <div className='unit-amount'>{this.props.unitAmount}</div>
        <div className='unit-name'>{this.props.unitName}</div>
      </div>
    )
  }
}

export default TimerDisplay
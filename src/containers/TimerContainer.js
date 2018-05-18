import React, {Component} from 'react'
import {connect} from 'react-redux'

import moment from 'moment'
import TimerDisplay from '../components/TimerDisplay'

import {updateTime} from '../actions'

import {
  SECONDS_PER_DAY,
  SECONDS_PER_MINUTE,
  SECONDS_PER_HOUR
} from '../constants'

class TimerContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.props.updateTime(),
      1000
    )
  }

  componentDidUpdate() {
    !this.props.currentTime && clearInterval(this.intervalId)
  }

  timeConversionHelper(currentTime) {
    let remainder

    const days = Math.floor(currentTime/SECONDS_PER_DAY)
    remainder = currentTime % SECONDS_PER_DAY

    const hours = Math.floor(remainder/SECONDS_PER_HOUR)
    remainder = remainder%SECONDS_PER_HOUR

    const minutes = Math.floor(remainder/SECONDS_PER_MINUTE)
    remainder = remainder%SECONDS_PER_MINUTE

    return {
      days,
      hours,
      minutes,
      seconds: remainder
    }
  }

  render() {
    const {currentTime} = this.props

    const {days, hours, minutes, seconds} = this.timeConversionHelper(currentTime)

    return (
      <div className='timer-container'>
        <TimerDisplay 
          unitAmount={days}
          unitName={'Days'}
        />
        <TimerDisplay 
          unitAmount={hours}
          unitName={'Hours'}
        />
        <TimerDisplay 
          unitAmount={minutes}
          unitName={'Minutes'}
        />
        <TimerDisplay 
          unitAmount={seconds}
          unitName={'Seconds'}
        />
      </div>
    )
  }
}

const mapStateToProps = ({currentTime}) => {
  return {currentTime}
}

export default connect(mapStateToProps, {updateTime})(TimerContainer);
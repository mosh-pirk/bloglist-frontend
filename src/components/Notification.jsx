import PropTypes from 'prop-types'

const Notification = ({ message, style }) => {
  if (message === null) {
    return null
  }
  return (
    <div className={style}>
      {message}
    </div>
  )
}


export default Notification


Notification.prototype = {
  message: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired
}
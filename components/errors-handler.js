import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { show } from 'redux-modal'
import { bindActionCreators } from 'redux'

class ErrorsHandler extends Component {
  componentDidUpdate(preProps) {
    if (this.props.error && this.props.error !== preProps.error) {
      // Simulate a JS error
      this.props.show('snackbar', {
        type: 'error',
        info: this.props.error
      })
    }
  }

  render() {
    return null
  }
}

ErrorsHandler.propTypes = {
  error: PropTypes.object,
  show: PropTypes.func
}


const mapStateToProps = state => {
  return {
    error: state.errors.error
  }
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ show }, dispatch)
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorsHandler)

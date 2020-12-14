import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';
import { withTranslation } from 'react-i18next';
import { HeaderMode } from '../constants';
import SideBar from './sidebar';

import '../styles/pages/_index.scss';

class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { t, children, noFooter } = this.props
    return (
      <div className="page-style">
        <div className="side-bar"><SideBar/></div>
        <div className="right-content">
          <div className="header"><Header/></div>
          <div className="content-children">{children}</div>
          <div className="footer"><Footer/></div>
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  t: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  noFooter: PropTypes.bool,
}

Layout.defaultProps = {
  noFooter: false
}

export default withTranslation()(Layout)

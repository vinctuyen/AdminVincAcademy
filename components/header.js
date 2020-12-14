import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import "../styles/components/_header.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import { Slide } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      anchorEl: null
    };
  }

  handleOnPressEnter(e) {
    if (e.key === "Enter") {
      alert(e.target.value);
    }
  }

  render() {
    const { pathname } = this.props.router;
    const titleHeader = pathname.charAt(1).toUpperCase() + pathname.slice(2);
    return (
      <header className="header-nav-bar">
        <Button href="#text-buttons" size="large" className="menu">
          {titleHeader || "Home"}
        </Button>
        <div className="nav-bar">
          <div className="search-input">
            <TextField
              id="standard-uncontrolled"
              label="Search"
              className=""
              margin="normal"
              onKeyPress={this.handleOnPressEnter}
            />
          </div>
          <IconButton className="icon-button">
            <Badge className="badge" badgeContent={4} color="secondary">
              <div className="notification">
                <NotificationsIcon />
              </div>
            </Badge>
          </IconButton>
          <IconButton className="icon-button">
            <div className="account">
              <PersonIcon />
            </div>
          </IconButton>
          <IconButton className="icon-button">
            <div className="setting">
              <SettingsIcon />
            </div>
          </IconButton>
        </div>
      </header>
    );
  }
}

Header.propTypes = {};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));

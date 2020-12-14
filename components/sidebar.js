import React from "react";
import dashboardRoutes from "./router";
import Link from "next/link";
import { withRouter } from 'next/router'

import List from "@material-ui/core/List";
import Icon from "@material-ui/core/Icon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import "../styles/components/sidebar.scss";

const Company = () => {
  return (
    <div className="company">
      <a>
        <div className="logo">
          <img src="/static/image/logo.svg"></img>
        </div>
        LOGONAME
      </a>
    </div>
  );
};
const links = pathLocation => {
  return (
    <List className="" style={{ zIndex: 6 }}>
      {Company()}
      {dashboardRoutes.map((prop, key) => {
        return (
          <Link href={prop.path} key={key}>
            <div className="slide-nav active">
              <ListItem
                button
                className={
                  prop.path === pathLocation
                    ? "slide-nav-item active"
                    : "slide-nav-item"
                }
              >
                {typeof prop.icon === "string" ? (
                  <Icon className="slide-nav-item-icon">{prop.icon}</Icon>
                ) : (
                  <prop.icon className="" />
                )}
                <ListItemText className="slide-nav-item-subject">
                  {prop.name}
                </ListItemText>
              </ListItem>
            </div>
          </Link>
        );
      })}
    </List>
  );
};

function SideBar({ router }) {
    return <div className="slide-bar">{links(router.pathname)}</div>;
  }

export default withRouter(SideBar);

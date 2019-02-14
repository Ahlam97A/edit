/*import Hidden from "@material-ui/core/Hidden";
import Person from "@material-ui/icons/Person";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import { Switch } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Search from "@material-ui/icons/Search";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Notifications from "@material-ui/icons/Notifications";
import Poppers from "@material-ui/core/Popper";
import Dashboard from "@material-ui/icons/Dashboard";

import React, { Component } from "react";

import classNames from "classnames";

import { Route, Redirect } from 'react-router';

import UserProfile from "views/UserProfile/UserProfile.jsx";

import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";


function postData(url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(response => response.text()); // parses response to JSON
}






class HeaderLinks extends React.Component {

  constructor(props) {
    super(props);
    //this.home = this.home.bind(this);
  }

  state = {
    open: false
  };





  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  handleClick = () => {
    window.location.assign('/user/');
  }


  handleClick1 = () => {
    window.location.assign('/notifications/');
  }



  render() {

    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>
        <div className={classes.searchWrapper}>
          <CustomInput
            formControlProps={{ className: classes.margin + " " + classes.search }}
            inputProps={{ placeholder: "Search", inputProps: { "aria-label": "Search" } }}
          />
          <Button color="white" aria-label="edit" justIcon round> <Search /></Button>
        </div>




        <Button
          color={window.innerWidth > 2000 ? "transparent" : "primary"}
          justIcon={window.innerWidth > 2000}
          simple={!(window.innerWidth > 2000)}
          aria-label="ExitToAppIcon"
        //className={classes.buttonLink}
        >
          <h5><a>LogOut</a></h5>

        </Button>


        <Button
          aria-label="Dashboard"
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          color={window.innerWidth > 959 ? "transparent" : "white"}
          className={classes.buttonLink}

        >

          <a onClick={() => { document.location.href = "../../views/Dashboard/Dashboard.jsx"; }}><Dashboard /> </a>
        </Button>






        <div className={classes.manager}>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            color={window.innerWidth > 959 ? "transparent" : "white"}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-owns={open ? "menu-list-grow" : null}
            aria-haspopup="true"
            onClick={this.handleToggle}
            className={classes.buttonLink}
          >
            <a><Notifications onClick={this.handleClick1} /></a>
          </Button>
        </div>


        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-label="Person"
          className={classes.buttonLink}
        >
          <a><Person onClick={this.handleClick} /></a>

        </Button>




      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
*/
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import { Switch } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Search from "@material-ui/icons/Search";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Dashboard from "@material-ui/icons/Dashboard";

import React, { Component } from "react";

import classNames from "classnames";

import { Route, Redirect } from 'react-router';

import UserProfile from "views/UserProfile/UserProfile.jsx";

import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";


function postData(url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(response => response.text()); // parses response to JSON
}






class HeaderLinks extends React.Component {

  constructor(props) {
    super(props);
    //this.home = this.home.bind(this);
  }

  state = {
    open: false
  };





  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  handleClick = () => {
    window.location.assign('/user/');
  }


  handleClick1 = () => {
    window.location.assign('/notifications/');
  }



  render() {

    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>

<Button
          color={window.innerWidth > 2000 ? "transparent" : "primary"}
          justIcon={window.innerWidth > 2000}
          simple={!(window.innerWidth > 2000)}
          aria-label="ExitToAppIcon"
        //className={classes.buttonLink}
        >
          <h5><a>PrincipalName</a></h5>

        </Button>




        <Button
          color={window.innerWidth > 2000 ? "transparent" : "primary"}
          justIcon={window.innerWidth > 2000}
          simple={!(window.innerWidth > 2000)}
          aria-label="ExitToAppIcon"
        //className={classes.buttonLink}
        >
          <h5><a>LogOut</a></h5>

        </Button>


        <Button
          aria-label="Dashboard"
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          color={window.innerWidth > 959 ? "transparent" : "white"}
          className={classes.buttonLink}

        >

          <a onClick={() => { document.location.href = "../../views/Dashboard/Dashboard.jsx"; }}><Dashboard /> </a>
        </Button>






        <div className={classes.manager}>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            color={window.innerWidth > 959 ? "transparent" : "white"}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-owns={open ? "menu-list-grow" : null}
            aria-haspopup="true"
            onClick={this.handleToggle}
            className={classes.buttonLink}
          >
            <a><Notifications onClick={this.handleClick1} /></a>
          </Button>
        </div>


        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-label="Person"
          className={classes.buttonLink}
        >
          <a><Person onClick={this.handleClick} /></a>

        </Button>




      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);

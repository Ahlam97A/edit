import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Button from "components/CustomButtons/Button.jsx";
import Cloud from "@material-ui/icons/Cloud";
import InputLabel from '@material-ui/core/InputLabel';
import InputForm from "views/Typography/InputForm.jsx";
import axios from 'axios';
import Info from "components/Typography/Info.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Quote from "components/Typography/Quote.jsx";
import Danger from "components/Typography/Danger.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import Primary from "components/Typography/Primary.jsx";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import {Garph} from "views/Graph/Graph";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import 'views/Dashboard/circle.css'
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";

import Chart1 from "views/Dashboard/chart";
import Donut from "views/Dashboard/dout";
import HHHH from "views/Dashboard/html";
import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
function getData(url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",

      "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    //body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(response => response.json()); // parses response to JSON
}
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      data: []

    }
  }

  notif= (e) => {
    
      e.preventDefault();
      window.location.assign('/notifications/');
    
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  componentDidMount() {
    console.log(this.state.series);
    var th = this;
    getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Dashboard/point.php`)
      .then(function (event) {
        th.setState({
          data: event//.data
        });
      })
  }
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}></p>
                <h3 className={classes.cardTitle}>
                  Students<small></small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>

                  <Button round color="warning" style={{ width: "100%" }} > show Students</Button>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}></p>
                <h3 className={classes.cardTitle}>Teachers</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>

                  <Button round color="success" style={{ width: "100%" }} >show Teachers</Button>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}></p>
                <h3 className={classes.cardTitle}>Absence</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>

                  <Button round color="danger" style={{ width: "100%" }} >show absence</Button>
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}></p>
                <h3 className={classes.cardTitle}>Massage</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Button round color="info" style={{ width: "100%" }} >show Massage</Button>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>


        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            {/*}
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Sales</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
    </Card>*/}

          </GridItem>
          <Garph />

          <GridItem xs={12} sm={12} md={8} >
            <form onSubmit={this.handleSubmit} onChange={this.updateInput} style={{ textAlign: "center", alignContent: "Center" }}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                  <Card justify="center">
                    <CardHeader >
                      <h3 className={classes.cardCategoryWhite} style={{ color: "#000" }}>Top Students</h3>
                      <h4 className={classes.cardTitleWhite}> </h4>
                    </CardHeader>
                    <CardBody>
                      <GridContainer justify="center">

                        <GridItem xs={12} sm={12} md={12} style={{ textAlign: "center" }} >
                          {
                            this.state.data.map((item, i) => (
                              <table key={i} style={{textAlign:"center"}}>
                              <tbody>
                              <tr style={{ background: "#e1bee7",fontSize:"20px",textAlign:"center"}}>
                                <td>
                                <pre  style={{ background: "#e1bee7", color: "#000", fontFamily: "Comic Sans MS", width: "500px", }}>{item.name} {item.point}% 
                                Section :{item.level} </pre>
                                </td>
                                <td>
                                <button style={{ textAlign: "left" }}  onClick={(e) => {
                                                e.preventDefault();
                                                window.location.assign('/notifications/'+ item.name + '/' + item.id + '/' + item.parent);
                                            }}>Maggess</button></td>
                              </tr>
                              </tbody>
                             
                                
                              </table>
                            )
                            )
                          }

                        </GridItem>
                      </GridContainer>
                    </CardBody>
                    
                  </Card>
                </GridItem>
              </GridContainer>
            </form>
            </GridItem>
         





          <Chart1 />

          <GridItem xs={12} sm={12} md={4}>
            {/*}
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
  */}

            <Donut />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <HHHH />


        {/*}
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Bugs",
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                    />
                  )
                },
                {
                  tabName: "Website",
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                },
                {
                  tabName: "Server",
                  tabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Salary", "Country"]}
                  tableData={[
                    ["1", "Dakota Rice", "$36,738", "Niger"],
                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                    ["4", "Philip Chaney", "$38,735", "Korea, South"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
                */}
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);

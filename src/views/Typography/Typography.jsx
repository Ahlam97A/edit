import TabContent from '@material-ui/core/Tab';
import TabList from '@material-ui/core/Tab';
import DateRange from "@material-ui/icons/DateRange";
import Accessibility from "@material-ui/icons/Accessibility";
import AccessTime from "@material-ui/icons/AccessTime";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Update from "@material-ui/icons/Update";
import LocalOffer from "@material-ui/icons/LocalOffer";
import TabLink from '@material-ui/core/Tab';
import Cloud from "@material-ui/icons/Cloud";
import BugReport from "@material-ui/icons/BugReport";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Search from '@material-ui/icons/Search';
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from '@material-ui/core/InputLabel';
import Tab from '@material-ui/core/Tab';
import Store from "@material-ui/icons/Store";
import AppBar from '@material-ui/core/AppBar';
import Code from "@material-ui/icons/Code";
import TabPanel from '@material-ui/core/Tab';

import React from "react";

import Example from "ahlam.jsx";

import CardHeader from "components/Card/CardHeader.jsx";

import Build from "views/Typography/tablee.jsx";

import { bugs, website, server } from "variables/general.jsx";

import Card from "components/Card/Card.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import Muted from "components/Typography/Muted.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import Success from "components/Typography/Success.jsx";

import InputForm from "views/Typography/InputForm.jsx";

import Info from "components/Typography/Info.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Quote from "components/Typography/Quote.jsx";
import Danger from "components/Typography/Danger.jsx";
import Warning from "components/Typography/Warning.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Primary from "components/Typography/Primary.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "200px"
  },
  cardCategoryWhite: {
    color: "rgba(200,2,2,.62)",
    margin: "0",
    fontSize: "16px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFffff",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};



const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

function postData(url, data ) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
       "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(response => response.text()); // parses response to JSON
}


function getData(url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
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


//function TypographyPage(props) {
class TypographyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit_upload = this.handleSubmit_upload.bind(this);
    this.handleSubmit3 = this.handleSubmit3.bind(this);
    this.handleSubmit4 = this.handleSubmit4.bind(this);
  }


  updateInput(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/a.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
  }

  handleSubmit3 = (event) => {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/delete.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));

  }
  handleSubmit4 = (event) => {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/delete_all.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));

  }


  handleSubmit_upload(event) {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/upload.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
  }

  handleSubmit5 = (event) => {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/search.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
    <Build />

  }

  updateInput_upload(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  render() {
    // var props;
    const { classes } = this.props;
    const styleInput = {
      width: "100%",
      alignContent: "Center",
      height: "20px",
      margin: "3px 0",
      border: "1px solid #ccc",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px"
    };
    return (

      <div style={{ alignContent: "Center" }}>
        <GridContainer>

          <GridItem xs={12} sm={12} md={10}>
            <CustomTabs
              title="Students"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Add Students",
                  tabIcon: Accessibility,
                  tabContent: (
                    <form action="a.php" onSubmit={this.handleSubmit} onChange={this.updateInput}>
                      <GridItem xs={12} sm={12} md={10}>
                        <Card>
                          <CardHeader color="warning">
                            <h3 className={classes.cardCategoryWhite}>Student Page</h3>
                            <h4 className={classes.cardTitleWhite}>Add A Student </h4>
                          </CardHeader>
                          <CardBody>
                            <GridContainer>

                              <InputForm inputType="text" inputKey="fname" inputLabel="Student First Name:"    />
                              <InputForm inputType="text" inputKey="mname" inputLabel="Parent Name:"   />
                              <InputForm inputType="text" inputKey="lname" inputLabel="Student Last Name:"  />



                              <InputForm inputType="number" inputKey="id_st" inputLabel="Student ID:"   />

                              <InputForm inputType="text" inputKey="id" inputLabel="class ID:"  />

                              <InputForm inputType="date" inputKey="DateofBirth" inputLabel="Date of Birth :"  />


                              <InputForm inputType="number" inputKey="p_id" inputLabel="Parent ID : "   />

                              <InputForm inputType="text" inputKey="address" inputLabel="Address : " />
                              <InputForm inputType="text" inputKey="city" inputLabel="City : " />
                              <InputForm inputType="number" inputKey="phone" inputLabel="Phone : "   />

                            </GridContainer>
                          </CardBody>
                          <CardFooter>
                            <Button color="primary" name="Add" type="submit" value="Add">Add</Button>
                          </CardFooter>
                        </Card>
                      </GridItem>
                    </form>



                  )

                },
                {
                  tabName: "Add A list of Students",
                  tabIcon: LibraryBooks,
                  tabContent: (
                    <center>
                      <GridContainer>
                        <form action="a.php" onSubmit={this.handleSubmit_upload}>
                          <GridItem xs={12} sm={12} md={12}>
                            <Card>
                              <CardHeader color="info">
                                <h4 className={this.cardTitleWhite}>Add List Of Students</h4>
                                <p className={this.cardCategoryWhite}></p>
                              </CardHeader>
                              <CardBody>
                                <GridContainer>
                                  <div style={{ alignContent: "center", alignItems: "center" }}>
                                    <h4 color="primary"><a>To be simple for you to add List of Students , you should add A file of .csv extension (FileName.csv).  The file must be  contain Specific Information about the Student.</a></h4>
                                  </div>

                                  <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
                                    <InputLabel style={{ color: "#000", alignContent: "Center" }}>Select List Of Students: </InputLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }}>
                                    <input color="primary" type="file" name="fileToUpload" id="fileToUpload" onChange={this.updateInput_upload}></input>
                                  </GridItem>




                                </GridContainer>
                              </CardBody>
                              <CardFooter>
                                <Button color="primary" name="Add" type="submit" value="Add">Add</Button>
                                <Button color="primary">View</Button>


                              </CardFooter>
                            </Card>
                          </GridItem>
                        </form>
                      </GridContainer>
                    </center>
                  )
                }
                , {

                  tabName: "Delete",
                  tabIcon: Accessibility,
                  tabContent: (
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={10}>
                        <Card>
                          <CardHeader color="primary">
                            <h4 className={this.cardTitleWhite}>Remove Student/Students</h4>
                            <p className={this.cardCategoryWhite}></p>
                          </CardHeader>
                          <CardBody>
                            <GridContainer>

                              <InputForm inputType="number" inputKey="id" inputLabel=" StudentID :" updateInput={this.updateInput} />

                              <InputForm inputType="text" inputKey="name" inputLabel="  Students Last Name :" updateInput={this.updateInput} />


                            </GridContainer>
                          </CardBody>
                          <CardFooter>
                            <form onSubmit={this.handleSubmit3}>
                              <Button name="Remove" type="submit" value="Remove" color="primary">Remove A Student !</Button>
                            </form>
                            <form onSubmit={this.handleSubmit4}>
                              <Button name="RemoveAll" type="submit" value="Remove" color="primary">Remove All Students !</Button>
                            </form>
                          </CardFooter>
                        </Card>
                      </GridItem>
                    </GridContainer>

                  )
                }
                , {
                  tabName: "Search",
                  tabIcon: Code,
                  tabContent: (
                    <form action="search.php" onSubmit={this.handleSubmit5}>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="info">
                              <h4 className={classes.cardTitleWhite}>Search on a specific Student</h4>
                              <p className={classes.cardCategoryWhite}>by id </p>
                            </CardHeader>

                            <CardBody>
                              <div className={classes.searchWrapper} style={{ textAlign: "center" }} >
                                <input style={{ width: "50%", color: "#000", margin: "3px 0", height: "40px", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                                  type="text" placeholder="Search" name="search" />
                                <Button color="white" justIcon round name="search" type="submit" value="search" onChange={this.updateInput}
                                //onClick={this.toggleHidden.bind(this)}
                                >
                                  <Search onSubmit={this.handleSubmit5} />

                                </Button>
                                <CardBody>



                                  <Build />

                                </CardBody>
                              </div>
                            </CardBody>



                          </Card>
                        </GridItem>
                      </GridContainer>
                    </form>
                  )
                }
              ]}
            />
          </GridItem>


        </GridContainer>






      </div>
    );
  }
}

export default withStyles(style)(TypographyPage);


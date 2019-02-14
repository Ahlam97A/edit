/*import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import { Edit } from '@material-ui/icons/Edit';

import CardBody from "components/Card/CardBody.jsx";

import React from "react";

import Card from "components/Card/Card.jsx";

import avatar from "assets/img/faces/marc.jpg";

import GridItem from "components/Grid/GridItem.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import createConnection from "./Edit.php";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "25px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    fontSize: "20px",
  }
};



function UserProfile(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer >
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>


                
            

             















                <GridItem xs={12} sm={6} md={20}>
                
                  <InputLabel style={{ color: "#AAAAAA" }}>Enter Your  Password : </InputLabel>

                </GridItem>
                <GridItem xs={12} sm={6} md={20}>

                  <input style={{ width: "100%" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px"}}  type="password" name="password" />

                </GridItem>



                <GridItem xs={12} sm={6} md={20}>

                  <InputLabel style={{ color: "#AAAAAA" }}>Enter   Your city : </InputLabel>

                </GridItem>
                <GridItem xs={12} sm={6} md={20}>

                  <input style={{ width: "100%" ,height:"20px",   margin: "3px 0",border: "1px solid #ccc",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px"}}  type="text" name="city" />

                </GridItem>

                <GridItem xs={12} sm={6} md={20}>

                  <InputLabel style={{ color: "#AAAAAA" }}>Enter Your phone : </InputLabel>

                </GridItem>
                <GridItem xs={12} sm={6} md={20}>

                  <input  style={{ width: "100%",  margin: "3px 0" ,height:"20px", border: "1px solid #ccc",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px"}} type="text" name="phone" />

                </GridItem>

                <GridItem xs={12} sm={6} md={20}>

                  <InputLabel style={{ color: "#AAAAAA" }}>Enter  Your Address : </InputLabel>

                </GridItem>
                <GridItem xs={12} sm={6} md={20}>

                  <input style={{ width: "100%" ,  margin: "3px 0",height:"20px" , border: "1px solid #ccc",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px"}}  type="text" name="address" />

                </GridItem>






















              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}></InputLabel>

                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button  onClick={createConnection} color="primary">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>

              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}></h6>
              <h4 className={classes.cardTitle}></h4>
              <p className={classes.description}>

              </p>


            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(UserProfile);
*/
import InputLabel from "@material-ui/core/InputLabel";
import BugReport from "@material-ui/icons/BugReport";
import withStyles from "@material-ui/core/styles/withStyles";
import { Edit } from '@material-ui/icons/Edit';

import Card from "components/Card/Card.jsx";

import React from "react";

import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import InputForm from "views/Typography/InputForm.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";




const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "25px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    fontSize: "20px",
  }
};

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
class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/UserProfile/Edit.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));



  }
  
  render() {
  
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
      <div>

        <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
                        <CustomTabs
                          title="Principal:"
                          headerColor="info"
                          tabs={[
                            {
                              tabName: "My Profile",
                              tabIcon: BugReport,
                              tabContent: (
                               
          <form action="Edit.php" onSubmit={this.handleSubmit}>
          <GridItem xs={12} sm={12} md={10}>
            <Card>

              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                <h3 >Reset Your Password</h3>
              </CardHeader>
              


              <CardBody>
                <GridContainer>
                  <GridContainer>

                  
                    <InputForm inputType="number" inputKey="id" inputLabel="User ID: " updateInput={this.updateInput} />


                    <InputForm inputType="password" inputKey="pwd" inputLabel="Current Password : " updateInput={this.updateInput} />
                    <InputForm inputType="password" inputKey="new_pwd" inputLabel="New Password : " updateInput={this.updateInput} />
                    <InputForm inputType="password" inputKey="ConfirmPassword" inputLabel="Confirm Password : " updateInput={this.updateInput} />
                    <InputForm inputType="text" inputKey="address" inputLabel="Personal Address : " updateInput={this.updateInput} />
                    <InputForm inputType="text" inputKey="city" inputLabel="City : " updateInput={this.updateInput} />

                    <InputForm inputType="number" inputKey="phone" inputLabel="Phone : " updateInput={this.updateInput} />


                  </GridContainer>
                </GridContainer>
              </CardBody>

              <CardFooter>
                <Button color="primary" name="UpdateProfile" type="submit" value="UpdateProfile">Update Profile</Button>
              </CardFooter>

            </Card>
          </GridItem>

        </form>
                              )
                            },


                          ]}
                        />
                      </GridItem>


        </GridContainer>

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}> </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}></h6>
                <h4 className={classes.cardTitle}></h4>
                <p className={classes.description}></p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>




      </div>
    );
  }
}
export default withStyles(styles)(UserProfile);

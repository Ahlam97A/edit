import InputLabel from "@material-ui/core/InputLabel";
import { Edit } from '@material-ui/icons/Edit';
import withStyles from "@material-ui/core/styles/withStyles";

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



const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
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
        textDecoration: "none"
    }
};



function EditCriteria(props) {
    const { classes } = props;
    return (
        <div  style={{alignContent:"Center"}}>
            <GridContainer  >
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Edit Criteria</h4>
                            <p className={classes.cardCategoryWhite}>Complete your School Information</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                            <br/>
                                <GridItem xs={12} sm={12} md={20}>

                                    <InputLabel style={{ width: "60%", color: "#AAAAAA" }}>Maximum Number Of Allowed Absences: </InputLabel>

                                </GridItem>
                                <GridItem xs={12} sm={12} md={20}>

                                    <input style={{ width: "100%", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} type="password" name="password" />

                                </GridItem>

                               <br/>
                               <br/>
                               <br/>


                               <GridItem xs={12} sm={12} md={20}>

                                       <InputLabel style={{ width: "100%",color: "#AAAAAA" }}>Give An Equivalent Points on Different Criteria : </InputLabel>

                               </GridItem>

                                <GridItem xs={12} sm={6} md={20}>

                                    <InputLabel style={{ color: "#AAAAAA" }}>      Bad  </InputLabel>

                                </GridItem>
                                <GridItem xs={12} sm={6} md={20}>

                                    <input style={{ width: "100%", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} type="text" name="city" />

                                </GridItem>

                                <GridItem xs={12} sm={6} md={20}>

                                    <InputLabel style={{ color: "#AAAAAA" }}> Good </InputLabel>

                                </GridItem>
                                <GridItem xs={12} sm={6} md={20}>

                                    <input style={{ width: "100%", margin: "3px 0", height: "20px", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} type="text" name="phone" />

                                </GridItem>

                                <GridItem xs={12} sm={6} md={20}>

                                    <InputLabel style={{ color: "#AAAAAA" }}>Very Good </InputLabel>

                                </GridItem>
                                <GridItem xs={12} sm={6} md={20}>

                                    <input style={{ width: "100%", margin: "3px 0", height: "20px", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} type="text" name="address" />

                                </GridItem>
                                <GridItem xs={12} sm={6} md={20}>

                                    <InputLabel style={{ color: "#AAAAAA" }}>Excellent </InputLabel>

                                </GridItem>
                                <GridItem xs={12} sm={6} md={20}>

                                    <input style={{ width: "100%", margin: "3px 0", height: "20px", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} type="text" name="address" />

                                </GridItem>


                                <br/>


                        



















                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <InputLabel style={{ color: "#AAAAAA" }}></InputLabel>

                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Update Criteria</Button>
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

export default withStyles(styles)(EditCriteria);

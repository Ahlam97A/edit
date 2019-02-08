import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import avatar from "assets/img/faces/marc.jpg";
import GridContainer from "components/Grid/GridContainer.jsx";

import CardAvatar from "components/Card/CardAvatar.jsx";

import Button from "components/CustomButtons/Button.jsx";
import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";

function Icons(props) {
  const { classes } = props;
  return (

     
       

      <div   style={{alignContent:"Center"}}>
          <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                  <Card>
                      <CardHeader color="primary">
                          <h4 className={classes.cardTitleWhite}>Add A  Teacher</h4>
                          <p className={classes.cardCategoryWhite}></p>
                      </CardHeader>
                      <CardBody>
                          <GridContainer>
                          <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#AAAAAA",alignContent:"Center" }}>Teacher Name : </inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%" ,alignContent:"Center" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="text" name="name" />

</GridItem>


<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#AAAAAA",alignContent:"Center" }}>Subject : </inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%",alignContent:"Center"  ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="text" name="subject" />

</GridItem>



<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#AAAAAA",alignContent:"Center" }}>ClassId : </inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%",alignContent:"Center"  ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="text" name="id" />

</GridItem>


<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#AAAAAA",alignContent:"Center" }}>Phone : </inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%" ,alignContent:"Center" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="text" name="password" />

</GridItem>



<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#AAAAAA",alignContent:"Center" }}>Teacher Id : </inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%",alignContent:"Center"  ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="number" name="id" />

</GridItem>



<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#AAAAAA",alignContent:"Center" }}>Teacher Password : </inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%" ,alignContent:"Center" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="password" name="password" />

</GridItem>


<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#AAAAAA",alignContent:"Center" }}>Address : </inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%" ,alignContent:"Center" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="text" name="address" />

</GridItem>


<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#AAAAAA",alignContent:"Center" }}>Date of Birth : </inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%" ,alignContent:"Center" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="date" name="DateofBirth" />

</GridItem>

                          </GridContainer>



                      </CardBody>
                      <CardFooter>
                          <Button color="primary">Add</Button>
                      </CardFooter>
                  </Card>
              </GridItem>  

 </GridContainer>



          

          <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                  <Card>
                      <CardHeader color="primary">
                          <h4 className={classes.cardTitleWhite}>Add List Of  Teachers</h4>
                          <p className={classes.cardCategoryWhite}></p>
                      </CardHeader>
                      <CardBody>
                          <GridContainer>
                          <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

                            <inputLabel style={{ color: "#AAAAAA",alignContent:"Center" }}>Select List Of Teachers : </inputLabel>
     
                         </GridItem>
                         <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                     <input color="primary" type="file" name="fileToUpload" id="fileToUpload"></input>
                    
</GridItem>

                          </GridContainer>



                      </CardBody>
                      <CardFooter>
                          <Button color="primary">Add</Button>
                          <Button color="primary">View</Button>
                      </CardFooter>
                  </Card>
              </GridItem>  

 </GridContainer>








 <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                  <Card>
                      <CardHeader color="primary">
                          <h4 className={classes.cardTitleWhite}>Remove  Teacher/Teachers</h4>
                          <p className={classes.cardCategoryWhite}></p>
                      </CardHeader>
                      <CardBody>
                          <GridContainer>
                          <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

                            <inputLabel style={{ color: "#AAAAAA",alignContent:"Center" }}>Enter The TeacherID : </inputLabel>
     
                         </GridItem>
                         <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                         <input style={{ width: "100%" ,alignContent:"Center" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="text" name="id" />
                    
</GridItem>

<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

                            <inputLabel style={{ color: "#AAAAAA",alignContent:"Center" }}>Enter The Teacher Name : </inputLabel>
     
                         </GridItem>
                         <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                         <input style={{ width: "100%" ,alignContent:"Center" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="text" name="name" />
                    
</GridItem>

                          </GridContainer>



                      </CardBody>
                      <CardFooter>
                          <Button color="primary">Remove A Teacher !</Button>
                          <Button color="primary">Remove All Teachers !</Button>
                      </CardFooter>
                  </Card>
              </GridItem>  

 </GridContainer>


 












 






         
      </div>

    

  );
}




Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);

import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Quote from "components/Typography/Quote.jsx";
import Muted from "components/Typography/Muted.jsx";
import Primary from "components/Typography/Primary.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import AppBar from '@material-ui/core/AppBar';
import GridItem from "components/Grid/GridItem.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContent from '@material-ui/core/Tab';
import TabLink from '@material-ui/core/Tab';
import TabList from '@material-ui/core/Tab';
import TabPanel from '@material-ui/core/Tab';
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
function TypographyPage(props) {
  
  const { classes } = props;
 
  return (
   
    <div   style={{alignContent:"Center"}}>
    <GridContainer>
        <GridItem xs={20} sm={50} md={10}>
            <Card>
                <CardHeader color="primary">
                <h3 className={classes.cardCategoryWhite}>Student Page</h3>
                    <h4 className={classes.cardTitleWhite}>Add A Student </h4>
                    
                </CardHeader>
                <CardBody>
                    <GridContainer>
                    <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#000",alignContent:"Center" }}>Student Name : </inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%" ,alignContent:"Center" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="text" name="name" />

</GridItem>


<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#000",alignContent:"Center" }}>Student ID</inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%",alignContent:"Center"  ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type='number' name="subject" />

</GridItem>



<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#000",alignContent:"Center" }}>ClassId : </inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input type="number" style={{ width: "100%",alignContent:"Center"  ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="number" name="id" />

</GridItem>

<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#000",alignContent:"Center" }}>Password</inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%",alignContent:"Center"  ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="password" name="subject" />

</GridItem>



<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#000",alignContent:"Center" }}>Date of Birth : </inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%" ,alignContent:"Center" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="date" name="DateofBirth" />

</GridItem>
<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#000",alignContent:"Center" }}>Parant Id : </inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%",alignContent:"Center"  ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="number" name="id" />

</GridItem>



<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#000",alignContent:"Center" }}>Parant Password : </inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%" ,alignContent:"Center" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="password" name="password" />

</GridItem>


<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#000",alignContent:"Center" }}>Address : </inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%" ,alignContent:"Center" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="text" name="address" />

</GridItem>



<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

<inputLabel style={{ color: "#000",alignContent:"Center" }}>Phone : </inputLabel>

</GridItem>
<GridItem xs={12} sm={6} md={20}>

<input style={{ width: "100%" ,alignContent:"Center" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="text" name="password" />

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
                    <h4 className={classes.cardTitleWhite}>Add List Of Students</h4>
                    <p className={classes.cardCategoryWhite}></p>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                    <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

                      <inputLabel style={{ color: "#000",alignContent:"Center" }}>Select List Of Students: </inputLabel>

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
                    <h4 className={classes.cardTitleWhite}>Remove  Student/Students</h4>
                    <p className={classes.cardCategoryWhite}></p>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                    <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

                      <inputLabel style={{ color: "#000",alignContent:"Center" }}>Enter The StudentID : </inputLabel>

                   </GridItem>
                   <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                   <input style={{ width: "100%" ,alignContent:"Center" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="text" name="id" />
              
</GridItem>

<GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>

                      <inputLabel style={{ color: "#000",alignContent:"Center" }}>Enter The Students Name : </inputLabel>

                   </GridItem>
                   <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                   <input style={{ width: "100%" ,alignContent:"Center" ,height:"20px",  margin: "3px 0" ,border: "1px solid #ccc",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}  type="text" name="name" />
              
</GridItem>

                    </GridContainer>



                </CardBody>
                <CardFooter>
                    <Button color="primary">Remove A Student !</Button>
                    <Button color="primary">Remove All Students !</Button>
                </CardFooter>
            </Card>
        </GridItem>  

</GridContainer>







   
</div>


  );
}

export default withStyles(style)(TypographyPage);


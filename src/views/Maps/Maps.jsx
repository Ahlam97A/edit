



import InputLabel from "@material-ui/core/InputLabel";
import { Edit } from '@material-ui/icons/Edit';
import withStyles from "@material-ui/core/styles/withStyles";

import avatar from "assets/img/faces/marc.jpg";

import React from "react";

import Card from "components/Card/Card.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";

import InputForm from "views/Typography/InputForm";

import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
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


//function EditCriteria(props) {
class EditCriteria extends React.Component {
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
    //const { classes } = props;
    handleSubmit = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Maps/point.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
    }
    handleSubmit2 = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Maps/addClass.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));



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
                    <GridItem xs={12} sm={12} md={6}>

                        <Card>
                            <CardHeader color="warning">
                                <h4 className={classes.cardTitleWhite}>School Information</h4>

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
                    <form  action="addClass.php" onSubmit={this.handleSubmit2} >
                        <GridItem xs={12} sm={12} md={6}>
                            <Card>
                                <CardHeader color="warning">
                                    <h4 className={classes.cardTitleWhite}>Add Classes</h4>
                                </CardHeader>
                                <CardBody>
                                    <InputLabel style={{ width: "60%" }}>Class Level: </InputLabel>
                                    <input required onChange={this.updateInput} style={{ width: "100%", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} key="level" type="text" name="level" />

                                    <InputLabel style={{ width: "60%" }}>ClassID: </InputLabel>
                                    <input  required onChange={this.updateInput} style={{ width: "100%", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} key="id_class" type="number" name="id_classs" />
                                </CardBody>

                                <CardFooter>

                                    <Button color="warning" name="add" type="submit" value="add">Add Class</Button>
                                </CardFooter>
                            </Card>

                        </GridItem>
                    </form>



                    <form action="point.php" onSubmit={this.handleSubmit}>
                        <GridItem xs={12} sm={12} md={12}>
                            <Card>

                                <CardHeader color="warning">
                                    <h4 className={classes.cardTitleWhite}>Edit Criteria</h4>
                                    <p className={classes.cardCategoryWhite}>Complete your School Criteria</p>
                                </CardHeader>
                                <CardBody>

                                    <InputLabel style={{ width: "80%" }}>Max_Number_Allowed_Absences: </InputLabel>
                                    <input onChange={this.updateInput} style={{ width: "100%", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} key="max" type="text" name="max" />
                                    <br />
                                    <br />

                                    <InputLabel style={{ width: "60%" }}>Give An Equivalent Points on Different Criteria : </InputLabel><br />
                                    <InputLabel >      Bad  </InputLabel>  <br />
                                    <input onChange={this.updateInput} style={{ width: "100%", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} key="bad" type="text" name="bad" />    <br />
                                    <InputLabel style={{ color: "#AAAAAA" }}> Good </InputLabel> <br />
                                    <input onChange={this.updateInput} style={{ width: "100%", margin: "3px 0", height: "20px", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} type="text" name="good" key="good" />  <br />
                                    <InputLabel style={{ color: "#AAAAAA" }}>Very Good </InputLabel> <br />
                                    <input onChange={this.updateInput} style={{ width: "100%", margin: "3px 0", height: "20px", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} type="text" name="verygood" key="verygood" />   <br />
                                    <InputLabel style={{ color: "#AAAAAA" }}>Excellent </InputLabel> <br />
                                    <input onChange={this.updateInput} style={{ width: "100%", margin: "3px 0", height: "20px", border: "1px solid #ccc", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px" }} type="text" name="Excellent" key="Excellent" />
                                    <br />


                                    <CardFooter>

                                        <Button color="warning" name="Update" type="submit" value="Update">Update Criteria</Button>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </form>

                </GridContainer>
            </div>
        );
    }
}
export default withStyles(styles)(EditCriteria);

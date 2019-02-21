
/*
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
        <div style={{ alignContent: "Center" }}>
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
                                    <inputLabel style={{ color: "#AAAAAA", alignContent: "Center" }}>Teacher Name : </inputLabel>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={20}>

                                    <input style={{ width: "100%", alignContent: "Center", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} type="text" name="name" />

                                </GridItem>
                                <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                                    <inputLabel style={{ color: "#AAAAAA", alignContent: "Center" }}>Subject : </inputLabel>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={20}>
                                    <input style={{ width: "100%", alignContent: "Center", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} type="text" name="subject" />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                                    <inputLabel style={{ color: "#AAAAAA", alignContent: "Center" }}>ClassId : </inputLabel>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={20}>
                                    <input style={{ width: "100%", alignContent: "Center", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} type="text" name="id" />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                                    <inputLabel style={{ color: "#AAAAAA", alignContent: "Center" }}>Phone : </inputLabel>

                                </GridItem>
                                <GridItem xs={12} sm={6} md={20}>
                                    <input style={{ width: "100%", alignContent: "Center", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} type="text" name="password" />
                                </GridItem>

                                <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                                    <inputLabel style={{ color: "#AAAAAA", alignContent: "Center" }}>Teacher Id : </inputLabel>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={20}>
                                    <input style={{ width: "100%", alignContent: "Center", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} type="number" name="id" />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                                    <inputLabel style={{ color: "#AAAAAA", alignContent: "Center" }}>Teacher Password : </inputLabel>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={20}>
                                    <input style={{ width: "100%", alignContent: "Center", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} type="password" name="password" />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                                    <inputLabel style={{ color: "#AAAAAA", alignContent: "Center" }}>Address : </inputLabel>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={20}>
                                    <input style={{ width: "100%", alignContent: "Center", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} type="text" name="address" />
                                </GridItem>
                                <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                                    <inputLabel style={{ color: "#AAAAAA", alignContent: "Center" }}>Date of Birth : </inputLabel>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={20}>
                                    <input style={{ width: "100%", alignContent: "Center", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} type="date" name="DateofBirth" />
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
                                    <inputLabel style={{ color: "#AAAAAA", alignContent: "Center" }}>Select List Of Teachers : </inputLabel>
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
                                    <inputLabel style={{ color: "#AAAAAA", alignContent: "Center" }}>Enter The TeacherID : </inputLabel>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                                    <input style={{ width: "100%", alignContent: "Center", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} type="text" name="id" />
                                </GridItem>

                                <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                                    <inputLabel style={{ color: "#AAAAAA", alignContent: "Center" }}>Enter The Teacher Name : </inputLabel>

                                </GridItem>
                                <GridItem xs={12} sm={6} md={20} style={{ textAlign: "center" }}>
                                    <input style={{ width: "100%", alignContent: "Center", height: "20px", margin: "3px 0", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }} type="text" name="name" />

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
*/



import withStyles from "@material-ui/core/styles/withStyles";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Code from "@material-ui/icons/Code";
import Accessibility from "@material-ui/icons/Accessibility";
import Search from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';

import Card from "components/Card/Card.jsx";

import React from "react";

import CardHeader from "components/Card/CardHeader.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";

import InputForm from "views/Typography/InputForm.jsx";

import CardFooter from "components/Card/CardFooter.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

import Table from "components/Table/Table.jsx";
import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";

import Build from "views/Icons/Table.jsx";
import SimpleTable from "views/Icons/Tables.jsx"
import EnhancedTable from "views/Icons/table_with_checkbox.jsx";
import MyTable from "views/Icons/table_with_checkbox.jsx"
import KKTable from "views/Icons/b.jsx" 
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


function postData(url, data) {
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
        .then(response =>response.text());// parses response to JSON
}

function getData(url = ``, data = {}) {
    if(data==undefined){console.log('ahlam');}
    else{
    // Default options are marked with *
    if(data!=" "){
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
        .then(response =>{if(response!=' ') response.json()}) // parses response to JSON
      
      
    }
}
}


//function Icons(props) {
class Icons extends React.Component {
    //const { classes } = props;
    constructor(props) {
        super(props);

        this.state = {
            flag: false,
        };
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit3 = this.handleSubmit3.bind(this);
        this.handleSubmit4 = this.handleSubmit4.bind(this);
        this.handleSubmit5 = this.handleSubmit5.bind(this);
        this.contantaa = this.contantaa.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    /*  
  componentDidMount(){
      fetch('http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/search.php')
      .then(response => response.text())
      .then(json =>{
          this.setState({
             isLoad:True,
              items:json,
          })
      });
  }
  */



    updateInput = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
        
    }



    handleSubmit = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/aa.php`, this.state)
          .then(data => console.log(JSON.stringify(data)))
          .catch(error => console.error(error));

    }

    handleSubmit3 = (event) => {
        //event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/delete2.php`, this.state)
           
        return false;

    }
    handleSubmit4 = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/delete_all2.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

    }
    handleSubmit5 = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/search.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));


    }
    contantaa = (event) => {
        event.preventDefault();
        console.log(this.state);

    }

    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/search.php`)
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/getclass.php`)

            .then(function (event) {
                th.setState({
                    data: event//.data
                });
            })
    }
    Search() {
        return { flag: false };
    }
    onClick(e) {
        e.preventDefault();
        this.setState({ flag: true });
    }
  
    onSubmit() {
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/search.php`, this.state)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error));
        return (
            <div>

                
                {this.state.flag ? <Build /> : <div></div>}
            </div>
        );
    }
    getTable(){
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/getclass.php`, this.state)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error));
        return (
            <div>
                <Button  color="rose" type="submit" value="get" onClick={this.onClick.bind(this)} >
                        <Search />
                </Button>

                
                {this.state.flag ? <MyTable /> : <div></div>}
            </div>
        );

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
                            title="Teachers:"
                            headerColor="primary"
                            tabs={[
                                {
                                    tabName: "Add A Teacher",
                                    tabIcon: Accessibility,
                                    tabContent: (


                                        <GridContainer >
                                            <form action="aa.php" onSubmit={this.handleSubmit} onChange={this.updateInput}>
                                                <GridItem xs={12} sm={10} md={10}>
                                                    <Card>
                                                        <CardHeader color="info">
                                                            <h4 className={classes.cardTitleWhite}>Add A Teacher</h4>
                                                            <p className={classes.cardCategoryWhite}></p>
                                                        </CardHeader>
                                                        <CardBody>
                                                            <GridContainer>
                                                                <InputForm inputType="text" inputKey="fname" inputLabel="Teacher First Name:"  />
                                                                <InputForm inputType="text" inputKey="mname" inputLabel="Teacher Mid  Name:"  />
                                                                <InputForm inputType="text" inputKey="lname" inputLabel="Teacher Last Name:"  />
                                                                <InputForm inputType="number" inputKey="id_t" inputLabel="Teacher ID:"  />
                                                                <InputForm inputType="text" inputKey="sub" inputLabel="Subject : "  />
                                                                <InputForm inputType="text" inputKey="city" inputLabel="City :"/>
                                                                <InputForm inputType="date" inputKey="DateofBirth" inputLabel="Date of Birth :" />
                                                                <InputForm inputType="text" inputKey="address" inputLabel="Address : "  />
                                                                <InputForm inputType="number" inputKey="phone" inputLabel="Phone : " />
                                                                
                                                                  
                                                            </GridContainer>
                                                        </CardBody>
                                                        <br />
                                                        <br />
                                                        <CardHeader color="primary">
                                                            <h4 className={classes.cardTitleWhite}>Show All classes</h4>
                                                            
                                                        </CardHeader>

                                                        
                                                        <CardBody>
                                                        <h3 style={{color:"brown",align:"center"}}><b>Click To Show Avilable Classes</b></h3>   
                                                        {this.getTable()}
                                                            
                                                        </CardBody>
                                                        <CardFooter>
                                                            <Button color="info" name="Add" type="submit" value="Add" >Add</Button>
                                                        </CardFooter>
                                                    </Card>
                                                </GridItem>
                                            </form>
                                        </GridContainer>


                                    )
                                },
                                {
                                    tabName: "Add List Of Teachers",
                                    tabIcon: LibraryBooks,
                                    tabContent: (

                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={10}>
                                                <Card>
                                                    <CardHeader color="info">
                                                        <h4 className={classes.cardTitleWhite}>Add List Of  Teachers</h4>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <GridContainer>
                                                            <div style={{ alignContent: "center", alignItems: "center" }}>
                                                                <h4 color="primary"><a>To be simple for you to add List of Teachers , you should add A file of .csv extension (FileName.csv).  The file must be  contain Specific Information about the Teacher.</a></h4>
                                                            </div>
                                                            <GridItem xs={12} sm={6} md={12}>
                                                                <inputLabel style={{ alignContent: "center", alignItems: "center", width: "50%", color: "#AAAAAA", alignContent: "Center" }}>Select List Of Teachers : </inputLabel>
                                                            </GridItem>
                                                            <GridItem xs={12} sm={6} md={12} >
                                                                <input color="primary" type="file" name="fileToUpload" id="fileToUpload" tyle={{ alignContent: "center", alignItems: "center", width: "50%", color: "#AAAAAA", alignContent: "Center" }}></input>
                                                            </GridItem>

                                                        </GridContainer>
                                                    </CardBody>
                                                    <CardFooter>
                                                        <Button color="info">Add</Button>
                                                        <Button color="info">View</Button>
                                                    </CardFooter>
                                                </Card>
                                            </GridItem>
                                        </GridContainer>




                                    )
                                },
                                {
                                    tabName: "Delete Teacher",
                                    tabIcon: Accessibility,
                                    tabContent: (
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={10}>
                                                <Card>
                                                    <CardHeader color="info">
                                                        <h4 className={classes.cardTitleWhite}>Delete  Teachers</h4>
                                                        <p className={classes.cardCategoryWhite}>based on their id or LastName</p>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <GridContainer>

                                                            <InputForm inputType="text" inputKey="name" inputLabel="Enter The Teacher`s Last Name :" updateInput={this.updateInput} />
                                                            <InputForm inputType="number" inputKey="id" inputLabel="Enter The TeacherID :" updateInput={this.updateInput} />



                                                        </GridContainer>

                                                    </CardBody>
                                                    <CardFooter>
                                                        <form onSubmit={this.handleSubmit3}>
                                                            <Button name="Remove" type="submit" value="Remove" color="primary">Delete A Teacher !</Button>
                                                        </form>
                                                        <form onSubmit={this.handleSubmit4}>
                                                            <Button name="Remove" type="submit" value="Remove" color="primary">Delete All Teachers !</Button>
                                                        </form>
                                                    </CardFooter>
                                                </Card>
                                            </GridItem>

                                        </GridContainer>

                                    )
                                },
                                {
                                    tabName: "Search",
                                    tabIcon: Code,
                                    tabContent: (
                                        <form action="search.php" onSubmit={this.onSubmit}>
                                            <GridContainer>
                                                <GridItem xs={12} sm={12} md={12}>
                                                    <Card>
                                                        <CardHeader color="info">
                                                            <h4 className={classes.cardTitleWhite}>Search on a specific Teacher</h4>
                                                            <p className={classes.cardCategoryWhite}>by id </p>
                                                        </CardHeader>

                                                        <CardBody>
                                                            <div className={classes.searchWrapper} style={{ textAlign: "center" }} >
                                                                <input style={{ width: "50%", color: "#000", margin: "3px 0", height: "40px", border: "1px solid #ccc", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                                                                    type="text" placeholder="Search" name="search" onChange={this.updateInput}/>
                                                                <Button justIcon round color="rose" type="submit" value="Search" onClick={this.onClick.bind(this)} >
                                                                <Search onSubmit={this.onSubmit}/>
                                                                    </Button>
                                                                {this.onSubmit()}
                                                                <CardBody>



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




    //Icons.propTypes = {
    //    classes: PropTypes.object.isRequired
    //};
}
export default withStyles(iconsStyle)(Icons);
import React, { Component } from 'react';
import color from '@material-ui/core/colors/deepOrange';
import Button from "components/CustomButtons/Button.jsx";
import DeleteIcon from '@material-ui/icons/Delete';

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
      .then(response => response.text()); // parses response to JSON
  }
  

  

class Table1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.updateInput = this.updateInput.bind(this);


        //this.getData = this.getData.bind(this);
        this.handleSubmit5 = this.handleSubmit5.bind(this);
        this.deleteRow=this.deleteRow.bind(this);
    }
    deleteRow(event) {
        var data = [...this.state.data];
        //var x=getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/dele2.php`, this.state);
        data.splice(event, 1);
       
        this.setState({ data });
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/dele2.php`, this.state)
        .then(data => console.log(JSON.stringify(data)))
         .catch(error => console.error(error));
       
    }

    deleteall=(event)=>{
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/delete_all.php`, this.state)
          .then(data => console.log(JSON.stringify(data)))
          .catch(error => console.error(error));
     

    }
    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/search1.php`)
            .then(function (event) {
                th.setState({
                    data: event//.data
                });
            })
           // getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/dele2.php`)
           
    }
    handleSubmit5 = (event) => {
      
          }
    componentWillUnmount() {
        //this.serverRequest.abort();
    }

    updateInput = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }


    
    render() {
       
        return (
            <div className="Table">
                <table style={{ border: " 1px solid black" ,align:"center"}} onChange={this.props.get}>
                    <thead style={{ border: " 1px solid black", background: "#555555"}}>
                        <tr style={{ border: " 1px solid black"}}>
                            <th>First Name</th>
                            <th>Mid Name</th>
                            <th>Last Name</th>
                            <th>Student ID</th>
                            <th>Class ID</th>
                            <th>Parant ID</th>
                            <th>City</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Date Of Birth </th>
                            <th >Remove </th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            this.state.data.map(item =>
                               
                                <tr key={item.id3}>
                                    <td>{item.name}</td>
                                    <td>{item.mname}</td>
                                    <td>{item.lname}</td>
                                    <td>{item.id}</td>
                                    <td>{item.classid}</td>
                                    <td>{item.part_id}</td>
                                    <td>{item.city}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.addresss}</td>
                                    <td>{item.date}</td>
                                    <td><Button color="rose" type="submit" onClick={this.deleteRow}><DeleteIcon /></Button></td>
                                </tr>
                               
                            
                            )
                            
                          
                        }
                        
                    </tbody>
                    
                </table>
                <Button color="rose" type="submit" onClick={this.deleteall}>Delete All Students<DeleteIcon /></Button>        
            </div>
        );
    }
}

export default Table1

// <div>
//<h1>All Events</h1>
//<table>
  //  <tbody>
   //     {contents}
 //   </tbody>

//</table>

//</div>
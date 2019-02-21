import React, { Component } from "react";
//import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";



function getData(url = ``, data = {}) {
    // Default options are marked with *
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "default", // *default, //////no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            Accept: 'application/json',



            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
    })

        .then(response => response.json());
}


const style = {
  container: {
    position: "relative"
  },

  refresh: {
    cursor: "pointer",
    width: "75px"
  }
};

class KKTable extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      timestamp: "",
      selectAll: false,
      data: [],
      checked: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSingleCheckboxChange = this.handleSingleCheckboxChange.bind(this);
    this.componentDidMount=this.componentDidMount.bind(this);
  }

  handleChange = () => {
    console.log("hi");
    var selectAll = !this.state.selectAll;
    this.setState({ selectAll: selectAll });
    var checkedCopy = [];
    this.state.data.forEach(function(e, index) {
      checkedCopy.push(selectAll);
    });
    this.setState({
      checked: checkedCopy
    });
  };

  handleSingleCheckboxChange = index => {
    console.log(index);

    var checkedCopy = this.state.checked;
    checkedCopy[index] = !this.state.checked[index];
    if (checkedCopy[index] === false) {
      this.setState({ selectAll: false });
    }

    this.setState({
      checked: checkedCopy
    });
  };
  componentDidMount() {
    var th = this;
    //this.serverRequest = axios.get(this.props.source)
    getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/getclass.php`)

        .then(function (event) {
            
                th.setState({
                    data: event//.data
                });
            
        })

}
 
  
componentDidMount() {
    //const data2 = [];
    var th = this;
    var checkedCopy = [];
    var selectAll = this.state.selectAll;
    this.state.data.forEach(function(e, index) {
      checkedCopy.push(selectAll);
    });
        //this.serverRequest = axios.get(this.props.source)
    getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/getclass.php`)
        .then(function (event) {
            
            th.setState({
                data: event,//.data
                checked: checkedCopy,
                selectAll: selectAll
                    });
                
            })
  }


  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <ReactTable
            data={this.state.data}
            filterable
            defaultFilterMethod={(filter, row) =>
              row[filter.id] !== undefined
                ? String(row[filter.id])
                    .toLowerCase()
                    .includes(filter.value.toLowerCase())
                : false
            }
            columns={[
              {
                Header: "Class Level",
                accessor: "one"
              },
              {
                Header: state => (
                  <input
                    type="checkbox"
                    onChange={() => this.handleChange(state.sortedData)}
                    checked={this.state.selectAll}
                  />
                ),
                Cell: row => (
                  <input
                    type="checkbox"
                    defaultChecked={this.state.checked[row.index]}
                    checked={this.state.checked[row.index]}
                    onChange={() => this.handleSingleCheckboxChange(row.index)}
                  />
                ),
                sortable: false,
                filterable: false
              },
              {
                Header: "Section",
                accessor: "two"
              }
            ]}
            className="-striped "
          />
        </div>
      </div>
    );
  }
}

export default KKTable;

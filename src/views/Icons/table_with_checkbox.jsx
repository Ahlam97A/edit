import React from 'react'
import ReactDOM from 'react-dom'
import ReactTable from 'react-table'
import PropTypes from 'prop-types'
//import { Checkbox } from '@shopify/polaris';
import Checkbox from '@material-ui/core/Checkbox';
//import TableRow from 'views/Icons/TableRow.jsx';
//const ReactTable = window.ReactTable.default;

function getData(url , data ) {
    // Default options are marked with *
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "default", // *default, //////no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            Accept: 'application/json',



             "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
    })

        .then(response => response.json());
}

const TableRow = ({ selected, id, name, handleSelect }) => {
    console.log(`render TableRow :: ${id} :: ${name}`);
    //console.log(this.state)
    return (
        <tr>
            <td  style={{backgroundSize:"14px",color:"pink"}}>
                <input
                    name={id}
                    type="checkbox"
                    checked={selected}
                    onChange={handleSelect}
                    
                />
            </td>
            <td style={{color:"#55555",fontSize:"25 px"}}>{id}</td>
            <td>{name}</td>
        </tr>
    );
}

TableRow.defaultProps = {
    selected: false
}

export default class MyTable extends React.Component {
    constructor() {
        super();

        this.state = {
            selected: {},
            data: []
        }

    }
    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Icons/getclass.php`)

            .then(function (event) {
                if (event != null) {
                    th.setState({
                        data: event//.data
                    });
                }
            })
    }
    handleSelect = (e) => {
        const selected = this.state.selected;
        selected[e.target.name] = e.target.checked;
        this.setState({ selected });
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th />
                        
                        <th>Class Level</th>
                        <th>Section</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        this.state.data.map(item => {
                            if (this.state.data != "") {

                                return (
                                    <TableRow
                                        key={item.id}
                                        id={item.level}
                                        name={item.id_class}
                                        selected={this.state.selected[item.level]}
                                        handleSelect={this.handleSelect}
                                    />
                                );
                            }

                        }

                        )
                    }

                </tbody>
            </table>
        );
    }
}
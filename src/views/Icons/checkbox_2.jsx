import React,{Component} from 'react';
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

export default class CheckBox2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        };
    }
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
    render(){
        return(
            <div>
               <table style={{ border: " 1px solid black", align: "center",width:"100%" }} >
                    <thead style={{ border: " 1px solid black", background: "rgb(241, 245, 248)" }}>
                        <tr style={{ border: " 1px solid black",fontFamily:"Comic Sans MS"  }}>
                            <th></th>
                            <th>Class</th>
                            <th>Section</th>
                           
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.data.map((item, key) =>

                                <tr key={key} style={{fontFamily:"Comic Sans MS" }}>
                                    <td><input type="checkbox"  id="check" name={item.level} style={{color:"blue"}}/>
                                    </td>
                                    <td>{item.level}</td>
                                    <td>{item.id_class}</td>
                                </tr>
                            )      
                        }
                    </tbody>
                </table>
            </div>
        );

    }

}
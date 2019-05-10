import React ,{Component} from 'react';
//import Chart  from "react-charts";
import Chart from 'chart.js';

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

export default class Charts extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        data1: [],
        value: '',
      
   
        series: [
          {
            name: "series-1",
            data:[11.55,78,99,87]
          }
        ]
      
      }
      this.options = {
        type: 'line',
        width:"10%",
        data: {

          labels: ['1', '2', '3', '4', '5'],
          datasets: [{
            label: "Class :1st A",
            backgroundColor: 'rgba(128,0,128,0.8)',
            data: [70 ,80,88,90,98],
          }, {
            label: "Class :1st D",
            backgroundColor: 'rgba(231, 76, 60, 0.75)',
            data: [
              90, 80, 70, 66, 85,74
            ]
          },
          {
            label: "Class:2nd C",
            backgroundColor: 'rgba(0,0,255,0.5)',
            data: [
              55, 95, 68, 66, 73
            ]
          },
          {
            label: "Class:4th B",
            backgroundColor: 'rgba(1, 6, 6, 0.75)',
            data: [
              88, 80, 91, 70, 70
            ]
          }
        
        ]
        },
        options: {
          title: {
            display: true,
            text: 'Student Graph Traking System',
            fontSize: 20
          },
          
          scales: {
            xAxes: [{
              display: true,
            
            }],
            yAxes: [{
              type: "linear",
              display: true,
              position: "left",
              width:"50%",
              hieght:"10%"
            }]
          },
          responsive: true
        }

      }
      this.toggleChart = this.toggleChart.bind(this)
      this.toggleChart11 = this.toggleChart11.bind(this)

      this.text=this.text.bind(this);
    }
    
    toggleChart() {
  
      this.options.type = this.options.type === 'line' ? 'bar' : 'line'
      this.chart.destroy()
      this.chart = new Chart(this.ctx, this.options)
    }
    
    componentDidMount() {
      this.canvas = document.querySelector('canvas')
      this.ctx = this.canvas.getContext('2d')
      this.chart = new Chart(this.ctx, this.options);
      
      var th=this;
      getData(`http://localhost/my-app/src/test.php`)
      .then(function (event) {
        th.setState({
          data1: event//.data
        });
      })


    }

      text(){
        this.state.data1.map((row,i)=>(
          <div key={i}>
         <p>{row.point}</p> 
         
          </div>
        )
      )

      }
      

      toggleChart11() {
    
        this.options.type = this.options.type === 'line' ? 'bar' : 'pie'
        this.chart.destroy()
        this.chart = new Chart(this.ctx, this.options)
      }

    
    render() {
      return (
        <div>
       
          <canvas style={{width:"10%",hieght:"30%"}}/>

          <div className="text-center">
           {/*} <button className="btn btn-primary" onClick={this.toggleChart}>Toggle</button>*/}
           
          </div>
          {/*
                this.state.data1.map((row,i)=>(
                  <div key={i}>
                 <p>{row.point}</p> 
                 
                  </div>
                )
              )
                */ }
        </div>
      )
    }
  }
  

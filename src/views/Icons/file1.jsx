import React from 'react';

import { render } from 'react-dom';

import ReactFileReader from 'react-file-reader';

import { CsvToHtmlTable } from 'react-csv-to-table';

import Button from "components/CustomButtons/Button.jsx";



export default class File extends React.Component {
  state={
    csvData: '',
  };


  render(){
    return <div>
      <ReactFileReader 
        multipleFiles={false}
        fileTypes={[".csv"]} 
      handleFiles={this.handleFiles}>
        <Button color="primary">View</Button>
      </ReactFileReader>
      <CsvToHtmlTable
        data={this.state.csvData }
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />
    </div>;
  } 
  handleFiles = files => {
    var reader = new FileReader();
    reader.onload =  (e) => {
      // Use reader.result
      this.setState({
        csvData: reader.result
      })
    }
    reader.readAsText(files[0]);
  }

}

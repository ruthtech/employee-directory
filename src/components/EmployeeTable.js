import React, { useState } from "react";
import EmployeeRow from "./EmployeeRow";
import EmployeeRowHeader from "./EmployeeRowHeader";
import axios from "axios";

class EmployeeTable extends React.Component {
  state = {
      data: [] // Temp for the placeholder until we know the API to Fil's server
  }

  componentDidMount() {
      this.loadEmployees();
  }

  loadEmployees = async () => {
    try {
        let query = `https://randomuser.me/api/?results=100&nat=CA&inc=gender,name,location,email,phone,picture`; // request 100 people
        console.log("loadEmployees calling ", query);
        const employees = await axios.get(query);
        console.log(employees);
        this.setState({ data: employees.data.results });
    }
    catch( err ) {
        console.log(err);
        this.setState({ data: [] });
    }
  }

  render() {
    return (
       <table className="table border border-dark">
        <EmployeeRowHeader />
        <tbody>
          <EmployeeRow
            model={this.state.data}
          />
        </tbody>  
      </table>
       );
      }
  }
}


export default EmployeeTable;
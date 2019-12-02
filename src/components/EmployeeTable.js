import React from 'react';
import axios from "axios";
import EmployeeRowHeader from './EmployeeRowHeader';
import EmployeeRow from './EmployeeRow';

class EmployeeTable extends React.Component {
    state = {
      data: [],
      lastSorted: "",
      sortOrder: 0 // 0 means hasn't been sorted, 1 means ascending, -1 means descending
    };
    
    componentDidMount() {
      this.loadEmployees();
    }

    loadEmployees = async () => {
      try {
        let query = `https://randomuser.me/api/?results=100&nat=CA&inc=gender,name,location,email,phone,picture`; // request 100 people
        // console.log("loadEmployees calling ", query);
        const employees = await axios.get(query);
        console.log(employees);
        this.setState({ data: employees.data.results });
      }
      catch( err ) {
        console.log(err);
        this.setState({ data: [] });
      }
    }

    handleClickEvent = (event) => {
      // First, figure out what was sorted last
      // If the item that was sorted last is sorted again, reverse the order
      // If the item that was sorted last is different, sort in ascending order
      let sortOrder = 1; // Default to ascending order unless this was sorted before, in which case reverse it
      let lastSorted = '';
      switch(event.target.id) {
        case("sortName"): {
          if(this.state.lastSorted === 'sortName') {
            // reverse the order
            sortOrder = this.state.sortOrder * -1;
          }

          this.state.data.sort( (a, b) => {
            const aName = a.name.last + ", " + a.name.first;
            const bName = b.name.last + ", " + b.name.first;
            // console.log("sorting " + aName + " vs " + bName + " and aName - bName = " + (aName.localeCompare(bName)));
            if(sortOrder === 1) {
              return aName.localeCompare(bName);
            } else {
              return bName.localeCompare(aName);
            }
          });

          lastSorted = 'sortName';
          break;
        }

        case("sortCity"): {
          if(this.state.lastSorted === 'sortCity') {
            // reverse the order
            sortOrder = this.state.sortOrder * -1;
          }

          this.state.data.sort( (a, b) => {
            const aCity = a.location.city;
            const bCity = b.location.city;
            if(sortOrder === 1) {
              return aCity.localeCompare(bCity);
            } else {
              return bCity.localeCompare(aCity);
            }
          });

          lastSorted = 'sortCity';
          break;
        }

        case("sortProvince"): {
          let sortOrder = 1; // Default to ascending order unless this was sorted before, in which case reverse it
          if(this.state.lastSorted === 'sortProvince') {
            // reverse the order
            sortOrder = this.state.sortOrder * -1;
          }

          this.state.data.sort( (a, b) => {
            const aProvince = a.location.state;
            const bProvince = b.location.state;
            if(sortOrder === 1) {
              return aProvince.localeCompare(bProvince);
            } else {
              return bProvince.localeCompare(aProvince);
            }
          });    
          
          lastSorted = 'sortProvince';
          break;
        }

        default: {
          console.log("Unexpected. Clicked button that doesn't exist. " + event.target.id);
        }
      }
      this.setState({ data: this.state.data, lastSorted: lastSorted, sortOrder: sortOrder });
    }

    render() {
      return (
         <table className="table border border-dark">
          <EmployeeRowHeader 
             sort={this.handleClickEvent}
          />
          <tbody>
            <EmployeeRow
              model={this.state.data}
            />
          </tbody>  
        </table>
       );
    }
}


export default EmployeeTable;
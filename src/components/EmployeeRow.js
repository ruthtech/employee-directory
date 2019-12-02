import React from 'react';

function EmployeeRow(props) {
  return props.model.map( (employee, index) => {
    const name = employee.name.last + ", " + employee.name.first;
    return (
      <tr>
        <td className="border border-dark"><img src={employee.picture.thumbnail} alt={name}/></td>
        <td className="border border-dark">{name}</td>
        <td className="border border-dark">{employee.location.city}</td>
        <td className="border border-dark">{employee.location.state}</td>
        <td className="border border-dark">{employee.email}</td>
        <td className="border border-dark">{employee.phone}</td>
      </tr>
    );
  });
}

export default EmployeeRow;

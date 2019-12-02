import React from 'react';

function EmployeeRow(props) {
  return props.model.map( (employee, index) => {
    const name = employee.name.last + ", " + employee.name.first;
    return (
      <tr>
        <td className="border border-dark"><img src={employee.picture.thumbnail} alt={name}/></td>
        <td>{name}</td>
        <td>{employee.location.city}</td>
        <td>{employee.location.province}</td>
        <td>{employee.email}</td>
        <td>{employee.phone}</td>
      </tr>
    );
  });
}

export default EmployeeRow;

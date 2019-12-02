import React from 'react';

function EmployeeRowHeader() {
    return (
      <thead className="thead-dark">
        <tr className="border border-dark">
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Province</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
        </tr>
      </thead>
    );
}

export default EmployeeRowHeader;

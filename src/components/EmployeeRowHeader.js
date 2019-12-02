import React from 'react';

function EmployeeRowHeader(props) {
    console.log("EmployeeRowHeader:: ", props);
    return (
      <thead className="thead-dark">
        <tr className="border border-dark">
            <th scope="col">Picture</th>
            <th scope="col">Name <button onClick={props.sort}><i id="sortName" className="fas fa-sort"></i></button></th>
            <th scope="col">City <button onClick={props.sort}><i id="sortCity" className="fas fa-sort"></i></button></th>
            <th scope="col">Province <button onClick={props.sort}><i id="sortProvince" className="fas fa-sort"></i></button></th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
        </tr>
      </thead>
    );
}

export default EmployeeRowHeader;

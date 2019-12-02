import React from 'react';

function EmployeeRowHeader(props) {
    return (
      <thead className="thead-dark">
        <tr className="border border-dark">
            <th scope="col">Picture</th>
            <th scope="col">Name <button id="sortNameButton" onClick={props.sort}><i id="sortName" className="fas fa-sort"></i></button></th>
            <th scope="col">City <button id="sortCityButton" onClick={props.sort}><i id="sortCity" className="fas fa-sort"></i></button></th>
            <th scope="col">Province <button id="sortProvinceButton" onClick={props.sort}><i id="sortProvince" className="fas fa-sort"></i></button></th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
        </tr>
      </thead>
    );
}

export default EmployeeRowHeader;

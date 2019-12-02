import React from 'react';

function EmployeeFilter(props) {

    return (
        <div className="container mb-1">
          <div className="row">
            <div className="col-1 text-right">
              <label htmlFor="filter"><span className="align-bottom"><i className="fas fa-user"></i></span></label>
            </div>
            <div className="col-11 pl-0">
              <input
                onChange={props.handleInputChange}
                name="filter"
                type="text"
                className="form-control"
                placeholder="Filter on a person's name"
                id="filter"
              />
            </div>
          </div>
        </div>
    );
}

export default EmployeeFilter;
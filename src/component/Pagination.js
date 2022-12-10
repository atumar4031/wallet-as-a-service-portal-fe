import React from "react";

const Pagination = ({handlePrevious, handleNext, handlePageSize}) => {
  const changePageSize = (e) => {
    const number = e.target.value;
    handlePageSize(number)
  }
    return (      
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item" style={{"marginRight":"20px"}}>
              <select  className="page-size form-control" onChange={(e) => changePageSize(e)}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
              </select>
            </li>
            <li className="page-item">
              <button onClick={handlePrevious} className="page-link">Previous</button>
            </li>
                        
            <li className="page-item">
              <button onClick={handleNext} className="page-link">Next</button>
            </li>
          </ul>
      </nav>
    );
}

export default Pagination;
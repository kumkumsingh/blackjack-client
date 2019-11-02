import React from 'react'

export default function Pagination(props) {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(props.totalRooms / props.roomsPerPage); i++) {
      pageNumbers.push(i);
    }
    console.log('page numbers',pageNumbers)
  return (
      <div>
        <p>List of page numbers</p>
        <div className="container">
          <ul className="pagination">
            {pageNumbers.map(number => {
              return (
                <li key={number}>
                  <a id={number} onClick={props.onClick}>
                    {number}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>  
      </div>
  )
}

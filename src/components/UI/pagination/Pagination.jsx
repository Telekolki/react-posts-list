import React from 'react'

function Pagination({page, setPage, pagesArray}) {
  return (
    <div className="page-number__wrapper">
        {pagesArray.map( p => 
        <span 
          key={p}
          onClick={() => setPage(p)}
          className={ page === p ? 'page-number-current page-number' : 'page-number' }
        > 
            {p} 
        </span>)}
    </div>
  )
}

export default Pagination
import "./FilterFooter.scss"

const FilterFooter = () => {
  return (
    <div className="filter-footer">
      <div className="filter-footer-count-items">2 items</div>
      <div className="filter-footer-filters">
        <ul>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button className="active">Completed</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FilterFooter
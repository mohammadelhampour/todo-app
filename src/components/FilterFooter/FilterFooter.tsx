import { Task } from "../model/task.model"
import "./FilterFooter.scss"
import { FilterType } from "../model/filter-type.enum"

interface FilterFooterProps {
  tasks: Task[],
  filterType: FilterType,
  setFilter: (filterType: FilterType) => void
}

const FilterFooter = ({ tasks, filterType, setFilter }: FilterFooterProps) => {

  return (
    <div className="filter-footer">
      <div className="filter-footer-count-items">{tasks.length} items</div>
      <div className="filter-footer-filters">
        <ul>
          <li>
            <button className={filterType === FilterType.ALL ? "active" : ""}
              onClick={() => setFilter(FilterType.ALL)}>
              All
            </button>
          </li>
          <li>
            <button className={filterType === FilterType.ACTIVE ? "active" : ""}
              onClick={() => setFilter(FilterType.ACTIVE)}>
              Active
            </button>
          </li>
          <li>
            <button className={filterType === FilterType.COMPLETED ? "active" : ""}
              onClick={() => setFilter(FilterType.COMPLETED)}>
              Completed
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FilterFooter
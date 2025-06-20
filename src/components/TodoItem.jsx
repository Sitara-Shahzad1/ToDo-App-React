
import { MdDeleteSweep } from "react-icons/md";
function TodoItems( {todoName , todoDate,onDeleteClick }){

  return(
    <div className="container  ">
        <div className="row First-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="submit" className="btn btn-danger "
            onClick={() => onDeleteClick(todoName)}>
              < MdDeleteSweep />
            </button>
          </div>
        </div>
      </div>

  );
}

export default TodoItems;
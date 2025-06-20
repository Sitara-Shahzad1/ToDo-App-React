import { useState, useRef } from "react";
import { RiStickyNoteAddFill } from "react-icons/ri";
function AddTodo({ onNewItem }) {
  // const [toDoName, setToDoName] = useState("");
  // const [dueDate, setDueDate] = useState(""); 
  const toDoNameElement = useRef(0);
  const DueDateElement = useRef(0);
  

  // const handleNameChange = (event) => {
  //   setToDoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`number f updates are : ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const toDoName = toDoNameElement.current.value;
    const dueDate = DueDateElement.current.value;
    toDoNameElement.current.value = "";
    DueDateElement.current.value ="";
console.log(`${toDoName} due on : ${dueDate}`)
    onNewItem(toDoName, dueDate);
    // setDueDate("");
    // setToDoName("");
  };
  return (
    <div className="container  text-center">
      <form className="row First-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
           
            ref={toDoNameElement}
            placeholder="Enter Todo Here"
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date"
           
           ref={DueDateElement}
            // onChange={handleDateChange} 
            />{" "}
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success">
            {" "}
            <RiStickyNoteAddFill />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;

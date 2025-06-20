import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import TodoItem from "./components/TodoItem";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const initialtodoItems = [
  
  ];

  const [todoItems, settodoItems] = useState(initialtodoItems);

  const handleNewItem = (itemName, itemDate) => {
    console.log(`new item added: ${itemName} Date: ${itemDate}`);
    const newToDoItem = [...todoItems, { name: itemName, duedate: itemDate },];
    settodoItems(newToDoItem);
  };

  const handleDeleteItem = (itemName) =>{
    const newToDoItems = todoItems.filter( item => item.name !== itemName);
    settodoItems(newToDoItems);
console.log(`Item deleted : ${itemName}`)

  };

  return (
    <center className="Todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />

      {todoItems.length === 0 && <WelcomeMessage /> }
      
      <TodoItems todoItems={todoItems}
      onDeleteClick = { handleDeleteItem}
       />
    </center>
  );
}

export default App;

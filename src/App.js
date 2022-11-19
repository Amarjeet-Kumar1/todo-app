import "./App.css";
import Header from "./component/Header";
import Todos from "./component/Todos";
import Footer from "./component/Footer";
import Addtodo from "./component/AddTodo";
import About from "./component/About";
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete of todo: ", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo: ", title, desc);

    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
   <>      
      <Router>
        <Header title="My Todos List" searchBar={true} />
        <Routes>
          <Route  path="/" element = {
              <>
              <Addtodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
              </>
          }
            />
          
          <Route  path="/about" element={<About />}/>
            
        </Routes>
        <Footer />
      </Router>
      </>
  
  );
}

export default App;

import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTodos } from "../context/TodosContex";
import { DarkModeContext } from "../context/DarkMode";

const Home = () => {
  const { todos, getTodos, deleteTodos } = useTodos();
  // const {isDarkMode, setIsDarkMode} = useContext(DarkModeContext)
  console.log(todos)

  useEffect(() => {
    getTodos();
  }, []);

  const hadnleDelete = (id) => {
    deleteTodos(id);
  };

  return (
    <div className={`container`} >
      <h2 className="text-center mt-5 mb-5">Todo List With React Context</h2>
      <Link to="/add-todos">
        <button className="btn btn-primary mb-3">Add New Todos</button>
      </Link>
      {/* <button onClick={() => setIsDarkMode(!isDarkMode)}>Dark</button> */}
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.todos.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.isDone ? "✅" : "❌"}</td>
              <td>
                <Link to={`/edit-todos/${item.id}`}>
                  <button className="btn btn-success">Edit</button>
                </Link>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => hadnleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTodos } from "../context/TodosContex";

const EditTodos = () => {
  const { id } = useParams();
  const todoId = parseInt(id);
  const navigate = useNavigate();
  const { todos, getTodos, editTodos } = useTodos();
  const [input, setInput] = useState({
    title: '',
    isDone: false,
  });

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  useEffect(() => {
    if (todos && todos.todos) {
      const existTodo = todos.todos.find((item) => item.id === todoId);
      if (existTodo) {
        setInput({
          title: existTodo.title,
          isDone: existTodo.isDone,
        });
      }
    }
  }, [todos, todoId]);

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      isDone: e.target.value === "true" ? true : false,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const editedTodo = {
      id: todoId,
      title: input.title,
      isDone: input.isDone,
    };

    editTodos(editedTodo);
    setInput("");
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center background-style">
      <div className="w-50 border bg-color shadow-lg rounded text-white p-5">
        <form onSubmit={handleUpdate}>
          <h2 className="text-center fw-semibold">Edit Todos</h2>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="todos title"
              value={input.title}
              onChange={handleInput}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              name="status"
              id="status"
              value={input.isDone}
              onChange={handleSelect}
              className="form-select"
            >
              <option value="true">Selesai</option>
              <option value="false">Belum Selesai</option>
            </select>
          </div>
          <button className="btn btn-success w-100">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditTodos;

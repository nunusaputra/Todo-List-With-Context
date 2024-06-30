import React, { useState } from "react";
import { useTodos } from "../context/TodosContex";
import { useNavigate } from "react-router-dom";

const AddTodos = () => {
  const { addTodos } = useTodos();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    isDone: false,
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title: input.title,
      isDone: input.isDone,
    };

    addTodos(newTodo);
    setInput("");
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center background-style">
      <div className="w-50 border bg-color shadow-lg rounded text-white p-5">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center fw-semibold">ADD NEW TODOS</h2>
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
              className="form-select"
              value={input.isDone}
              onChange={handleSelect}
            >
              <option value="true">Selesai</option>
              <option value="false">Belum Selesai</option>
            </select>
          </div>
          <button className="btn btn-success w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddTodos;

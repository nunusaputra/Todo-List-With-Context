import axios from "axios";
import React from "react";
import { createContext, useContext, useReducer } from "react";

const url = "https://66739d896ca902ae11b4c279.mockapi.io/todo/todos";

const GET_TODOS = "GET_TODOS";
const ADD_TODOS = "ADD_TODOS";
const EDIT_TODOS = "EDIT_TODOS";
const DELETE_TODOS = "DELETE_TODOS";

const TodosReducerContext = createContext();

const initialState = {
  isLoading: true,
  todos: [],
};
const TodosReducer = (state, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    case ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        isLoading: false,
      };
    case EDIT_TODOS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id == action.payload.id ? action.payload : todo
        ),
      };
    case DELETE_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
const TodosContex = ({ children }) => {
  const [todos, dispatch] = useReducer(TodosReducer, initialState);

  const getTodos = async () => {
    const response = await axios.get(url);
    dispatch({
      type: GET_TODOS,
      payload: response.data,
    });
  };

  const addTodos = async (newTodo) => {
    const response = await axios.post(url, newTodo);
    dispatch({
      type: ADD_TODOS,
      payload: response.data,
    });
  };

  const editTodos = async (editedTodos) => {
    const response = await axios.put(`${url}/${editedTodos.id}`, editedTodos);
    dispatch({
      type: EDIT_TODOS,
      payload: response.data,
    });
  };

  const deleteTodos = async (id) => {
    const response = await axios.delete(`${url}/${id}`);
    dispatch({
      type: DELETE_TODOS,
      payload: response.data.id,
    });
  };

  return (
    <div>
      <TodosReducerContext.Provider
        value={{ todos, getTodos, addTodos, editTodos, deleteTodos, dispatch }}
      >
        {children}
      </TodosReducerContext.Provider>
    </div>
  );
};

export const useTodos = () => useContext(TodosReducerContext);
export default TodosContex;

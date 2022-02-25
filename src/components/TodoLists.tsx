import React from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { todoState } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoLists = () => {
  const todos = useRecoilValue(todoState);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateTodo />
      <ul>
        {todos.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;

import React from "react";
import { useRecoilValue } from "recoil";
import { todoSelector } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoLists = () => {
  const [todo, doing, done] = useRecoilValue(todoSelector);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateTodo />
      <h2>Todo</h2>
      <hr />
      <ul>
        {todo.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <h2>Doing</h2>
      <hr />
      <ul>
        {doing.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <h2>Done</h2>
      <hr />
      <ul>
        {done.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;

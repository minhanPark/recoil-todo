import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, todoSelector } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoLists = () => {
  const todos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  return (
    <div>
      <select onInput={onInput} value={category}>
        <option>TO_DO</option>
        <option>DOING</option>
        <option>DONE</option>
      </select>
      <h1>To Dos</h1>
      <hr />
      <CreateTodo />
      <h2>Todo</h2>
      <hr />
      <ul>
        {todos.map((toDo) => (
          <Todo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;

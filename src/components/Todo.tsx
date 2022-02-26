import React from "react";
import { useSetRecoilState } from "recoil";
import { ITodo, todoState } from "../atoms";

const Todo = ({ text, category, id }: ITodo) => {
  const setTodos = useSetRecoilState(todoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodos((oldTodos) => {
      const todos = oldTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            category: name as ITodo["category"],
          };
        } else {
          return todo;
        }
      });
      return todos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
};

export default Todo;

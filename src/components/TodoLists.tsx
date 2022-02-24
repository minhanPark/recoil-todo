import React from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface IForm {
  todo: string;
}

interface ITodo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

const TodoLists = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ todo }: IForm) => {
    setTodos((prevTodo) => [
      { text: todo, id: Date.now(), category: "TO_DO" },
      ...prevTodo,
    ]);
    setValue("todo", "");
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;

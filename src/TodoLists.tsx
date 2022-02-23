import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  todo: string;
}

const TodoLists = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("add to do", data.todo);
    setValue("todo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", { required: "need todo" })}
          placeholder="Write Todo Please."
        />
        <button>제출</button>
      </form>
    </div>
  );
};

export default TodoLists;

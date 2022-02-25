import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atoms";

interface IForm {
  todo: string;
}

const CreateTodo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setTodos = useSetRecoilState(todoState);

  const handleValid = ({ todo }: IForm) => {
    setTodos((prevTodo) => [
      { text: todo, id: Date.now(), category: "TO_DO" },
      ...prevTodo,
    ]);
    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
};

export default CreateTodo;

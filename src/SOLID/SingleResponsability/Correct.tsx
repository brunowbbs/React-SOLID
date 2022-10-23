import { useEffect, useState } from "react";
import axios from "axios";

type TodoType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const fetchTodos = async () => {
  return axios
    .get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.data);
};

const useFetchTodo = () => {
  const [data, setData] = useState<TodoType[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchTodos()
      .then((todos) => setData(todos))
      .finally(() => setIsFetching(false));
  }, []);

  return { data, isFetching };
};

const TodoListCorrect = () => {
  const { data, isFetching } = useFetchTodo();

  if (isFetching) return <p>...loading</p>;

  return (
    <ul>
      {data.map((todo) => (
        <li>
          <span>{todo.id}</span>
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoListCorrect;

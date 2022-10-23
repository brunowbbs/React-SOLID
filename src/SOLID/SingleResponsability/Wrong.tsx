import { useEffect, useState } from "react";
import axios from "axios";

type TodoType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const TodoListWrong = () => {
  const [data, setData] = useState<TodoType[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setData(res.data))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  if (isFetching) {
    return <p>...loading</p>;
  }

  return (
    <ul>
      {data.map((todo) => {
        return (
          <li>
            <span>{todo.id}</span>
            <span>{todo.id}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoListWrong;

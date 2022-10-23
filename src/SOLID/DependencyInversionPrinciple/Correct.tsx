import useSWR from "swr";

interface UseData<T> {
  key: string;
  fetcher: () => Promise<T>;
}

interface Response<T> {
  data: T | undefined;
  error: string | undefined;
  isValidating: boolean;
}

export const useData = <T,>({ key, fetcher }: UseData<T>): Response<T> => {
  const { data, error, isValidating } = useSWR<T, string>(key, fetcher);

  return { data, error, isValidating };
};

//--------------------------------------------------------------------------------------------------

type ResponseType = {
  id: number;
  title: string;
};

const fetcherFromApi = async (): Promise<ResponseType[]> => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);
  return res.json();
};

const TodoCorrect = () => {
  const { data } = useData<ResponseType[]>({
    key: "/todos",
    fetcher: fetcherFromApi,
  });

  if (!data) return <p>... loading</p>;

  return (
    <ul>
      {data.map((todo: any) => (
        <li>
          <span>{todo.id}</span>
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoCorrect;

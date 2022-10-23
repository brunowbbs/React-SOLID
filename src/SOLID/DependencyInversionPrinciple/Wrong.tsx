import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

const DependencyInversionPrinciple = () => {
  const { data } = useSWR<Array<any>>(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  if (!data) return <p>loading...</p>;

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

export default DependencyInversionPrinciple;

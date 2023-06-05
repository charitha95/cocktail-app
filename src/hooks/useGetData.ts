import { useEffect, useState } from "react";
type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
export default function useGetData(): [TodoType[]] {
  const [todo, setTodo] = useState<TodoType[]>([]);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodo(data);
    };
    fetchData();
  }, []);
  return [todo];
}

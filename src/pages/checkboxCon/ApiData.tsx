import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
//TypeScript Interface
interface TodoItem {
  userId: number;
  id: number;
  completed: boolean;
  title: string;
}
const ApiData = () => {
  const [data, setData] = useState<TodoItem[]>([]);

  const callApi = async () => {
    const response = await axios.get<TodoItem[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <>
      <h1>Api Data</h1>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User Id</TableHead>
            <TableHead>id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>completed</TableHead>
            <TableHead className="text-right">Checked Data</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((i) => (
            <>
              <TableRow>
                <TableCell className="font-medium">{i.userId}</TableCell>
                <TableCell>{i.id}</TableCell>
                <TableCell>{i.title}</TableCell>
                <TableCell className="text-right">{i.completed}</TableCell>
                <TableCell className="text-right">checkbox</TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ApiData;

// bfehvbjfbvgnvlkef
// ifuvniunri

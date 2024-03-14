import { TableCustom } from "@/components/Table/TableCustom";
import Link from "next/link";

//import TaskTable from "@/components/Table/Table";
async function fetchTasks() {
  const res = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.tasks;
}



export default async function TasksPage() {
  const tasks = await fetchTasks();
  return (
    <>
      <div className="flex justify-center text-white mb-6 mt-6 text-3xl font-bold">
        Tasks Page
      </div>

      <TableCustom data={tasks}  />
    </>
  );
}

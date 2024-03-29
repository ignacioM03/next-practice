"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewTaskPage({ params }: any) {
  const router = useRouter();
  const { id } = params;
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    fetch(`/api/tasks/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setTaskData(data.data); // Update component state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching task data:", error);
      });
  }, []);
  console.log(taskData);
  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (id) {
      const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: e.target.title.value,
          description: e.target.description.value,
          type: e.target.type.value,
          loadDate: new Date(),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      const res = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        body: JSON.stringify({
          title: e.target.title.value,
          description: e.target.description.value,
          type: e.target.type.value,
          loadDate: new Date(),
          status: "pending",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
    }
  };
  return (
    <>
      <div className="">
        <div className="flex justify-center text-white mb-6 mt-6 text-3xl font-bold">
          New Task
        </div>
        <Link
          href="/tasks"
          className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded"
        >
          Go Back
        </Link>
      </div>

      <div className=" flex justify-center items-center">
        <form
          action=""
          className="bg-white shadow-md rounded p-10 text-black"
          onSubmit={onSubmit}
        >
          {taskData ? (
            <>
              <div className="">
                <label>Title</label>
                <input
                  type="text"
                  className="border border-gray-400 p-2 rounded-md mb-4 w-full text-black"
                  placeholder="title"
                  required
                  id="title"
                />
              </div>
              <div className="">
                <label>description</label>
                <textarea
                  cols={30}
                  rows={10}
                  className="border border-gray-400 p-2 mb-4 w-full rounded-md text-black"
                  placeholder="description"
                  id="description"
                ></textarea>
              </div>
              <div className="">
                <label htmlFor="">Type</label>
                <select
                  className="border border-gray-400 p-2 mb-4 w-full rounded-md text-black"
                  name="type"
                  id="type"
                  required
                >
                  <option value="HOME">Home</option>
                  <option value="WORK">Work</option>
                  <option value="SPORT">Sport</option>
                </select>
              </div>
              <div className="">
                <label>fecha de Carga</label>
                <input
                  type="date"
                  className="border border-gray-400 p-2 rounded-md mb-4 w-full text-black"
                  placeholder="fehca de carga"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-primary bg-slate-700 rounded-md w-full p-2 text-white"
                onClick={() => {
                  router.refresh();
                  router.push("/tasks");
                }}
              >
                Create Task
              </button>
            </>
          ) : (
            <>
              <div className="">
                <label>Nombre de la tarea</label>
                <input
                  type="text"
                  className="border border-gray-400 p-2 rounded-md mb-4 w-full text-black"
                  placeholder="title"
                  required
                  id="title"
                />
              </div>
              <div className="">
                <label>Descripcion </label>
                <textarea
                  cols={30}
                  rows={10}
                  className="border border-gray-400 p-2 mb-4 w-full rounded-md text-black"
                  placeholder="description"
                  id="description"
                ></textarea>
              </div>
              <div className="">
                <label htmlFor="">Tipo</label>
                <select
                  className="border border-gray-400 p-2 mb-4 w-full rounded-md text-black"
                  name="type"
                  id="type"
                  required
                >
                  <option value="HOME">Home</option>
                  <option value="WORK">Work</option>
                  <option value="SPORT">Sport</option>
                </select>
              </div>
              <div className="">
                <label>fecha de Carga</label>
                <input
                  type="date"
                  className="border border-gray-400 p-2 rounded-md mb-4 w-full text-black"
                  placeholder="fehca de carga"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-primary bg-slate-700 rounded-md w-full p-2 text-white"
                onClick={() => {
                  router.refresh();
                  router.push("/tasks");
                }}
              >
                Create Task
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
}

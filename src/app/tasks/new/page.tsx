"use client";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

export default function NewTaskPage() {
  const router = useRouter();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e.target.title.value);
    const res = await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      body: JSON.stringify({
        title: e.target.title.value,
        description: e.target.description.value,
        type: e.target.type.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    //redirect("/tasks");
  };
  return (
    <>
      <div className="">
        <div className="flex justify-center text-white mb-6 mt-6 text-3xl font-bold">
          New Task
        </div>
        <Link
          href="/tasks"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
          <div className="">
            <label>Title</label>
            <input
              type="text"
              className="border border-gray-400 p-2 rounded-md mb-4 w-full text-white"
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
              className="border border-gray-400 p-2 mb-4 w-full rounded-md text-white"
              placeholder="description"
              id="description"
            ></textarea>
          </div>
          <div className="">
            <label htmlFor="">Type</label>
            <select
              className="border border-gray-400 p-2 mb-4 w-full rounded-md text-white"
              name="type"
              id="type"
              required
            >
              <option value="HOME">home</option>
              <option value="WORK">work</option>
              <option value="OTHER">other</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn-primary bg-blue-500 rounded-md w-full p-2 text-white"
            onClick={() => {
              router.push("/tasks");
            }}
          >
            Create Task
          </button>
        </form>
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function deleteTask(id: number) {
  const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
}

type ItemType = {
  id: number;
  title: string;
  description: string;
};

export const TableCustom = ({ data }: any) => {
  const [id, setId] = useState([]);
  const router = useRouter();
  const [enable, setEnable] = useState(false);
  const [select, setSelect] = useState(false);
  const onbSubmit = async (e: any) => {
    e.preventDefault();
    for (let i = 0; i < id.length; i++) {
      const res = await deleteTask(id[i]);
    }
    setId([]);
    router.refresh();
  };
  return (
    <div className="">
      <div className="flex justify-between">
        <Link
          href="/tasks/new"
          className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded  mb-5"
        >
          Add new task
        </Link>
        <button
          className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded  mb-5"
          onClick={onbSubmit}
        >
          Delete All
        </button>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="px-4 py-2">
                <label htmlFor="SelectAll" className="sr-only">
                  Select All
                </label>

                <input
                  type="checkbox"
                  id="SelectAll"
                  className="size-5 rounded border-gray-300"
                  onClick={() => {
                    setId(data.map((item: any) => item.id));
                    setSelect(!select);
                  }}
                />
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Title
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Description
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Status
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Type
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Load Date
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Actions
              </th>
            </tr>
          </thead>

          {data.map((item: any) => (
              <tbody className="divide-y divide-gray-200" key={item.id}>
                <tr key={item.id}>
                  <td className="px-4 py-2 text-center">
                    <label className="sr-only" htmlFor="Row1">
                      Row 1
                    </label>

                    <input
                      className="size-5 rounded border-gray-300"
                      type="checkbox"
                      id="Row1"
                      onChange={() => {
                        setId([...id, item.id]);
                      }}
                    />
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {item.title}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {item.description}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {item.status}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {item.type}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                    {item.loadDate}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center">
                    <div className=" flex justify-center">
                      <Link
                        href={`tasks/edit/${item.id}`}
                        className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                      >
                        Edit
                      </Link>
                      <Link
                        href=""
                        className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                        onClick={() => {
                          deleteTask(item.id);
                          router.refresh();
                        }}
                      >
                        Delete
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
          ))}
        </table>
      </div>
      <div className="rounded-b-lg border-t border-gray-200 px-4 py-2 mt-10">
        <ol className="flex justify-center gap-1 text-xs font-medium">
          <li>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              1
            </a>
          </li>

          <li className="block size-8 rounded border-slate-600 bg-slate-600 text-center leading-8 text-white">
            2
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              4
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

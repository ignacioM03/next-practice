"use client";
async function deleteTask(id: number) {
  const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
}

export const TableCustom = ({ data }: any) => {
  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-slate-700 text-sm text-white">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <div className="">
              <th className="px-4 py-2 flex justify">
                <input
                  type="checkbox"
                  id="SelectAll"
                  className="size-5 rounded border-gray-300"
                />
                <label htmlFor="SelectAll" className=" text-black">
                  Select All
                </label>
              </th>
            </div>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
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
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data.map((task: any) => (
            <>
              <tr>
                <td className="px-4 py-2">
                  <label className="sr-only" htmlFor="Row1">
                    Row 1
                  </label>

                  <input
                    className="size-5 rounded border-gray-300"
                    type="checkbox"
                    id="Row1"
                  />
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">
                  {task.title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {task.description}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  {task.status}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {task.type}
                </td>
                <div className="flex justify-center">
                  <td className="whitespace-nowrap  py-2">
                    <button className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700">
                      Edit
                    </button>
                    <button
                      type="submit"
                      onClick={() => {
                        console.log(task.id);
                        deleteTask(task.id);
                      }}
                      className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </div>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

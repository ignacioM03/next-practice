"use client";
import { useEffect, useState } from "react";
export default function LocationPage({ params }: any) {
  const { id } = params;
  const [data, setData] = useState([]);
  useEffect(() => {
      fetch(`/api/locations/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data); // Update component state with fetched data
        })
        .catch((error) => {
          console.error("Error fetching task data:", error);
        });
    }, []);
    console.log(data);
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {data?.name}
            </h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              {data?.type}
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Residents
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  {data?.residents?.length}
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Official dimension
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  {data.dimension}
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-50 px-auto py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  url
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl max-w-full">
                  {data.created}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}

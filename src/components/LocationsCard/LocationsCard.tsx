import Link from "next/link";

export const LocationsCard = ({ data }: { data: any }) => {
  return (
    <div>
      {data.map((item: any) => (
        <>
          <article className="flex bg-white transition hover:shadow-xl">
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time
                dateTime="2022-10-10"
                className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
              >
                <span>{item.dimension}</span>
                <span className="w-px flex-1 bg-gray-900/10"></span>
                <span>{item.created}</span>
              </time>
            </div>

            <div className="hidden sm:block sm:basis-56">
              <img
                alt=""
                src={item.image}
                className="aspect-square h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <Link href={`http://localhost:3000/rick/location/${item.id}`}>
                  <h3 className="font-bold uppercase text-gray-900">
                    {item.name}
                  </h3>
                </Link>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  {item.type}
                </p>
              </div>

              <div className="sm:flex sm:items-end sm:justify-end">
                <Link
                  href={`http://localhost:3000/rick/location/${item.id}`}
                  className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                >
                  Read More
                </Link>
              </div>
            </div>
          </article>
        </>
      ))}
    </div>
  );
};

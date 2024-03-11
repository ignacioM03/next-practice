import Link from "next/link";

export const CharactersCard = ({ data }: { data: any }) => {
  console.log(data);

  return (
    <section className="container">
      <div className="grid grid-cols-4 gap-3 bg-slate-700">
        {data.map((item: any) => (
          <>
            <Link
              href={`http://localhost:3000/rick/characters/${item.id}`}
              className="group relative block bg-black"
            >
              <img
                alt=""
                src={item.image}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                  {item.status}
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  {item.name}
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">{item.species}</p>
                    <p className="text-sm text-white">{item.gender}</p>
                    <p className="text-sm text-white">{item.episodes}</p>
                  </div>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </section>
  );
};

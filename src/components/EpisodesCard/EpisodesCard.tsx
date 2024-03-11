import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import Link from "next/link";

export const EpisodesCard = ({ data }: { data: any[] }) => {
  return (
    <section className="container ">
      <div className="grid grid-cols-4 gap-3 ">
        {data.map((episode) => (
          <div key={episode.id} className="bg-slate-700 p-3">
            <Card className="max-w-[400px] bg-white-700">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">Name: {episode.name}</p>
                  <p className="text-md">AirDate: {episode.air_date}</p>
                  <p className="text-small text-default-500">
                    Total Characters: {episode.characters.length}
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>Episode: {episode.episode}</p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  href={`http://localhost:3000/rick/episodes/${episode.id}`}
                >
                  Visit source code on Rick and Morty.
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

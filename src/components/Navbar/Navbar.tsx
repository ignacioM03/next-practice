import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-700 flex gap-4 p-6 text-white font-bold justify-between w-full">
        <h1>Next UI</h1>
        <ul className="flex gap-4 text-white font-bold justify-between">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tasks">Tasks</Link>
          </li>
          <li>
            <Link href="/rick">Rick and Morty</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

import Link from "next/link";
export default function NotFoundPage() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-700">Not Found</h1>
        <Link href="/" className="text-slate-700 text-center text-2xl">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

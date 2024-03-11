export const CardTask = ({ tasks }: any) => {
  const all = tasks;
  return (
    <>
      <h1>Tasks</h1>
      {all.map((task: any) => (
        <div key={task.id} className="max-w-sm w-full lg:max-w-full lg:flex">
          <h3>{task.title}</h3>
        </div>
      ))}
    </>
  );
};

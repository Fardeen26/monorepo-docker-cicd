import { client } from "@repo/db/client";

export default async function Home() {
  const users = await client.user.findMany();

  return (
    <main className="flex p-10 gap-10 flex-col items-center justify-center h-fit">
      <h1>User App</h1>
      {
        users && users.map((user) => (
          <div key={user.id}>
            <h2>{user.username}</h2>
            <p>{user.password}</p>
          </div>
        ))
      }
    </main>
  );
}

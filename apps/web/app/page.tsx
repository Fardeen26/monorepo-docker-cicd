import { client } from "@repo/db/client";

export default async function Home() {
  const users = await client.user.findMany();

  console.log(users);

  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
}

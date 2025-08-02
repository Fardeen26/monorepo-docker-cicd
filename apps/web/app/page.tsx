// Force dynamic rendering to avoid build-time database access
export const dynamic = 'force-dynamic';

async function getUsers() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/users`, {
      cache: 'no-store'
    });
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex p-10 gap-10 flex-col items-center justify-center h-fit">
      <h1>User App</h1>
      {users && users.length > 0 ? (
        users.map((user: any) => (
          <div key={user.id}>
            <h2>{user.username}</h2>
            <p>{user.password}</p>
          </div>
        ))
      ) : (
        <p>No users found</p>
      )}
    </main>
  );
}

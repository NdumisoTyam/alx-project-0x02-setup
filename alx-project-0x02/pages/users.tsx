import UserCard from "../components/common/UserCard";
import { type UserProps } from "../interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Users</h1>
      <div className="grid gap-6">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}

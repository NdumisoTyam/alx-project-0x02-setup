import { type UserProps } from "../../interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>
      <p className="text-gray-600 mb-1">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
}

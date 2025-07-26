import { type PostProps } from "../../interfaces";

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{body}</p>
      <p className="text-sm text-gray-400">User ID: {userId}</p>
    </div>
  );
}

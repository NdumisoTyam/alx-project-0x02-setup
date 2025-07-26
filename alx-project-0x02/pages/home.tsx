import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Home Page</h1>

      <Card
        title="Getting Started"
        content="Learn how to build scalable apps with Next.js and TypeScript."
      />
      <Card
        title="Modular Components"
        content="Reuse UI elements across your app with clean architecture."
      />
      <Card
        title="Tailwind Styling"
        content="Style your components with utility-first CSS classes."
      />
    </div>
  );
}

import { useState } from "react";
import PostModal, { type PostData } from "../components/common/PostModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostData[]>([]);

  const handleAddPost = (data: PostData) => {
    setPosts((prev) => [...prev, data]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Add Post
      </button>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

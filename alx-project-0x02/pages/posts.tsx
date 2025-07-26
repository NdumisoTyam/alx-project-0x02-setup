import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Posts</h1>
        <p>Here’s where your blog posts or articles will go.</p>
      </main>
    </>
  );
}

import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { type PostProps } from "../interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, []);

  return (
    <>
      <Header />
      <main className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Posts</h1>
        <div className="grid gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </>
  );
}

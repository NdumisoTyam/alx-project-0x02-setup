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

import PostCard from "../components/common/PostCard";
import { type PostProps } from "../interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Posts</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}

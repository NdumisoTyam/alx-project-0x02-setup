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

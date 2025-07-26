import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-6 text-center">
        <p className="text-lg text-gray-700">
          This is a Next.js + Tailwind CSS setup for ALX Project 2.
        </p>
      </main>
    </div>
  );
}

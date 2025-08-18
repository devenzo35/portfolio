import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-lg mb-8">Próximamente...</p>
      <div className="space-x-4">
        <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded">Volver al Inicio</Link>
      </div>
    </div>
  );
}
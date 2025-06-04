import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-700">
          INCLUSIA 2025
        </Link>
        <div className="space-x-6">
          <Link href="/programme" className="text-gray-700 hover:text-indigo-600">
            Programme
          </Link>
          <Link href="/inscription" className="text-gray-700 hover:text-indigo-600">
            Inscription
          </Link>
          <Link href="/gala" className="text-gray-700 hover:text-indigo-600">
            Gala
          </Link>
          <Link href="/devenir-sponsor" className="text-gray-700 hover:text-indigo-600">
            Devenir Sponsor
</Link>

        </div>
      </div>
    </nav>
  );
}

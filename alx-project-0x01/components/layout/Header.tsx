import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          ALX Listing
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/posts" className="text-sm hover:underline">
            Posts
          </Link>
          <Link href="/users" className="text-sm hover:underline">
            Users
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

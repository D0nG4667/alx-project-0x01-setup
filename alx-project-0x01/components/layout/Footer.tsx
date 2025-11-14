const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-50 border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} ALX Listing — Built with Next.js v16 &
        Tailwind v4
      </div>
    </footer>
  );
};

export default Footer;

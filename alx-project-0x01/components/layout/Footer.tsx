const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white shadow-md py-4 mx-auto min-w-full">
      <div className="max-w-6xl px-4 py-6 text-sm text-center">
        © {new Date().getFullYear()} ALX Listing — Built with Next.js v16 &
        Tailwind v4
      </div>
    </footer>
  );
};

export default Footer;

export default function Footer() {
  return (
    <footer className="text-center text-gray-400 mt-10 mb-4">
      <p className="text-sm md:text-base">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Shehryar Khan</span> —
        Crafted with ❤️, powered by{" "}
        <span className="text-blue-400">Next.js</span> &{" "}
        <span className="text-teal-400">Tailwind CSS</span>.
      </p>
    </footer>
  );
}

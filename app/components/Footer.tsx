export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-20">
      <div className="max-w-5xl mx-auto py-6 px-4 text-sm text-neutral-500 flex justify-between">
        <span>© {new Date().getFullYear()} Joana Kelly</span>
        <span>Built with Next.js & TypeScript</span>
      </div>
    </footer>
  );
}
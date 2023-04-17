import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-3xl font-bold mb-2 sm:mb-0 sm:text-4xl">
          {"Jenny's TIL"}
        </h1>
      </Link>
      <nav className="flex flex-wrap sm:flex-nowrap text-sm sm:text-base p-2">
        <Link href="/" className="mx-2">
          home
        </Link>
        <Link href="/about" className="mx-2">
          about
        </Link>
        <Link href="/contents" className="mx-2">
          contents
        </Link>
        <Link href="/contact" className="mx-2">
          contact
        </Link>
      </nav>
    </header>
  );
}

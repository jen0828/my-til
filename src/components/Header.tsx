import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1>{"Jenny's TIL"}</h1>
      </Link>
      <nav>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/contents">contents</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}

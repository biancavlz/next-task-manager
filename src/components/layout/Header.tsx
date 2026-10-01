import Link from "next/link";

function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Task Manager</Link>
        <Link href="/tasks">Tasks</Link>
      </nav>
    </header>
  );
}

export default Header;

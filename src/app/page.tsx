import Link from "next/link";

function HomePage() {
  return (
    <main>
      <h1>Task Manager</h1>

      <p>A simple task management application built with Next.js.</p>

      <Link href="/tasks">View Tasks</Link>
    </main>
  );
}

export default HomePage;

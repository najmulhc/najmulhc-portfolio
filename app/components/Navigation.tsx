import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <Link
            className="text-[#eeeeef] opacity-75 hover:opacity-100"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-[#eeeeef] opacity-75 hover:opacity-100"
            href="/education"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            className="text-[#eeeeef] opacity-75 hover:opacity-100"
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="text-[#eeeeef] opacity-75 hover:opacity-100"
            href="/tech-stack"
          >
            Tech Stack
          </Link>
        </li>
      </ul>
    </nav>
  );
}

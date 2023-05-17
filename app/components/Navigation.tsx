import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link
            className="text-[#eeeeef] opacity-75 hover:opacity-100"
            href="https://www.google.com"
          >
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

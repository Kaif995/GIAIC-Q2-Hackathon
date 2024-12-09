import * as React from "react";
import Link from "next/link";

export function MainNav() {
  return (
    <nav className="flex justify-center items-center py-4 bg-white shadow-md">
      <ul className="flex gap-8">
        <li>
          <Link href="/" className="hover:text-blue-600">Home</Link>
        </li>
        <li>
          <Link href="/products" className="hover:text-blue-600">Products</Link>
        </li>
        <li>
          <Link href="/sales" className="hover:text-blue-600">Sales</Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
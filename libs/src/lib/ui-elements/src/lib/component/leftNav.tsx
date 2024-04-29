'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export async function LeftNav() {
  const pathname = usePathname()

  console.log(pathname)
  return (
    <div className="left-nav">
        <ul className="nav-list">
          <li className="create">
            <Link href="/"  className={pathname == '/' ? "active" : ""}>
              <span className="plus-icon">+</span> Create Idea
            </Link>
          </li>
          <li>
            <Link className={pathname == '/operate' ? "active" : ""} href="/operate">Operate Ideas</Link>
          </li>
          <li>
            <Link className={pathname == '/role' ? "active" : ""} href="/role">Role Management</Link>
          </li>
          <li>
            <Link className={pathname == '/idea' ? "active" : ""} href="/idea">Idea Details</Link>
          </li>
        </ul>
    </div>
  );
}

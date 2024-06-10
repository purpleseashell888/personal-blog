import Logo from "./logo";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import classes from "./main-navigation.module.css";

export default function MainNavigation() {
  const { data: session, status } = useSession();

  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>

      <nav>
        <ul>
          {!session && status !== "loading" && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/comments">Comments</Link>
          </li>
          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

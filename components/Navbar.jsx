import Link from "next/link";
import Image from "next/image";
import styles from "../src/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Image src="/ad1.png" height="100" width="100" alt="logo" />
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/users/">Users</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/products">Products</Link>
      </div>
    </div>
  );
};

export default Navbar;

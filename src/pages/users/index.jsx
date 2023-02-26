import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Users.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data.slice(0, 3) },
  };
};

const users = ({ users }) => {
  return (
    <>
      <Head>
        <title>Users Page</title>
      </Head>
      <h1>users</h1>
      <div>
        {users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <h2 className={styles.user}>{user.name}</h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default users;

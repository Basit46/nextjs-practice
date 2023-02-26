import Head from "next/head";
import { useRouter } from "next/router";

const user = ({ user }) => {
  const router = useRouter();
  const id = router.query.id;

  if (router.isFallback) {
    return <h1>Loading........</h1>;
  }

  return (
    <>
      <Head>
        <title>{user.name}</title>
      </Head>
      <div>
        <div>
          user with name of {user.name} {id}
        </div>
      </div>
    </>
  );
};

export default user;

export const getStaticPaths = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await res.json();

  // const paths = data.map((user) => {
  //   return { params: { id: user.id.toString() } };
  // });

  return {
    // paths,
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    // fallback: "blocking",
    fallback: true,
    // fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user: data },
  };
};

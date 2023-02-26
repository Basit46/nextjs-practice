import { useRouter } from "next/router";

const Article = ({ article }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading.....</h1>;
  }
  return (
    <div>
      <h1>Article number {article.id}</h1> <h3>{article.body}</h3>
    </div>
  );
};

export default Article;

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:4000/posts`);
  const data = await res.json();

  const paths = data.map((article) => {
    return { params: { articleId: article.id.toString() } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://localhost:4000/posts/${context.params.articleId}`
  );
  const data = await res.json();

  return {
    props: {
      article: data,
    },
    revalidate: 4,
  };
};

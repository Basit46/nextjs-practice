import Link from "next/link";
import styles from "../../styles/Articles.module.css";

const Articles = ({ articles }) => {
  return (
    <div>
      <h1>Articles</h1>
      <div>
        {articles.map((article) => (
          <Link href={`/articles/${article.id}`} key={article.id}>
            <h2 className={styles.article}>{article.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:4000/posts");
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
    revalidate: 4,
  };
};

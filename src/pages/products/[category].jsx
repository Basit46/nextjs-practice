const Product = ({ products }) => {
  return (
    <div>
      <h1>HI</h1>
      <div>
        {products.map((product) => (
          <h3 key={product.id}>{product.name}</h3>
        ))}
      </div>
    </div>
  );
};

export default Product;

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();

  const paths = data.map((product) => {
    return { params: { category: product.category } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const val = context.params.category;

  const res = await fetch(`http://localhost:4000/products?category=${val}`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};

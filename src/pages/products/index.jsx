import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Products = ({ products }) => {
  const router = useRouter();
  const [ourProducts, setOurProducts] = useState(products);

  const handleFilter = () => {
    const filtered = ourProducts.filter(
      (product) => product.category === "men"
    );

    setOurProducts(filtered);
    router.push("/products?category=men", undefined, { shallow: true });
  };

  return (
    <div>
      <button onClick={handleFilter}>FILTER MEN</button>
      <h1>Products</h1>
      <div>
        {ourProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.category}`}>
            <h3>{product.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;

export const getServerSideProps = async (context) => {
  const queryString = context.query.category ? "category=men" : "";

  const res = await fetch(`http://localhost:4000/products?${queryString}`);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};

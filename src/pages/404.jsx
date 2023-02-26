import { useEffect } from "react";
import { useRouter } from "next/router";

const errorPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return <div>Page does not fucking exist love. Try another</div>;
};

export default errorPage;

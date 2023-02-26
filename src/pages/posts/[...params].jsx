import { useRouter } from "next/router";

const post = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  console.log(params);

  if (params.length === 1) {
    return <div>Param of one length which is: {params[0]}</div>;
  }

  if (params.length === 2) {
    return (
      <div>
        Param on 2 length which is: {params[0]} and {params[1]}
      </div>
    );
  }

  return <div>post </div>;
};

export default post;

import { useRouter } from "next/router";

function Review() {

  const router = useRouter();

  return (
    <div>{router.query.id}</div>
  )
}

export default Review;
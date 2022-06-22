import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const UserInfo = ({ data }: any) => {

  const router = useRouter();

  const [userData, setUserData] = useState();

  console.log("USER", router.query.user)


  useEffect(() => {

    if (!router.isReady) return;
    else {
      let id = router.query.user;

      axios.get(`http://localhost:3000/api/user/getById?id=${id}`)
        .then(data => data)
        .then(user => setUserData(user.data.user))
    }

  }, [router.query.user, router.isReady])

  return (
    <div>{userData?.email}</div>
  )
}
export default UserInfo;


// export async function getServerSideProps() {


//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const router = useRouter();

//   // Fetch data from external API
//   // const res = await fetch(`http://localhost:3000/api/products/get?id=${'62b1dc4496a8bbd9859bfbbd'}`);
//   const res = await fetch(`http://localhost:3000/api/user/get?id=${router?.query.user}`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }
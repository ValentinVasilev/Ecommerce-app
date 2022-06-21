import React, { useState } from "react";

const Users = ({ data }: any) => {

  const [users, setUsers] = useState(data.Users);

  return (
    <div style={{ display: 'flex' }}>
      {users?.map((user: any) => {
        return (
          <div key={user._id} style={{ border: '2px solid red', margin: '2vh', maxWidth: '250px' }}>
            <p>{user.email}</p>
            <p>{user.createdAt}</p>
            <p>{user.updatedAt}</p>
            {user.cart.map((item: any) => {
              return <p key={item}>{item}</p>
            })}

          </div>
        )
      })}

    </div >
  )
}

export default Users;

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`http://localhost:3000/api/products/get?id=${'62b1dc4496a8bbd9859bfbbd'}`);
  const res = await fetch(`http://localhost:3000/api/user/getAll`);
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
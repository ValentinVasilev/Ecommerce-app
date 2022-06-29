import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import AdminTabs from "../../../components/sub-components/admin-tabs.component";
import { useAppSelector, useAppDispatch } from "../../../utils/app/hooks";
import { getAllUsersAction, selectAllUsers } from "../../../utils/app/features/users/usersSlice";


const Users = ({ data }: any) => {

  const router = useRouter();

  const [users, setUsers] = useState(data.Users);
  const [allUsers, setAllUsers] = useState<any>();

  const usersData = useAppSelector(selectAllUsers)

  useEffect(() => {
    setAllUsers(usersData.users.Users)
  }, [usersData.users.Users])


  const deleteUser = (userId: string) => {
    try {
      axios.delete(`/api/user/delete?id=${userId}`)
      console.log(userId)
    } catch (error) {
      console.log(error)
    }

    router.push('/admin/users');

  }


  return (
    <div style={{ display: 'flex' }}>
      <div>
        <AdminTabs name="Users" />
      </div>
      {/* <div style={{ display: 'flex' }}>
        {users?.map((user: any) => {
          return (
            <div key={user._id} style={{ border: '2px solid red', margin: '2vh', maxWidth: '250px', display: 'flex', flexDirection: 'column', justifyContent: '' }}>
              <p>{user._id}</p>
              <p>{user.email}</p>
              <p>{user.createdAt}</p>
              <p>{user.updatedAt}</p>
              {user.cart.map((item: any) => {
                return <p key={item}>{item}</p>
              })}
              <div style={{ width: '70%', alignSelf: 'center' }}>
                <Link href={{
                  pathname: '/admin/users/[id]',
                  query: {
                    user: user._id,
                  }
                }}
                  as={`/admin/users/${user._id}`}
                  passHref
                >
                  <Button variant="contained" color="info">View User</Button>
                </Link>
                <Button onClick={() => deleteUser(user._id)} variant="contained" color="error">Delete</Button>
              </div>
            </div>
          )
        })}
      </div> */}

      <div style={{ display: 'flex', width: '100%' }}>
        <p>Data from REDUX:</p>
        {allUsers?.map((user: any) => {
          return (
            <div key={user._id} style={{ border: '2px solid green', width: 'content-fit', maxWidth: '20%', overflowWrap: 'break-word' }}>
              <p>ID: {user._id}</p>
              <p>EMAIL: {user.email}</p>
              <p>PASSWORD: {user.password}</p>
              <p>CreatedAt: {user.createdAt}</p>
              <p>UpdatedAt: {user.updatedAt}</p>
              <div style={{ width: '70%', alignSelf: 'center' }}>
                <Link href={{
                  pathname: '/admin/users/[id]',
                  query: {
                    user: user._id,
                  }
                }}
                  as={`/admin/users/${user._id}`}
                  passHref
                >
                  <Button variant="contained" color="info">View User</Button>
                </Link>
                <Button onClick={() => deleteUser(user._id)} variant="contained" color="error">Delete</Button>
              </div>
              <br />
            </div>
          )
        })}
      </div>
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
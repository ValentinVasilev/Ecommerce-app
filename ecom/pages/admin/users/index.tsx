import React, { useState, useEffect } from "react";
import { Button, Table, TableBody } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import AdminTabs from "../../../components/sub-components/admin-tabs.component";
import { useAppSelector, useAppDispatch } from "../../../utils/app/hooks";
import { getAllUsersAction, selectAllUsers } from "../../../utils/app/features/users/usersSlice";
import styles from '../../../styles/admin/users.module.scss';
import { DataGrid } from "@mui/x-data-grid";



const Users = ({ data }: any) => {

  const router = useRouter();

  const [users, setUsers] = useState(data.Users);
  const [allUsers, setAllUsers] = useState<any>();
  const [userRows, setUserRows] = useState();
  const [link, setLink] = useState('');

  const usersData = useAppSelector(selectAllUsers)

  useEffect(() => {
    setAllUsers(usersData.users.Users)
    const data = usersData.users.Users
    setUserRows(data);

  }, [usersData.users.Users])


  const deleteUser = (userId: any, e: any) => {

    e.stopPropagation();

    try {
      axios.delete(`/api/user/delete?id=${userId}`)

    } catch (error) {
      console.log(error)
    }

    router.push('/admin/users');


  }

  const columns = [

    { field: 'id', headerName: 'ID', maxWidth: 250, minWidth: 250 },
    { field: 'email', headerName: 'Email', maxWidth: 250, minWidth: 250 },
    { field: 'isAdmin', headerName: 'IsAdmin', maxWidth: 250, minWidth: 250 },
    { field: 'createdAt', headerName: 'CreatedAt', maxWidth: 250, minWidth: 150 },
    { field: 'updatedAt', headerName: 'UpdatedAt', maxWidth: 250, minWidth: 250 },
    {
      field: "Edit",
      renderCell: (cellValues: any) => {
        return <Link href={{
          pathname: '/admin/users/[id]',
          query: {
            user: cellValues.row.id,
          }
        }}
          as={`/admin/users/${cellValues.row.id}`}
          passHref
        >

          <Button
            variant="contained"
            color="primary"
          >
            Edit
          </Button>

        </Link>
      }
    },
    {
      field: "Delete",
      renderCell: (cellValues: any) => {
        return <Button
          variant="contained"
          color="error"
          onClick={(e) => deleteUser(cellValues.row.id, e)}
        >
          Delete
        </Button>

      }
    }
  ]

  const dataParser = (dataToParse: any) => {

    const userData: { id: any; email: any; isAdmin: any; createdAt: any; updatedAt: any; }[] = [];

    dataToParse.map((data: any) => {
      let parserObj = {
        id: data._id,
        email: data.email,
        isAdmin: data.isAdmin === true ? 'Yes' : 'No',
        createdAt: new Date(data.createdAt).toLocaleDateString('en-US', { timeZone: "Europe/Sofia" }),
        updatedAt: new Date(data.updatedAt).toLocaleString("en-EUNE", { timeZone: "Europe/Sofia", dateStyle: 'medium', timeStyle: 'medium' }),
      }

      userData.push(parserObj);
    })

    return userData;

  }


  let theRightData = dataParser(usersData.users.Users);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ minWidth: '150px' }}>
        <AdminTabs name="Users" />
      </div>

      <div style={{ display: 'flex', width: '100%' }}>
        <div className={styles.contentContainer}>
          <DataGrid
            rows={theRightData}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}
            checkboxSelection
          />

        </div>
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
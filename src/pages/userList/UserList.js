import React, { useState } from 'react';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from "react-router-dom";



const rows = [
    {
        id: 1,
        username: 'Jon Snow',
        avatar: "https://i.ibb.co/xMbCmH1/team-img-4.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 2,
        username: 'Jon Snow',
        avatar: "https://i.ibb.co/xMbCmH1/team-img-4.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 3,
        username: 'Jon Snow',
        avatar: "https://i.ibb.co/xMbCmH1/team-img-4.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 4,
        username: 'Jon Snow',
        avatar: "https://i.ibb.co/xMbCmH1/team-img-4.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 5,
        username: 'Jon Snow',
        avatar: "https://i.ibb.co/xMbCmH1/team-img-4.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 6,
        username: 'Jon Snow',
        avatar: "https://i.ibb.co/xMbCmH1/team-img-4.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 7,
        username: 'Jon Snow',
        avatar: "https://i.ibb.co/xMbCmH1/team-img-4.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 8,
        username: 'Jon Snow',
        avatar: "https://i.ibb.co/xMbCmH1/team-img-4.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 9,
        username: 'Jon Snow',
        avatar: "https://i.ibb.co/xMbCmH1/team-img-4.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00"
    }

];

const UserList = () => {
    const [data, setData] = useState(rows);

    const handleDelete = id => {
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user',
            headerName: 'User',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userLIstImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
            editable: true,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
            editable: true,
        },
        {
            field: "action",
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <>

                        <Link to={"/user/" + params.row.id}><button className="userListEdit">Edit</button></Link>
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            }
        }

    ];
    return (
        <div className="userList">

            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />


        </div>
    );
};

export default UserList;
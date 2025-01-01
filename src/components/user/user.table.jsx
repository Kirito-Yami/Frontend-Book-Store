import {Space, Table, Tag} from 'antd';
import {useState} from "react";

const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([
        { _id: "Kirito", fullName: 25, email: "hn" },
        { _id: "Minh Đức", fullName: 25, email: "hcm" }
    ]);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }
    ];
    return (
        <Table columns={columns} dataSource={dataUsers}/>
    )
}
export default UserTable;
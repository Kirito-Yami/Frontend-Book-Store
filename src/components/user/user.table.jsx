import {Popconfirm, Table, notification, Button} from 'antd';
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import UserUpdate from "./user.update.jsx";
import {useCallback, useEffect, useState} from 'react';
import UserDetail from "./user.detail.jsx";
import {deleteUserAPI, fetchAllUserAPI} from "../../services/api.service.js";
import UserForm from "./user.form.jsx";

const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataDetail, setDataDetail] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [loadingTable, setLoadingTable] = useState(false);

    const loadUser = useCallback(async () => {
        setLoadingTable(true);
        const res = await fetchAllUserAPI(current, pageSize);
        if (res.data) {
            setDataUsers(res.data.result);
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total);
        }
        setLoadingTable(false);
    }, [current, pageSize]);

    useEffect(() => {
        loadUser();
    }, [current, pageSize]);

    const columns = [
        {
            title: "STT",
            render: (_, record, index) => {
                return (
                    <>{(index + 1) + (current - 1) * pageSize}</>
                )
            }
        },
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a
                        href='#'
                        onClick={() => {
                            setDataDetail(record);
                            setIsDetailOpen(true);
                        }}
                    >{record._id}</a>
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{display: "flex", gap: "20px"}}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true);
                        }}
                        style={{cursor: "pointer", color: "orange"}}
                    />
                    <Popconfirm
                        title="Xóa người dùng"
                        description="Bạn chắc chắn xóa user này ?"
                        onConfirm={() => handleDeleteUser(record._id)}
                        okText="Yes"
                        cancelText="No"
                        placement="left"
                    >
                        <DeleteOutlined style={{cursor: "pointer", color: "red"}}/>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    const handleDeleteUser = async (id) => {
        const res = await deleteUserAPI(id);
        if (res.data) {
            notification.success({
                message: "Delete user",
                description: "Xóa user thành công"
            })
            await loadUser();
        } else {
            notification.error({
                message: "Error delete user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const onChange = (pagination, filters, sorter, extra) => {
        // setCurrent, setPageSize
        //nếu thay đổi trang : current
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(+pagination.current) //"5" => 5
            }
        }

        //nếu thay đổi tổng số phần tử : pageSize
        if (pagination && pagination.pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                setPageSize(+pagination.pageSize) //"5" => 5
            }
        }
    };

    return (
        <>
            <div style={{
                margin: "10px 0",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <h3>Table User</h3>
                <Button type="primary" onClick={() => setIsCreateOpen(true)}>Create User</Button>
            </div>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => {
                            return (<div> {range[0]}-{range[1]} trên {total} rows</div>)
                        }
                    }
                }
                onChange={onChange}
                loading={loadingTable}
            />
            <UserForm
                isCreateOpen={isCreateOpen}
                setIsCreateOpen={setIsCreateOpen}
                loadUser={loadUser}
            />
            <UserUpdate
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <UserDetail
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                isDetailOpen={isDetailOpen}
                setIsDetailOpen={setIsDetailOpen}
                loadUser={loadUser}
            />
        </>
    )
}
export default UserTable;
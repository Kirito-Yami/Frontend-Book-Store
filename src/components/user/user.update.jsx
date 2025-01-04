import {useEffect, useState} from "react";
import {Input, notification, Modal, Form} from "antd";
import {updateUserAPI} from "../../services/api.service";

const UserUpdate = (props) => {
    const {isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser} = props;
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);

    //next dataUpdate != prev dataUpdate
    useEffect(() => {
        if (dataUpdate && dataUpdate._id) {
            form.setFieldsValue({
                id: dataUpdate._id,
                fullName: dataUpdate.fullName,
                phone: dataUpdate.phone,
            });
        }
    }, [dataUpdate])

    const handleSubmitBtn = async (values) => {
        const {id, fullName, phone} = values;
        setIsLoading(true);
        const res = await updateUserAPI(id, fullName, phone);
        if (res.data) {
            notification.success({
                message: "Update user",
                description: "Cập nhât thành công"
            })
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
        setIsLoading(false);
    }

    const resetAndCloseModal = () => {
        form.resetFields();
        setIsModalUpdateOpen(false);
        setDataUpdate(null);
    }

    return (
        <Modal
            title="Update a User"
            open={isModalUpdateOpen}
            onOk={() => form.submit()}
            okButtonProps={{
                loading: isLoading,
            }}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"Update"}
        >
            <Form
                form={form}
                onFinish={handleSubmitBtn}
                layout="vertical"
            >
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div>
                        <Form.Item
                            label="Id"
                            name="id"
                        >
                            <Input disabled/>
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            label="Họ Tên"
                            name="fullName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Họ tên không được để trống!',
                                }
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Số điện thoại không được để trống!',
                                }
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </Modal>
    )
}
export default UserUpdate;
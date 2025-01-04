import {Form, Input, InputNumber, Modal, notification} from "antd";
import {useState} from "react";
import {createUserAPI} from "../../services/api.service.js";

const UserForm = (props) => {
    const {isCreateOpen, setIsCreateOpen, loadUser} = props;
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmitBtn = async (values) => {
        const {fullName, email, password, phone} = values;
        setIsLoading(true);
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Tạo user thành công"
            });
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            });
        }
        setIsLoading(false);
    }

    const resetAndCloseModal = () => {
        form.resetFields();
        setIsCreateOpen(false);
    }

    return (
        <Modal
            title="Create User"
            open={isCreateOpen}
            onOk={() => form.submit()}
            okButtonProps={{
                loading: isLoading
            }}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"Create"}
        >
            <Form
                form={form}
                onFinish={handleSubmitBtn}
                layout="vertical"
            >
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div>
                        <Form.Item
                            label="Họ tên"
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
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Email không được để trống!',
                                }
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Mật khẩu không được để trống!',
                                }
                            ]}
                        >
                            <Input.Password/>
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

export default UserForm;
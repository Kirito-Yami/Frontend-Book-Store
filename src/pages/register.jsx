import {Button, Input, Form, notification} from "antd";
import {registerUserAPI} from "../services/api.service.js";
import {useNavigate} from "react-router-dom";

const RegisterPage = ()=>{
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const {fullName, email, password, phone} = values;
        const res = await registerUserAPI(fullName, email, password, phone);
        if(res.data){
            notification.success({
                message: "Register User",
                description: "Đăng ký User thành công"
            });
            navigate("/login");
        }else{
            notification.error({
                message: "Register User",
                description: JSON.stringify(res.message)
            });
        }
    }

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
        >
            <div style={{
                margin: "50px",
            }}>
                <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Phone number"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <div>
                    <Button
                        onClick={() => form.submit()}
                        type="primary">Register</Button>
                </div>
            </div>
        </Form>
    )
}

export default RegisterPage;

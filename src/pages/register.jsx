import {Button, Input, Form, notification, Row, Col} from "antd";
import {registerUserAPI} from "../services/api.service.js";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const {fullName, email, password, phone} = values;
        const res = await registerUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "Register User",
                description: "Đăng ký User thành công"
            });
            navigate("/login");
        } else {
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
            style={{marginTop: "100px"}}
            // onFinishFailed={onFinishFailed}
        >
            <Row justify="center" style={{marginBottom: "50px"}}>
                <Col xs={24} md={8}>
                    <h1>Register</h1>
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={24} md={8}>
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
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={24} md={8}>
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
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={24} md={8}>
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
                        <Input.Password/>
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={24} md={8}>
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
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="center" >
                <Col xs={24} md={8}>
                    <div>
                        <Button
                            onClick={() => form.submit()}
                            type="primary">Register</Button>
                    </div>
                </Col>
            </Row>
        </Form>
    )
}

export default RegisterPage;

import {Button, Input, Form, notification, Row, Col, Divider} from "antd";
import {registerUserAPI} from "../services/api.service.js";
import {Link, useNavigate} from "react-router-dom";
import {ArrowRightOutlined} from "@ant-design/icons";

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

    const onRegister = (event) => {
        if (event.key === "Enter") {
            form.submit();
        }
    }

    return (
        <Row justify={"center"} style={{ marginTop: "150px" }}>
        <Col xs={24} md={16} lg={8}>
            <fieldset style={{
                padding: "15px",
                margin: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px"
            }}>
                <legend style={{fontSize: "20px"}}>Đăng Ký</legend>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Usename không được để trống!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Email không được để trống!',
                            },
                            {
                                type: "email",
                                message: 'Email không đúng định dạng!',
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
                                message: 'Password không được để trống!',
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
                                message: 'Số điện thoại không được để trống!',
                            },
                        ]}
                    >
                        <Input onKeyDown={(event) => onRegister(event)}/>
                    </Form.Item>
                    <Form.Item >
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Button type="primary" onClick={() => form.submit()}>
                                Register
                            </Button>
                            <Link to="/">Go to homepage <ArrowRightOutlined /></Link>
                        </div>
                    </Form.Item>
                </Form>
                <Divider />
                <div style={{ textAlign: "center" }}>
                    Đã có tài khoản? <Link to={"/login"}>Đăng nhập tại đây</Link>
                </div>
            </fieldset>
        </Col>
    </Row>
    )
}

export default RegisterPage;

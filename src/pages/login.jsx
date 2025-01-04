import {ArrowRightOutlined} from "@ant-design/icons";
import {Button, Form, Input, Row, Col, Divider, notification} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {loginUserAPI} from "../services/api.service.js";
import {useContext, useState} from "react";
import {AuthContext} from "../components/context/auth.context.jsx";

const LoginPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { setUser } = useContext(AuthContext);

    const onFinish = async (values) => {
        const {email, password} = values;
        setIsLoading(true);
        const res = await loginUserAPI(email, password);
        if (res.data) {
            notification.success({
                message: "Login User",
                description: "Đăng nhập thành công"
            });
            localStorage.setItem("access_token", res.data.access_token);
            setUser(res.data.user);
            navigate("/users");
        } else {
            notification.error({
                message: "Login User",
                description: JSON.stringify(res.message)
            });
        }
        setIsLoading(false);
    }

    return (
        <Row justify={"center"} style={{marginTop: "200px"}}>
            <Col xs={24} md={16} lg={8}>
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}>
                    <legend style={{fontSize: "20px"}}>Đăng Nhập</legend>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                    >
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
                            <Input/>
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
                            <Input.Password/>
                        </Form.Item>
                        <Form.Item>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Button loading={isLoading} type="primary" onClick={() => form.submit()}>
                                    Login
                                </Button>
                                <Link to="/">Go to homepage <ArrowRightOutlined/></Link>
                            </div>
                        </Form.Item>
                    </Form>
                    <Divider/>
                    <div style={{textAlign: "center"}}>
                        Chưa có tài khoản? <Link to={"/register"}>Đăng ký tại đây</Link>
                    </div>
                </fieldset>
            </Col>
        </Row>
    )
}

export default LoginPage;
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {
    AliwangwangOutlined,
    AuditOutlined,
    HomeOutlined,
    LoginOutlined,
    SettingOutlined,
    UsergroupAddOutlined
} from "@ant-design/icons";
import {Menu, notification} from "antd";
import {AuthContext} from "../context/auth.context.jsx";
import {logoutUserAPI} from "../../services/api.service.js";

const Header = () => {
    const [current, setCurrent] = useState('');

    const navigate = useNavigate();

    const {user, setUser} = useContext(AuthContext);

    console.log("Check User", user);

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const handleLogout = async () => {
        const res = await logoutUserAPI();
        if (res.data) {
            localStorage.removeItem("access_token");
            setUser({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: ""
            });
            notification.success({
                message: "Logout User",
                description: "Đăng xuất người dùng thành công",
            })
            navigate("/");
        }
    }
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined/>,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined/>
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <AuditOutlined/>,
        },
        ...(!user.id ? [{
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined/>,
        }] : []),
        ...(user.id ? [{
            label: `Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined/>,
            children: [
                {
                    label: <span onClick={() => handleLogout()}>Đăng xuất</span>,
                    key: 'logout',
                },
            ],
        }] : []),
    ];

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    )
}
export default Header;
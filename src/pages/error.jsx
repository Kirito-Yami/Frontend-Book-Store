import {Link} from "react-router-dom";
import {Button, Result} from 'antd';

const ErrorPage = () => {
    return (
        <Result
            status="404"
            title="Ối rồi ôi!"
            subTitle={"Xin lỗi, trang bạn truy cập không tồn tại."}
            extra={
                <Button type="primary">
                    <Link to="/">
                        <span>Quay về trang chủ</span>
                    </Link>
                </Button>
            }
            style={{
                marginTop: 120,
            }}
        />
    );
}

const AuthorizedPage = () => {
    return (
        <Result
            status="403"
            title="Ối rồi ôi!"
            subTitle={"Xin lỗi, bạn không được phép truy cập trang này."}
            extra={
                <Button type="primary">
                    <Link to="/login">
                        <span>Đăng nhập</span>
                    </Link>
                </Button>
            }
            style={{
                marginTop: 100,
            }}
        />
    );
}

export {ErrorPage, AuthorizedPage};
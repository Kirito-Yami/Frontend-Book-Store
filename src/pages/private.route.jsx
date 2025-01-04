import {useContext} from "react";
import {AuthContext} from "../components/context/auth.context.jsx";
import {AuthorizedPage} from "./error.jsx";

const PrivateRoute = (props) => {
    const {user} = useContext(AuthContext);
    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )
    } else {
        return (
            <AuthorizedPage/>
        )
    }
}
export default PrivateRoute;
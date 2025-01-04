import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";
import {Outlet} from "react-router-dom";
import {getAccountAPI} from "./services/api.service.js";
import {useContext, useEffect} from "react";
import {AuthContext} from "./components/context/auth.context.jsx";

const App = () => {
    const {setUser} = useContext(AuthContext);

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const delay = (milSeconds) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, milSeconds);
        })
    }

    const fetchUserInfo = async () => {
        const res = await getAccountAPI();
        await delay(3000);
        if (res.data) {
            setUser(res.data.user);
        }
    }

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App

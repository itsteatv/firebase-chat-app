import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

function PrivateRoute({ children }) {
    const currentUser = useSelector((state) => state.user.currentUser);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    console.log(currentUser);

    useEffect(() => {
        const delay = 1000;

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, delay);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (!currentUser) {
        return navigate("/")
    }

    return children;
}

export default PrivateRoute

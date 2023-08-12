import { BiLogOutCircle } from "react-icons/bi"
import { VscGithubAlt } from "react-icons/vsc"
import { clearCurrentUser, logoutAsync } from "../store/Auth"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";

function Navbar() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser);
    console.log(currentUser);

    const handleLogout = async function () {
        try {
            await dispatch(logoutAsync());
            dispatch(clearCurrentUser());
            console.log("LOGOUT", currentUser);
        }
        catch (error) {
            toast.error("An error occurred" + error.message);
        }
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            </div>
            <div className="navbar-center">
                <div className="btn btn-ghost normal-case text-xl">{currentUser ? `${"Hello "+ currentUser.displayName}` : "Firebase Chat App"}</div>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <a href="https://github.com/itsteatv/firebase-chat-app" target="_blank" rel="noreferrer">
                        <VscGithubAlt className="h-5 w-5" />
                    </a>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        {currentUser ? <BiLogOutCircle onClick={handleLogout} className="h-5 w-5" /> : ""}
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Navbar

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react"
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { db } from "../firebase";
import Alert from "./Alert";

function SendMessage() {
    const [value, setValue] = useState("");
    const currentUser = useSelector((state) => state.user.currentUser);

    const handleSendMessage = async function (event) {
        event.preventDefault();

        if (value.trim() === "") {
            <Alert />
        }

        try {
            const { uid, displayName, photoURL } = currentUser;
            await addDoc(collection(db, "messages"), {
                text: value,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid
            })
        }
        catch (error) {
            toast.error("An error occurred" + error.message);
        }

        setValue("");
        console.log(value);
    }

    const sendMessageOnChange = function (event) {
        setValue(event.target.value);
    }

    return (
        <div className="fixed bottom-0 w-full mb-3">
            <form className="mx-auto max-w-4xl" onSubmit={handleSendMessage}>
                <label htmlFor="chat" className="sr-only">Your message</label>
                <div className="flex items-center px-3 rounded-lg dark:bg-gray-700">
                    <input value={value} onChange={sendMessageOnChange} id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm text-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></input>
                    <button disabled={!value} type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed">
                        <svg className="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                        </svg>
                        <span className="sr-only">Send message</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage;

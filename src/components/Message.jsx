import { useSelector } from "react-redux";

function Message({ message }) {

    function formatTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    }

    const currentUser = useSelector((state) => state.user.currentUser);
    const formattedTime = message.createdAt && message.createdAt.seconds
        ? formatTimeFromSeconds(message.createdAt.seconds)
        : ''; console.log(message);

    return (
        <div>
            <div className={`chat ${message.uid === currentUser.uid ? "chat-end mb-16" : "chat-start mb-16"}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={message.avatar} />
                    </div>
                </div>
                <div className="chat-header">
                    {message.name}
                    <time className="text-xs opacity-50">{formattedTime}</time>
                </div>
                <div className="chat-bubble">{message.text}</div>
            </div>
        </div>
    )
}

export default Message

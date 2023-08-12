import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { collection, query, limit, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";

function ChatBox() {
  const messagesEndRef = useRef();
  const [messages, setMessages] = useState([]);
  console.log(messages);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  };

  useEffect(scrollToBottom, [messages])

  useEffect(() => {
    const q = query(collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setMessages(messages);
    });

    return () => unsubscribe;
  }, [])

  return (
    <div className="mx-6">
      {messages.map((message) => (
        <div key={message.id}>
          <Message key={message.id} message={message} />
        </div>
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  )
}

export default ChatBox

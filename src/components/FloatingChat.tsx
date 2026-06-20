import { useNavigate } from "react-router-dom";

const FloatingChat = () => {
    const navigate = useNavigate();
    return(
        <button
        title="Ask AI about me"
        onClick={() => navigate("/chat")}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center bg-background border shadow-lg rounded-full  text-white hover:scale-105 transition"
        >
            <img src="/CatTyping.svg"/>
        </button>
    )
}

export default FloatingChat;
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const FloatingChat = () => {
  const navigate = useNavigate();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const hasSeenHint = localStorage.getItem("chat_hint_seen");

    if (!hasSeenHint) {
      setShowHint(true);

      const timer = setTimeout(() => {
        setShowHint(false);
        localStorage.setItem("chat_hint_seen", "true");
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      
      {/* Tooltip */}
      {showHint && (
        <div className="bg-white border px-3 py-2 text-sm font-semibold animate-bounce">
          Ask AI about me
        </div>
      )}

      {/* Button */}
      <button
        title="Ask AI about me"
        onClick={() => navigate("/chat")}
        className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center bg-background border shadow-lg rounded-full hover:scale-105 transition"
      >
        <img src="/CatTyping.svg" />
      </button>
    </div>
  );
};

export default FloatingChat;
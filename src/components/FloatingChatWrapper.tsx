import { useLocation } from "react-router-dom";
import FloatingChat from "./FloatingChat";

const FloatingChatWrapper = () => {
  const location = useLocation();

  if (location.pathname === "/chat") {
    return null;
  }

  return <FloatingChat />;
};

export default FloatingChatWrapper;
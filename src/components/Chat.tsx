import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import { BiArrowBack } from "react-icons/bi";

export default function Chat() {
    const ref = useReveal<HTMLElement>();
    return (
        <section className="py-20 p-2 section space-y-4" ref={ref}>
            <Link to={"/"} className="flex items-center gap-2 hover:font-semibold"><BiArrowBack />Go Back</Link>

            <iframe
                src="https://personal-ai-chatbot-alpha.vercel.app"
                title="AI Chat"
                className="w-full h-[90vh] rounded-xl border"
            />
        </section>
    );
}
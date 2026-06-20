import { BsArrowRight } from "react-icons/bs"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { FaReact } from "react-icons/fa6";
import { SiFirebase, SiMarkdown, SiRedux, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Link } from "react-router-dom"

export const projects = [
  {
    id: "ai-chatbot",
    title: "🤖 Personal AI Chatbot",
    description: "An AI-powered portfolio chatbot built with Next.js, GroqAI, TypeScript, and Tailwind CSS that allows visitors to learn about my background, projects, and skills through natural conversations.",
    detailedDescription: "This project combines a modern portfolio with an AI assistant to create a more engaging way for visitors to explore my work. Instead of navigating multiple pages, users can ask questions about my experience, technical skills, projects, and contact information in natural language. The application integrates the OpenAI API through Next.js API routes, renders Markdown responses, persists chat history with local storage, supports responsive layouts across devices, and includes features such as suggested prompts, typing indicators, and chat history management.",
    liveLink: "https://personal-ai-chatbot-alpha.vercel.app/",
    codeLink: "https://github.com/PhomeMyintMo/personal-ai-chatbot",
    techStack: [
      {
        name: "Next.js", icon: <img src="/nextdotjs.svg" className="h-4 w-4" />,
        color: "text-[#10A37F]",
      },
      {
        name: "TypeScript", icon: <SiTypescript />,
        color: "text-[#3178C6]",
      },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#06B6D4]", },
      { name: "GroqAI", icon: <img src="/groq.svg" />, color: "text-[#10A37F]", },
      { name: "React Markdown", icon: <SiMarkdown />, color: "text-gray-600 dark:text-gray-300", },],
    images: ["/ChatBot/AIChat.png"],
    features: [
      "AI-powered conversational portfolio assistant",
      "GroqAI API integration with Next.js API Routes",
      "Markdown rendering for formatted responses",
      "Persistent chat history using localStorage",
      "Responsive design optimized for desktop and mobile",
      "Modern UI built with Tailwind CSS and shadcn/ui",]
  },
  {
    id: "content-management",
    title: "📊 Content Management Portal",
    description: "A web portal for content creators to manage and track their content efficiently.",
    detailedDescription: (
      <>
        A content management portal developed for <a href="" className="text-blue-600 font-semibold">MTG</a> that enables content creators to organize tasks, monitor content progress, receive real-time notifications, and streamline their workflow through an intuitive and responsive interface.
      </>
    ),
    liveLink: "#",
    codeLink: "#",
    techStack: [
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "text-[#3178C6]",
      },
      {
        name: "React",
        icon: <FaReact />,
        color: "text-[#61DAFB]",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "text-[#06B6D4]",
      },
      {
        name: "Shadcn UI",
        icon: <SiShadcnui />,
        color: "text-black dark:text-white",
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
        color: "text-[#FFCA28]",
      },
      {
        name: "Redux",
        icon: <SiRedux />,
        color: "text-[#764ABC]",
      },
    ],
    images: ["/portalOne/WholePage.png", "/portalOne/Theme.png", "/portalOne/ParamsUrl.png", "/portalOne/Noti.png", "/portalOne/Language.png"],
    features: [
      "🔔 Real-time notifications powered by Firebase",
      "🌐 Multi-language support (i18n)",
      "☀️🌙 Light and dark theme switching",
      "💾 Preserves page, filters, and pagination state when navigating between list, detail, create, and edit pages"]
  },
  {
    id: "ecommerce-admin-website",
    title: "🛍️ E-commerce Website",
    description: "A full-stack e-commerce platform with customer and admin dashboards for product management, and shopping.",
    detailedDescription: "A full-stack e-commerce application featuring separate customer and admin interfaces. Customers can browse products, search by categories, add items to their cart, save products to favorites, and place orders (checkout/payment integration is not yet implemented). The admin dashboard provides complete inventory management with CRUD operations for products and categories, image uploads, and an intuitive interface for managing the store.",
    liveLink: "#",
    codeLink: "#",
    techStack: [{
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "text-[#3178C6]",
    }, {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "text-[#3178C6]",
    }],
    images: ["/images/admin-dashboard.png"],
    features: ["Real-time revenue stream tracking via WebSockets", "Secure JWT authentication & role authorization", "Drag-and-drop category hierarchy sorting"]
  },
  {
    id: "ecommerce-website",
    title: "E-commerce Website",
    description: "A full-stack E-commerce website built with React. A clean, simple, and easy to shop experience.",
    detailedDescription: "A customer-facing storefront built alongside the Admin Portal. It implements atomic cart operations, persistent local storage checkouts, and seamless payment gateway simulations.",
    liveLink: "#",
    codeLink: "#",
    techStack: [{
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "text-[#3178C6]",
    }, {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "text-[#3178C6]",
    }],
    images: ["/images/store-front.png", "/images/store-cart.png"],
    features: ["Instant local cart sync optimizations", "Elastic product search filter architecture", "Single-step multi-item checkout mock pipelines"]
  },
  
];

const Projects = () => {
  const displayProjects = projects.slice(0, 3);
  return (
    <section id="projects" className="bg-background py-20">
      <div className="max-w-5xl mx-auto flex flex-col">
        <h2 className="text-3xl font-bold mb-10 text-center">Selected Works</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 shadow-[var(--shadow-brutal)] border text-start hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>


              <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t">
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      Live <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      Code <FaGithub />
                    </a>
                  )}
                </div>

                <Link
                  to={`/projects`}
                  state={{ initialProject: index }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold border shadow-[var(--shadow-brutal)] hover:bg-primary hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none uppercase text-xs"
                >
                  View <BsArrowRight className="text-base" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold border shadow-[var(--shadow-brutal)] bg-primary hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none uppercase tracking-wider"
          >
            View all projects <BsArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
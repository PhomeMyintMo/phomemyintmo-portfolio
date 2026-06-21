import { useState } from "react";
import { projects } from "../sections/Projects";
import { Link, useLocation } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import useReveal from "../hooks/useReveal";

export const AllProjects = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.state?.initialProject ?? 0);
    const [currentImage, setCurrentImage] = useState(0);
    const ref = useReveal<HTMLElement>();

    const project = projects[activeTab];

    const handleTabChange = (index: number) => {
        setActiveTab(index);
        setCurrentImage(0);
    }

    // const nextImage = () => {
    //     setCurrentImage((prev) => prev === project.images.length - 1 ? 0 : prev + 1)
    // }

    // const prevImage = () => {
    //     setCurrentImage((prev) => prev === 0 ? project.images.length - 1 : prev - 1)
    // }
    return (
        <section ref={ref} className="section py-20 p-20">
            <div className="space-y-4">
                <Link to={"/"} className="flex items-center gap-2 hover:font-semibold"><BiArrowBack />Go Back</Link>

                <h1 className="text-2xl sm:text-3xl font-bold">
                    Projects Showcase
                </h1>

                {/* Tabs */}
                <div className="flex justify-center flex-wrap gap-3 border-b pb-4">
                    {projects.map((project, index) => (
                        <button
                            key={project.id}
                            onClick={() => handleTabChange(index)}
                            className={`shrink-0 px-3 py-1 text-sm font-bold border transition-all
              ${activeTab === index
                                    ? "bg-primary shadow-[var(--shadow-brutal)]"
                                    : "bg-background hover:bg-primary/20"
                                }`}
                        >
                            #{(index + 1).toString().padStart(2, "0")}
                        </button>
                    ))}
                </div>

                {/* Project Content */}
                <div className="space-y-8">

                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-left">
                            {project.title}
                        </h2>

                        <p className="mt-4 text-left">
                            {project.detailedDescription}
                        </p>
                    </div>

                    {/* Images */}
                    <div className="relative mt-8">
                        <div className="flex justify-center">
                            <div className="overflow-hidden max-w-lg p-4 bg-secondary/20 border">
                                <img
                                    src={project.images[currentImage]}
                                    alt={project.title}
                                    className="w-full aspect-video object-contain"
                                />
                            </div>
                        </div>
                        <div>
                            {project.images.length > 1 && (
                                <div className="flex justify-center gap-4 mt-4">
                                    {project.images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImage(index)}
                                            className={`w-6 h-3 transition-all border ${currentImage === index
                                                ? "bg-primary scale-110"
                                                : "bg-background"
                                                }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* {
                            project.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 border bg-background px-3 py-2 shadow-[var(--shadow-brutal)]"
                                    >
                                        ←
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 border bg-background px-3 py-2 shadow-[var(--shadow-brutal)]"

                                    >
                                        →
                                    </button>
                                </>
                            )
                        } */}


                    </div>


                    {/* Features */}
                    <div className="text-left">
                        <h3 className="font-bold text-xl mb-4">
                            Features
                        </h3>

                        <ul className="space-y-2 flex flex-col">
                            {project.features.map((feature, index) => (
                                <li key={index}>
                                    ⋆ {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="text-justify">
                        <div className="mb-2">
                            <h3 className="font-bold text-xl mb-4">
                                Tech Stack
                            </h3>
                            <span className="font-semibold">⋆ Frontend</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <div key={tech.name} className="flex gap-2 items-center border px-2 p-1">
                                    <span className={tech.color}>{tech.icon}</span>
                                    {tech.name}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
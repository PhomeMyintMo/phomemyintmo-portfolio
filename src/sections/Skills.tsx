import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiReactquery, SiRedux, SiPostgresql, SiTypescript } from "react-icons/si"
import { TbBrandFramerMotion } from "react-icons/tb"
import useReveal from "../hooks/useReveal"
export const skills = [
  { name: "React", icon: <FaReact />, color: "text-[#61DAFB]" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
  { name: "React Query", icon: <SiReactquery />, color: "text-[#FF4154]" },
  { name: "Redux", icon: <SiRedux />, color: "text-[#764ABC]" },
  { name: "Node", icon: <FaNodeJs />, color: "text-[#5FA04E]" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]" },
  { name: "Framer Motion", icon: <TbBrandFramerMotion />, color: "text-[#0055FF]" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#4169E1]" }
]

const Skills = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="skills" className="section">
      <h2 className="text-3xl font-bold mb-10 text-center">Tech Stacks</h2>

      <div className="space-y-6">

      <div className="flex flex-wrap justify-left gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex max-w-sm items-center gap-1 p-1 px-2 bg-background shadow-[var(--shadow-brutal)] border"
          >
            <span className={` ${skill.color}`}>{skill.icon}</span>
            <p className="font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Skills
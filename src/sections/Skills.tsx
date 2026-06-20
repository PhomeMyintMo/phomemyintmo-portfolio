import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiReactquery, SiRedux, SiPostgresql, SiTypescript } from "react-icons/si"
import { TbBrandFramerMotion } from "react-icons/tb"
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
  return (
    <section id="skills" className="bg-background text-color p-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Tech Stacks</h2>

      <div className="max-w-3xl mx-auto space-y-6">

      <div className="flex flex-wrap items-center justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex max-w-sm items-center gap-3 p-3 bg-background shadow-[var(--shadow-brutal)] border"
          >
            <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Skills
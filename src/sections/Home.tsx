
import { LiaFileDownloadSolid } from "react-icons/lia"
import useReveal from "../hooks/useReveal"

const Home = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id="home"
      className=" bg-background space-y-4 flex flex-col justify-center text-center py-24"
    >

      <div className="text-left">
        <h5 className="font-semibold">Hello! I'm <span className="text-secondary font-bold text-lg sm:text-xl md:text-2xl"> Phome Myint Mo</span></h5>
        <h2 className="text-sm sm:text-lg md:text-xl font-semibold italic">Frontend Developer</h2>
        <p className="text-lg">
          I build modern web applications with a focus on clean design, usability, and
          performance.I love exploring new technologies, experimenting with design
          trends, and crafting digital experiences that are both useful, functional and enjoyable.
        </p>
      </div>
      <div className="flex gap-4">
        <a
          href="/CV/PhomeMyintMo-CV.pdf"
          download
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold border shadow-[var(--shadow-brutal)] bg-primary hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none uppercase tracking-wider"
        >
          Download CV
          <LiaFileDownloadSolid size={18} />
        </a>
      </div>
    </section>
  )
}

export default Home
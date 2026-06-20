
import { LiaFileDownloadSolid } from "react-icons/lia"

const Home = () => {
  return (
    <section
      id="home"
      className="bg-background space-y-4 flex flex-col justify-center text-center py-56 p-6 md:px-20 lg:px-40"
    >
   
      <div className="text-left">
        <h5 className="font-semibold">Hello! I'm <span className="text-secondary font-bold text-lg sm:text-xl md:text-2xl"> Phome Myint Mo</span></h5>
        {/* <h3 className=" font-semibold"></h3> */}
        <h2 className="text-sm sm:text-lg md:text-xl font-semibold italic">Frontend Developer</h2>
        <p className="text-lg">
          I build modern web applications with a focus on clean design, usability, and
          performance.I love exploring new technologies, experimenting with design
          trends, and crafting digital experiences that are both useful, functional and enjoyable.
        </p>
      </div>
      <div className="flex gap-4">
        <button className="bg-primary px-4 py-2 border shadow-[var(--shadow-brutal)] flex gap-2 items-center">Download CV<span><LiaFileDownloadSolid size={18} /></span></button>
      </div>
    </section>
  )
}

export default Home
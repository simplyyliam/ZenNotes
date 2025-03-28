import { useEffect, useRef, useState } from "react"
import Nav from "../Components/Nav"
import NoteTemplate from "../Components/NoteTemplate"
import Sidebar from "../Components/Sidebar"

function MainPage() {
  const noteSectionRef = useRef(null)
  const sideBarRef = useRef(null)

  const [sidebar, setSideBar] = useState(true)
  
  const ZenMode = () => {
    setSideBar((prev) => !prev) 
  }


  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen p-4 bg-gradient-to-br from-[#181818] to-white">
      <Nav windowSize={ZenMode} />
      <div className="flex w-full h-full items-center gap-4">
        {sidebar && (
          <div ref={sideBarRef} className=" h-full">
            <Sidebar />
          </div>
        )}
        <div ref={noteSectionRef} className="notes w-full h-full">
          <NoteTemplate />
        </div>
      </div>
    </div>
  );
}

export default MainPage
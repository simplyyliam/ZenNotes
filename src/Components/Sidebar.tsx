import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Add = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
<path d="M11.2502 6C11.2502 5.58579 11.586 5.25 12.0002 5.25C12.4145 5.25 12.7502 5.58579 12.7502 6V11.2502H18.0007C18.4149 11.2502 18.7507 11.586 18.7507 12.0002C18.7507 12.4145 18.4149 12.7502 18.0007 12.7502H12.7502V18.0007C12.7502 18.4149 12.4145 18.7507 12.0002 18.7507C11.586 18.7507 11.2502 18.4149 11.2502 18.0007V12.7502H6C5.58579 12.7502 5.25 12.4145 5.25 12.0002C5.25 11.586 5.58579 11.2502 6 11.2502H11.2502V6Z" fill="#ffffff"/>
</svg>


function Sidebar() {

  const [showOptions, setShowOptions] = useState(false)
  const optionsRef = useRef(null)
  const buttonRef = useRef(null)

  const moreOptions = () => {
    setShowOptions((prev) => !prev);

  };

  
  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setShowOptions(false); // Close menu
      }
    };

    if (showOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOptions]);

  
  useEffect(() => {
    if (showOptions) {
      gsap.to(optionsRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "expo.out",
      });
    } else {
      gsap.to(optionsRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: "expo.in",
      });
    }
  }, [showOptions]);

  //Adding the Notes

  const [createNote, setCreateNote] = useState([])
  const noteRef = useRef(null)
  const searchRef = useRef(null)
  const noteSectionref = useRef(null)

  const CreateNote = () => {
    setCreateNote((prevNotes) => [...prevNotes, []]);
  }

  const findNote = () => {

  }


  return (
    <div className="flex flex-col items-center gap-4 h-full p-2 bg-[#181818]/50 rounded-2xl">
      <form onSubmit={findNote}>
        <div className="flex items-center gap-3 p-3 rounded-xl w-[246px] bg-[#2c2c2c]/10 text-white text-[13px]">
          <div className="relative w-[20px] h-[20px]">
            <img src="/Search.png" alt="Search Icon" />
          </div>
          <input
            ref={searchRef}
            type="text"
            placeholder="Find Note"
            className="focus:outline-none"
          />
        </div>
      </form>

      <div className="flex items-center gap-4 px-4 h-[10%] w-full relative">
        <div className="flex gap-3 flex-auto">
          <h1 className={`text-white`}>Work</h1>
          <h1 className={`text-white/50`}>Design</h1>
        </div>
        <button
          onClick={moreOptions}
          ref={buttonRef}
          className="w-[28px] h-[28px] flex items-center justify-center cursor-pointer hover:bg-[#181818]/50 rounded-lg transition ease-linear"
        >
          {Add}
        </button>

        {showOptions && (
          <div
            ref={optionsRef}
            className="flex flex-col gap-2 items-center justify-center absolute top-15 left-32 z-1 p-2 w-[11em] h-[7em] rounded-2xl bg-black opacity-0 scale-0"
          >
            <button className="flex items-center w-full p-3 cursor-pointer rounded-lg hover:bg-[#ffffff]/25 transition ease-linear text-white text-[13px]">
              New workspace
            </button>
            <button
              onClick={CreateNote}
              className="flex items-center w-full p-3 cursor-pointer rounded-lg  hover:bg-[#ffffff]/25 transition ease-linear text-white text-[13px]"
            >
              New Note
            </button>
          </div>
        )}

        <span className="w-4 h-1.5 bg-white rounded-2xl absolute bottom-3 left-7 "></span>
      </div>

      <div
        ref={noteSectionref}
        className="flex flex-col h-full w-full p-4 overflow-hidden"
      >
        {/* Active and inactive notes create a component for this*/}
        <div className="overflow-auto h-[35em] space-y-4">
          {createNote.map((note, Index) => (
            <button
              key={Index}
              className="flex items-center w-full p-3 cursor-pointer rounded-xl bg-[#010101] text-white text-[13px]"
            >
              <input
                ref={noteRef}
                type="text"
                placeholder={(note, "Untitled")}
                className="focus:outline-none"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar


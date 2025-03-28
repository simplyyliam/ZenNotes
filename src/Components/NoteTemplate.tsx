


function NoteTemplate() {
  return (
    <div className=" flex flex-col w-full h-full p-10 bg-[#181818]/50 rounded-2xl gap-8 ">
        <div className="flex items-center">
            <h1 className="text-3xl text-white flex-auto">Note #1</h1>

            <div className="flex gap-3 items-center justify-center">
                <div className="flex items-center justify-center relative w-[28px] h-[28px] rounded-lg hover:bg-[#2c2c2c]/50 transition ease-linear">
                    <img src="/Attatch.png" alt="" />
                </div>
                <div className="flex items-center justify-center relative w-[28px] h-[28px] rounded-lg hover:bg-[#2c2c2c]/50 transition ease-linear">
                    <img src="/Text.png" alt="" />
                </div>
                <div className="flex items-center justify-center relative w-[28px] h-[28px] rounded-lg hover:bg-[#2c2c2c]/50 transition ease-linear">
                    <img src="/Italics.png" alt="" />
                </div>
                <div className="flex items-center justify-center relative w-[28px] h-[28px] rounded-lg hover:bg-[#2c2c2c]/50 transition ease-linear">
                    <img src="/Underline.png" alt="" />
                </div>
                <div className="flex items-center justify-center relative w-[28px] h-[28px] rounded-lg hover:bg-[#2c2c2c]/50 transition ease-linear">
                    <img src="/Bold.png" alt="" />
                </div>
            </div>
        </div>

        <textarea name="" id="" placeholder="Type Here..." className="w-full h-full focus:outline-none text-white text-sm"></textarea>
    </div>
  )
}

export default NoteTemplate
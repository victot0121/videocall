import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [RoomCode, setRoomCode] = useState();


  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault(); 

    navigate(`/room/${RoomCode}`);
  };

  return (
    <div >
      <form action="" onSubmit={submit} className="text-white md:pt-12 flex  
      flex-col items-center justify-center">
        <label htmlFor=" ">Please enter your code</label>
        <div>
          <input
            type="text"
            required
            className="py-1.5 md:py-2 px-4 rounded-full w-[30rem]
             mt-2 text-black md:mt-6 outline-0 border-b-4 border-black"
            placeholder="Enter the full details please"
            value={RoomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
        </div>
        <button type="submit"  className=" bg-blue-500 hover:bg-blue-400 duration-100
         ease-out font-bold w-[5rem] md:w-[7rem] rounded-full py-[5px] md:py-[7px] mt-2 md:mt-4 "
            >Submit</button> 
      </form>
    </div>
  );
}

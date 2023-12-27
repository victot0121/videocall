import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [RoomCode, setRoomCode] = useState();

  console.log(RoomCode);

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault(); // Fix typo in this line

    // Assuming you want to navigate to a route like '/Room.jsx/:RoomCode'
    navigate(`/Room.jsx/${RoomCode}`);
  };

  return (
    <div>
      <form action="" onSubmit={submit}>
        <label htmlFor=" ">Please enter your code</label>
        <div>
          <input
            type="text"
            required
            placeholder="Enter the full details please"
            value={RoomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button> 
      </form>
    </div>
  );
}

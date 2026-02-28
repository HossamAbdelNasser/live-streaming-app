import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [role, setRole] = useState("Audience");

  const navigate = useNavigate();
  const navigateToRoom = () => {
    navigate(`/room/${roomId}`, {
      state: { name: name, role: role },
    });
  };

  return (
    <div className="Home">
      <h1>Join a room</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Your ID"
        onChange={(e) => setRoomId(e.target.value)}
      />
      <div>
        <label htmlFor="Host">
          <input
            type="Radio"
            value={"Host"}
            checked={role === "Host"}
            onChange={(e) => setRole(e.target.value)}
          />
          Host
        </label>

        <label htmlFor="Audience">
          <input
            type="Radio"
            value={"Audience"}
            checked={role === "Audience"}
            onChange={(e) => setRole(e.target.value)}
          />
          Audience
        </label>
      </div>
      <button onClick={navigateToRoom}>Join Room</button>
    </div>
  );
}

export default Home;

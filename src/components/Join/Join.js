import { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = (props) => {
  const [name, setName] = useState();
  const [room, setRoom] = useState();

  return (
    <div className="join-outer-container">
      <div className="join-inner-container">
        <h1 className="heading">Join</h1>
        <div>
          <input
            className="join-input"
            placeholder="Enter Name"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            className="join-input mt-20"
            placeholder="Enter Room"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={{
            pathname: `/chat`,
            state: { name: name, room: room },
          }}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;

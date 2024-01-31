import React from "react";
import "../Styles/Plague.css";
import ProjectBar from "../Components/ProjectBar";
import Grid from "@mui/material/Grid";
import AssetFrame from "../Components/AssetFrame";

import PlagueMoving from "../Images/PlagueMoving.gif";
import batSpin from "../Images/BatSpin.gif";
import eyeballSpin from "../Images/eyeballSpin.gif";

function Plague(props) {
  return (
    <React.Fragment>
      <ProjectBar />

      <div className="PlagueInfo">
              <h4>Plague Run</h4>
              <p>
              IPlague run is a time based 2D platformer where your main goal is to run, jump, and 
              climb through obstacles while trying to out run a wall of death. making it to the 
              end is one thing but you can always get there faster. This game was an older project 
              i contributed to, and i gained a lot of experience importing assests into unit, and 
              making the frames line up in game.
              </p>
            </div>

      <div className="Frames">

          <AssetFrame
            ImageURL="https://i.postimg.cc/Z586P7KY/Plague-Move.png"
            gifImage={PlagueMoving}
            Text1="Plague Run"
            Text2="
            Plague Idle
            For my character design, I used another character i made as a reference as I felt comfortable 
            with his shape and resolution. with Plague, I added more fluid bits to his motions"
            />

          <AssetFrame
            ImageURL="https://i.postimg.cc/cJTY2vnV/eyeball.png"
            gifImage={eyeballSpin}
            Text1="Plague Eye"
            Text2="This is my first Enemy sprite. Plague Eye is a floating eyeball which acts as a 
            stationary obstacle in Plague Runner. When a player collides with him, he'll deal 1 Damage."
            />

          <AssetFrame
            ImageURL="https://i.postimg.cc/R0vKg7N7/bat.png"
            gifImage={batSpin}
            Text1="Plague Fly"
            Text2="Like Plague Eye, Plague Fly is a stationary enemy which acts as an obstacle. Making 
            him was difficult for me as trying to create a seamless loop without making the animation 
            look choppy was a challenge"
            />

      </div>
    </React.Fragment>
  );
}
export default Plague;

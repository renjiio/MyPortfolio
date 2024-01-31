import React from "react";
import "../Styles/Frame.css";

function Frame(props) {
  const [isGif, setIsGif] = React.useState(false);

  return (
    <div className="FrameHead">
      <div
        className="FrameImage"
        onMouseEnter={() => setIsGif(true)}
        onMouseLeave={() => setIsGif(false)}
      >
        <img
          src={isGif ? props.gifImage : props.ImageURL}
          style={{ width: "300px", height: "300px" }} // Set your desired width and height here
        />
      </div>
      <div className="container">
        <h1 className="FrameText1">{props.Text1}</h1>
      </div>
    </div>
  );
}

export default Frame;

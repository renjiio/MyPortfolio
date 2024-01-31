import React from "react";
import "../Styles/AssetFrame.css";

function AssetFrame(props) {
  const [isGif, setIsGif] = React.useState(false);

  return (
    <div className="AssetHead">
      <div
        className="AssetImage"
        onMouseEnter={() => setIsGif(true)}
        onMouseLeave={() => setIsGif(false)}
      >
        <img
          src={isGif ? props.gifImage : props.ImageURL}
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <div className="AssetContainer">
        <h1 className="AssetText1">{props.Text1}</h1>
        <p className="AssetText2">{props.Text2}</p>
      </div>
    </div>
  );
}

export default AssetFrame;

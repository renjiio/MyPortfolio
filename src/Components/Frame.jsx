import React from 'react';
import '../Styles/Frame.css';

function Frame(props) {
  return (

    <div className="FrameHead">

      <div className="FrameImage">
        <img src={props.ImageURL} style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <div className="container">
        <h1 className="FrameText1">{props.Text1}</h1>
        <h1 className="FrameText2">{props.Text2}</h1>
      </div>

    </div>
  );
}

export default Frame;
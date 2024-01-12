import React from "react";
import "../Styles/App.css";
import PC from "../Images/PC.gif"
import NavBar from "../Components/NavBar";
import Grid from "@mui/material/Grid";
import Frame from "../Components/Frame";
import { Element } from 'react-scroll'


export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Grid container spacing={2}>
          <Grid item mobile={12} desktop={6}>
            <div className="MeText">
              <h4>Martin Mendoza</h4>
              <p>I'm a high school student with a passion for both programming and digital art. As a budding programmer, I find joy in creating games and exploring the exciting world of technology. I thrive in collaborative group settings, where the exchange of ideas and diverse talents enhances the creative process. Beyond coding, my artistic side comes to life as a digital artist, bringing a unique blend of creativity and technical skills to every project. Excited to embark on new challenges and contribute to innovative endeavors!</p>
            </div>
          </Grid>
          <Grid item mobile={12} desktop={6}>
            <div className="PC">
              <img src={PC} alt="loading..." />
            </div>
          </Grid>
        </Grid>

          <Element id='MyWork' name='MyWork' className="MyWork">
           <p>My Work</p>
          </Element>
        
        <Grid container spacing={2}>
          <Grid item mobile={12} desktop={4}>
            <Frame
              ImageURL=""
              Text1="Earth"
              Text2="This is a habitable planet"
            />
          </Grid>
          <Grid item mobile={12} desktop={4}>
            <Frame
              ImageURL=""
              Text1="Earth"
              Text2="This is a habitable planet"
            />
          </Grid>
          <Grid item mobile={12} desktop={4}>
            <Frame
              ImageURL=""
              Text1="Earth"
              Text2="This is a habitable planet"
            />
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  );
}

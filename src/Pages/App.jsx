import React, { useEffect, useState } from "react";
import "../Styles/App.css";
import { FaEnvelope, FaDiscord, FaItchIo } from "react-icons/fa";
import PC from "../Images/PC.gif";
import Run from "../Images/PlagueRunning.gif";
import Grid from "@mui/material/Grid";
import NavBar from "../Components/NavBar";
import Frame from "../Components/Frame";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase-config.jsx";

export default function App() {
  useEffect(() => {
    // Code here runs once after the component mounts
    getData();
  }, []); // Empty array means no dependencies, so run only once (twice in development mode)
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "Posts"));
    const postsArray = []; // Step 1: Create an empty array
    querySnapshot.forEach((doc) => {
      let post = doc.data();
      post.id = doc.id; // Add the document ID to the post object
      postsArray.push(post); // Step 2: Push each post into the array
    });
    setPosts(postsArray); // Step 3: Update the posts state
  };

  const [newAuthor, setNewAuthor] = useState("");
  const [newText, setNewText] = useState("");
  const postData = async (author, text) => {
    try {
      const docRef = await addDoc(collection(db, "Posts"), {
        Author: author,
        Text: text,
      });
      getData();
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const deletePost = async (postId) => {
    try {
      //postId is the unique identifier for each document
      await deleteDoc(doc(db, "Posts", postId));
      console.log("Document deleted with ID: ", postId);
      getData(); // Refresh the list after deletion
    } catch (e) {
      console.error("Error removing document: ", e);
    }
  };

  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Grid container spacing={2}>
          <Grid item mobile={12} desktop={6}>
            <div className="MeText">
              <h4>Martin Mendoza</h4>
              <p>
                I'm a high school student with a passion for both programming
                and digital art. As a budding programmer, I find joy in creating
                games and exploring the exciting world of technology. I thrive
                in collaborative group settings, where the exchange of ideas and
                diverse talents enhances the creative process. Beyond coding, my
                artistic side comes to life as a digital artist, bringing a
                unique blend of creativity and technical skills to every
                project. Excited to embark on new challenges and contribute to
                innovative endeavors!
              </p>
            </div>
          </Grid>
          <Grid item mobile={12} desktop={6}>
            <div className="PC">
              <img src={PC} alt="loading..." />
            </div>
          </Grid>
        </Grid>

        <div id="AboutMe" className="AboutMe">
          <p>About Me</p>
        </div>

        <Grid container spacing={2}>
          <Grid item mobile={12} desktop={6}>
            <div className="Career">
              <h4>Career Goal</h4>
              <p>
              I intend to pursue software development courses with the aim of establishing 
              a career in the tech industry My focus is on honing my skills in website 
              development, game programming, and creating assets in both 2D and 3D. I'm 
              excited about the prospect of mastering these areas to carve out a path in 
              the dynamic field of technology.
              </p>
            </div>
          </Grid>
          <Grid item mobile={12} desktop={6}>
            <div className="Interests">
              <h4>Interests</h4>
              <p>
              I am a IDM student who likes to work on assets for projects and games. 
              I primarily do all my work on Aseprite, and I enjoy creating still images, 
              characters, animations, backgrounds, and anything to do with 2D art. I 
              plan to expand my experience with programs such as blender to create more 
              3D assets in the future.
              </p>
            </div>
          </Grid>
        </Grid>

        <div id="MyWork" className="MyWork">
          <p>My Work</p>
        </div>

        <Grid container spacing={2}>
          <Grid item mobile={12} desktop={4}>
            <a
              href="/Plague"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Frame
                ImageURL="https://i.postimg.cc/KcsPHJ4D/Plague.png"
                gifImage={Run}
                Text1="Plague Runner"
              />
            </a>
          </Grid>
          <Grid item mobile={12} desktop={4}>
            <Frame ImageURL="" gifImage="gif_image.gif" Text1="Project 2" />
          </Grid>
          <Grid item mobile={12} desktop={4}>
            <Frame ImageURL="" gifImage="gif_image.gif" Text1="Project 3" />
          </Grid>
        </Grid>

        <div id="Contact" className="Contact">
          <p>Contact Me</p>
        </div>

        <div className="SocialLinks">
          <a href="mailto:rencemmendoza@gmail.com">
            <FaEnvelope /> EMAIL
          </a>
          <a href="https://discord.com/users/931924643051348089">
            <FaDiscord /> DISCORD
          </a>
          <a href="https://renjiio.itch.io/">
            <FaItchIo /> ITCH.IO
          </a>
        </div>

        <div id="Comment" className="Comment">
          <p>Comments</p>
        </div>

        <div className="Comments">
          <div className="NameComments">
            Name
          </div>
          <input
            type="text"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
          <div className="MessageComments">
            Message
          </div>
          
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={() => postData(newAuthor, newText)}>submit</button>
          {posts.map((post, index) => (
            <div key={index}>
              <h1>{post.Author}</h1>
              <p>{post.Text}</p>
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          ))}
        </div>
      </main>
    </React.Fragment>
  );
}

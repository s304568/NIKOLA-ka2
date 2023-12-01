import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiscuitClicker_PATH, TempetureCheeker_PATH } from "../Constants/paths";
import ParagraphPair from "./ParagraphPair"
import "../index.css"

function Home() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <>
    
      <h1>This is the Home Page.</h1>
      <div className="Para_box">
      <ParagraphPair Paragraph1 = "While React has undoubtedly gained immense popularity and widespread adoption in the web development community, 
      some developers express concerns and criticisms about the framework. One common point of contention revolves around the steep learning curve  
      associated with React. The framework introduces concepts like JSX, virtual DOM, and component lifecycle methods, which can be overwhelming for 
      newcomers and may hinder the onboarding process. Additionally, the constant evolution of React and its ecosystem can lead to challenges in keeping 
      up with the latest best practices and updates, making it difficult for developers to maintain their projects over time." 
      Paragraph2 = "Another criticism often raised against React is its verbosity and boilerplate code. While the framework promotes a 
      component-based architecture, which can enhance code modularity and reusability, some developers argue that it leads to verbose code, especially
       for smaller projects. The need for boilerplate code, such as the use of JSX syntax, can make the codebase harder to read and maintain. Some developers 
       also find the JSX syntax itself to be a drawback, as it mixes HTML markup with JavaScript, potentially causing confusion for those who are accustomed to 
       traditional separation of concerns in web development. Despite these criticisms, it's important to note that React has a vast and active community, and many 
       developers appreciate its flexibility and efficiency for building complex user interfaces." />
       </div>
    </>
  );
}

export default Home;

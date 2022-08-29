import { Outlet } from "react-router-dom";
import ProjectDirectory from "../../components/projects-directory/projects-directory.component"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Gomaker",
      subtitle: "Lighting-fast concurrent compiling tool",
      externalUrl: "https://github.com/chrisfishbob/gomaker",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/gophers.jpg",
      
    },
    {
      id: 2,
      title: "ReactJS Personal Site",
      subtitle: "You're Looking At It Now",
      externalUrl: "/",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/nested.jpg",
    },
    {
      id: 3,
      title: "LightBlue",
      subtitle: "Java Chess GUI && Move Generation",
      externalUrl: "https://github.com/chrisfishbob/LightBlue",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/chess.jpeg",
    },
    {
      id: 4,
      title: "Argon Assault",
      subtitle: "iOS 3D Space Shooter",
      externalUrl: "https://apps.apple.com/ca/app/argon-assault/id1485174797",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/tiefighter.jpg",
    },
    {
      id: 5,
      title: "Radical Radish",
      subtitle: "iOS 2D Endless Scroller",
      externalUrl: "https://apps.apple.com/zw/app/radical-radish/id1488590413",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/radish.PNG"
    },
    {
      id: 6,
      title: "AlphaBits",
      subtitle: "Python Huffman-coding Compression",
      externalUrl: "https://github.com/chrisfishbob/Alphabits",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/piedpiper.jpg",
    },
  ];

  return (
    <div>
      {/* Location of outlet matters! */}
      <Outlet />
      <ProjectDirectory projects={projects}/>
    </div>
  );
}

export default Projects;
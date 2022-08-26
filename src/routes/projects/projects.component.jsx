import { Outlet } from "react-router-dom";
import ProjectDirectory from "../../components/projects-directory/projects-directory.component"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "ReactJS Personal Site",
      subtitle: "You're Looking At It Now",
      externalUrl: "/",
      imageUrl:
        "https://logicalidea.co/wp-content/uploads/2022/06/React.js-Cheat-Sheet.jpg",
    },
    {
      id: 2,
      title: "Gomaker",
      subtitle: "Lighting-fast concurrent compiling tool",
      externalUrl: "https://github.com/chrisfishbob/gomaker",
      imageUrl:
        "https://unit42.paloaltonetworks.com/wp-content/uploads/2019/07/golang-hacker.jpg",
      
    },
    {
      id: 3,
      title: "LightBlue",
      subtitle: "Java Chess GUI && Move Generation",
      externalUrl: "https://github.com/chrisfishbob/LightBlue",
      imageUrl:
        "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlc3N8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      id: 4,
      title: "Argon Assault",
      subtitle: "iOS 3D Space Shooter",
      externalUrl: "https://apps.apple.com/ca/app/argon-assault/id1485174797",
      imageUrl:
        "https://s3-us-west-2.amazonaws.com/media.brothers-brick.com/2022/05/TieFighter-FukuSaku.jpg",
    },
    {
      id: 5,
      title: "Radical Radish",
      subtitle: "iOS 2D Endless Scroller",
      externalUrl: "https://apps.apple.com/zw/app/radical-radish/id1488590413",
      imageUrl:
        "https://racoongrilledcheesecopy.s3.amazonaws.com/radish.PNG"
    },
    // {
    //   id: 6,
    //   title: "AlphaBits",
    //   subtitle: "Python Huffman-coding Compression",
    //   externalUrl: "https://github.com/chrisfishbob/Alphabits",
    //   imageUrl:
    //     "https://news.mlh.io/wp-content/uploads/2015/06/Silicon-Valley.jpg",
    // },
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
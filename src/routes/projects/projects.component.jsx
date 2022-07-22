import { Outlet } from "react-router-dom";
import ProjectDirectory from "../../components/projects-directory/projects-directory.component"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "LightBlue",
      subtitle: "Java Chess GUI && Move Generation",
      urlTitle: "work-experience",
      imageUrl:
        "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlc3N8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      id: 2,
      title: "Gomaker",
      subtitle: "Lighting-fast concurrent compiling tool",
      urlTitle: "my-story",
      imageUrl:
        "https://external-preview.redd.it/lfkblswbV7VXAp-9RR0wUNlq5wEMV1RZoDsnpfeufIY.jpg?auto=webp&s=2fed4435f4956ba1d45627775ef44a11f156ff91",
      
    },
    {
      id: 3,
      title: "Argon Assault",
      subtitle: "iOS 3D Space Shooter",
      urlTitle: "education",
      imageUrl:
        "https://s3-us-west-2.amazonaws.com/media.brothers-brick.com/2022/05/TieFighter-FukuSaku.jpg",
    },
    {
      id: 4,
      title: "Radical Radish",
      subtitle: "iOS 2D Endless Scroller",
      urlTitle: "technical-skills",
      // imageUrl:
      //   "https://helloartsy.com/wp-content/uploads/kids/vegetables/how-to-draw-a-radish/how-to-draw-a-radish-step-6.jpg",
      imageUrl:
        "https://racoongrilledcheesecopy.s3.amazonaws.com/radish.PNG"
    },
    {
      id: 5,
      title: "AlphaBits",
      subtitle: "Huffman-coding Compression",
      urlTitle: "projects",
      imageUrl:
        "https://news.mlh.io/wp-content/uploads/2015/06/Silicon-Valley.jpg",
    },
    {
      id: 6,
      title: "Personal Site",
      subtitle: "You're Looking At It Now",
      urlTitle: "projects",
      imageUrl:
        "https://mrclown.tv/wp-content/uploads/2014/12/MC_SightWords-This.jpg",
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
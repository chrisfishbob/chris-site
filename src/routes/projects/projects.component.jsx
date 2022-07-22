import { Outlet } from "react-router-dom";
import ProjectDirectory from "../../components/projects-directory/projects-directory.component"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Gomaker",
      subtitle: "Lighting-fast concurrent compiling tool",
      urlTitle: "my-story",
      imageUrl:
        "https://external-preview.redd.it/lfkblswbV7VXAp-9RR0wUNlq5wEMV1RZoDsnpfeufIY.jpg?auto=webp&s=2fed4435f4956ba1d45627775ef44a11f156ff91",
      
    },
    {
      id: 2,
      title: "LightBlue",
      subtitle: "Chess GUI && Move Generation",
      urlTitle: "work-experience",
      imageUrl:
        "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlc3N8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      id: 3,
      title: "Argon Assault",
      subtitle: "3D Space Shooter",
      urlTitle: "education",
      imageUrl:
        "https://gradbusiness.calpoly.edu/wp-content/uploads/2020/11/20200113-CPAerials-SP0062.jpg",
    },
    {
      id: 4,
      title: "Technical Skills",
      subtitle: "See More",
      urlTitle: "technical-skills",
      imageUrl:
        "https://3s81si1s5ygj3mzby34dq6qf-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/ab_datacenter_generic_8888-1030x438.jpg",
    },
    {
      id: 5,
      title: "Projects",
      subtitle: "See More",
      urlTitle: "projects",
      imageUrl:
        "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlc3N8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      id: 6,
      title: "Projects",
      subtitle: "See More",
      urlTitle: "projects",
      imageUrl:
        "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlc3N8ZW58MHx8MHx8&w=1000&q=80",
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
import { Outlet } from "react-router-dom";
import ProjectDirectory from "../../components/projects-directory/projects-directory.component"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Seville",
      subtitle: "Compiled Programming Language Written in Go",
      externalUrl: "https://github.com/chrisfishbob/seville",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/gophers.jpg",
      openNewTab: true,
      
    },
    {
      id: 2,
      title: "Spark",
      subtitle: "A Functional Programing Language Written in Python",
      externalUrl: "https://github.com/chrisfishbob/spark",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/python.jpg",
      openNewTab: true,
      
    },
    {
      id: 3,
      title: "ReactJS Personal Site",
      subtitle: "You're Looking At It Now",
      externalUrl: "https://github.com/chrisfishbob/chris-site",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/nested.jpg",
      openNewTab: true,
      
    },
    {
      id: 4,
      title: "LightBlue",
      subtitle: "Java Chess GUI && Move Generation",
      externalUrl: "https://github.com/chrisfishbob/LightBlue",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/chess.jpeg",
      openNewTab: true,
      
    },
    {
      id: 5,
      title: "Argon Assault",
      subtitle: "iOS 3D Space Shooter",
      externalUrl: "https://apps.apple.com/ca/app/argon-assault/id1485174797",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/tiefighter.jpg",
      openNewTab: true,
      
    },
    {
      id: 6,
      title: "JYSS",
      subtitle: "A Statically-typed Programming Language Written in Racket",
      externalUrl: "https://github.com/chrisfishbob/jyss",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/lambda.png",
      openNewTab: true,
      
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
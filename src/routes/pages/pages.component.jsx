import { Outlet } from "react-router-dom";
import ProjectDirectory from "../../components/projects-directory/projects-directory.component"

function Pages() {
  const pages = [
    {
      id: 1,
      title: "About Me",
      subtitle: "My Blog && More",
      externalUrl: "/blog",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/taiwan.jpeg",
      openNewTab: false,
    },
    {
      id: 2,
      title: "Education",
      subtitle: "Courses && Certifications",
      externalUrl: "/education",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/campus-min.jpg",
      openNewTab: false,
    },
    {
      id: 3,
      title: "Work Experience",
      subtitle: "See More",
      externalUrl: "/work-experience",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/amazon_office.jpg",
      openNewTab: false,
    },
    {
      id: 4,
      title: "Projects",
      subtitle: "My Works && Where to See Them",
      externalUrl: "/projects",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/construction-min.jpg",
      openNewTab: false,
    },
    {
      id: 5,
      title: "Resume",
      subtitle: "Updated 8/01/2023",
      externalUrl: "https://racoongrilledcheesecopy.s3.amazonaws.com/Chris_Hsu_Resume.pdf",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/library.jpg",
      openNewTab: true,
    },
    {
      id: 6,
      title: "Contact Me",
      subtitle: "Let's Connect!",
      externalUrl: "https://www.linkedin.com/in/hsuc/",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/bar-min.jpg",
      openNewTab: true,
    },
  ];

  return (
    <div>
      {/* Location of outlet matters! */}
      <Outlet />
      <ProjectDirectory projects={pages}/>
    </div>
  );
}

export default Pages;
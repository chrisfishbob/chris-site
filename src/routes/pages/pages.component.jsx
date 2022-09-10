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
      title: "Projects",
      subtitle: "My Works && Where to See Them",
      externalUrl: "/projects",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/construction.jpg",
      openNewTab: false,
    },
    {
      id: 3,
      title: "Resume",
      subtitle: "Updated 9/10/2022",
      externalUrl: "https://racoongrilledcheesecopy.s3.amazonaws.com/LatexResume.pdf",
      imageUrl:
        "https://lfla.org/wp-content/uploads/2021/06/los-angeles-library-interior.jpg",
      openNewTab: true,
    },
    {
      id: 4,
      title: "Education",
      subtitle: "Courses && Certifications",
      externalUrl: "/construction",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/campus.jpg",
      openNewTab: false,
    },
    {
      id: 5,
      title: "Work Experience",
      subtitle: "See More",
      externalUrl: "/construction",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/deloitte_office.jpg",
      openNewTab: false,
    },
    {
      id: 6,
      title: "Contact Me",
      subtitle: "Let's Connect!",
      externalUrl: "https://www.linkedin.com/in/hsuc/",
      imageUrl:
        "http://d34316robnoe1k.cloudfront.net/bar.jpg",
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
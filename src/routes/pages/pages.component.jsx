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
        "https://i.insider.com/5cddaee0021b4c06d6337b93?width=1000&format=jpeg&auto=webp",
      openNewTab: false,
    },
    {
      id: 2,
      title: "Projects",
      subtitle: "My Works && Where to See Them",
      externalUrl: "/projects",
      imageUrl:
        "https://lwslawyers.com.au/wp-content/uploads/2016/05/melbourne-construction-lawyers1.jpg",
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
        "https://gradbusiness.calpoly.edu/wp-content/uploads/2020/11/20200113-CPAerials-SP0062.jpg",
      openNewTab: false,
    },
    {
      id: 5,
      title: "Work Experience",
      subtitle: "See More",
      externalUrl: "/construction",
      imageUrl:
        "https://www.officelovin.com/wp-content/uploads/2016/10/deloitte-toronto-office-2.jpg",
      openNewTab: false,
    },
    {
      id: 6,
      title: "Contact Me",
      subtitle: "Let's Connect!",
      externalUrl: "https://www.linkedin.com/in/hsuc/",
      imageUrl:
        "http://cdn.cnn.com/cnnnext/dam/assets/211207104548-10-worlds-best-bars-2021-katana-kitten.jpg",
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
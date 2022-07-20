import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

function Home() {
  const categories = [
    {
      id: 1,
      title: "My Story",
      subtitle: "See More",
      imageUrl:
        "https://images.unsplash.com/photo-1598935898639-81586f7d2129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFpcGVpfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      
    },
    {
      id: 2,
      title: "Work Experience",
      subtitle: "See More",
      imageUrl:
        "https://www.officelovin.com/wp-content/uploads/2016/10/deloitte-toronto-office-2.jpg",
    },
    {
      id: 3,
      title: "Education",
      subtitle: "See More",
      imageUrl:
        "https://gradbusiness.calpoly.edu/wp-content/uploads/2020/11/20200113-CPAerials-SP0062.jpg",
    },
    {
      id: 4,
      title: "Technical Skills",
      subtitle: "See More",
      imageUrl:
        "https://3s81si1s5ygj3mzby34dq6qf-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/ab_datacenter_generic_8888-1030x438.jpg",
    },
    {
      id: 5,
      title: "Projects",
      subtitle: "See More",
      imageUrl:
        "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlc3N8ZW58MHx8MHx8&w=1000&q=80",
    },
  ];

  return (
    <div>
      {/* Location of outlet matters! */}
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
}

export default Home;

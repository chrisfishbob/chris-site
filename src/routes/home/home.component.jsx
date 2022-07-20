import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

function Home() {
  const categories = [
    {
      id: 1,
      // title: "My Story",
      title: "Cats",
      subtitle: "See More",
      // imageUrl:
      //   "https://images.unsplash.com/photo-1598935898639-81586f7d2129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFpcGVpfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      imageUrl: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"
      
    },
    {
      id: 2,
      // title: "Work Experience",
      title: "Rabbits",
      subtitle: "See More",
      // imageUrl:
      //   "https://www.officelovin.com/wp-content/uploads/2016/10/deloitte-toronto-office-2.jpg",
      imageUrl: "https://critterculture.mblycdn.com/uploads/cc/2020/09/shutterstock_1713833734_1440x964_acf_cropped.jpg"
    },
    {
      id: 3,
      // title: "Education",
      title: "Dogs",
      subtitle: "See More",
      // imageUrl:
      //   "https://gradbusiness.calpoly.edu/wp-content/uploads/2020/11/20200113-CPAerials-SP0062.jpg",
      imageUrl: "https://files.brief.vet/2019-07/pelvic-limb_HEADER.png"
    },
    {
      id: 4,
      title: "Guinnea Pigs",
      subtitle: "See More",
      // imageUrl:
      //   "https://3s81si1s5ygj3mzby34dq6qf-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/ab_datacenter_generic_8888-1030x438.jpg",
      imageUrl: "https://animals.sandiegozoo.org/sites/default/files/2019-04/animals_guineapig-domestic.jpg"
    },
    {
      id: 5,
      title: "Other Companions",
      subtitle: "See More",
      // imageUrl:
      //   "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixjlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlc3N8ZW58MHx8MHx8&w=1000&q=80",
      imageUrl: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/rainbow-parrots-mike-jones-photo.jpg"
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

import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

function Home() {
  const categories = [
    {
      id: 1,
      title: "About Me",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Projects",
      imageUrl:
        "https://github.com/chrisfishbob/webstore/blob/main/Chess.jpeg?raw=true",
    },
  ];

  return (
    <div>
      {/* Location of outlet matters! */}
      <Outlet/>
      <Directory categories={categories} />
    </div>
  );
}

export default Home;

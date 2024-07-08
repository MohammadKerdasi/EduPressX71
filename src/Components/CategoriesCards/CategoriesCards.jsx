import { useState } from "react";

// for css
import "./CategoriesCards.css";

// for images
import categoryArt from "./../../../public/assetsProject/imges/TopCategories-art-netork.svg";
import categoryDev from "./../../../public/assetsProject/imges/TopCategories-development.svg";
import categoryCommunication from "./../../../public/assetsProject/imges/TopCategories-Communication.svg";
import categoryVideo from "./../../../public/assetsProject/imges/TopCategories-Videography.svg";
import categoryPhoto from "./../../../public/assetsProject/imges/TopCategories-Photography.svg";
import categoryMarketing from "./../../../public/assetsProject/imges/TopCategories-Marketing.svg";
import categoryContent from "./../../../public/assetsProject/imges/TopCategories-Content writing.svg";
import categoryFinance from "./../../../public/assetsProject/imges/TopCategories-Finance.svg";
import categoryScience from "./../../../public/assetsProject/imges/TopCategories-Science.svg";

// for components
import Title from "../Title/Title";
import { Link } from "react-router-dom";

export default function CategoriesCards() {
  const [CategoriesCards] = useState([
    {
      id: 1,
      img: categoryArt,
      title: "art & design",
      desc: "38 courses",
    },
    {
      id: 2,
      img: categoryDev,
      title: "development",
      desc: "38 courses",
    },
    {
      id: 3,
      img: categoryCommunication,
      title: "Communication",
      desc: "38 courses",
    },
    {
      id: 4,
      img: categoryVideo,
      title: "videography",
      desc: "38 courses",
    },
    {
      id: 5,
      img: categoryPhoto,
      title: "photogrsphy",
      desc: "38 courses",
    },
    {
      id: 6,
      img: categoryMarketing,
      title: "marketing",
      desc: "38 courses",
    },
    {
      id: 7,
      img: categoryContent,
      title: "content writing",
      desc: "38 courses",
    },
    {
      id: 8,
      img: categoryFinance,
      title: "finance",
      desc: "38 courses",
    },
    {
      id: 9,
      img: categoryScience,
      title: "science",
      desc: "38 courses",
    },
    {
      id: 10,
      img: categoryArt,
      title: "network",
      desc: "38 courses",
    },
  ]);

  return (
    <section className="NA-categoriesCards-Section NA-Project-Container block">
      <Title header="top categories" desc="Explore our Popular Categories" btn=" all categories " showBtn={true} link="/{}"/>
        <div className="NA-categoriesCards NA-flex">
            {CategoriesCards.map ((item) => {
                return (
                    <div key={item.id}  className="NA-categories-card NA-flex">
                        <div>  <img src={item.img} alt="Art" /> </div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                )
            })}
        </div>
        <Link className="NA-header-btn NA-btn-effect NA-hidden-btn" to="/{}">All Categories</Link>
    </section>
  );
}

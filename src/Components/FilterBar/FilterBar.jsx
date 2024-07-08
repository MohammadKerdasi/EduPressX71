import React from "react";
import "./FilterBar.css";
import TagsH from "./../TagsH/Tags";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import Post1 from "./../../../public/assetsProject/imges/blogListing-Recent posts(3).png"
import Post2 from "./../../../public/assetsProject/imges/blogListing-Recent posts(1).png"
import Post3 from "./../../../public/assetsProject/imges/blogListing-Recent posts(2).png"

export default function FilterBar(props) {
  // مصفوفة الفئات
  const Category = [
    { id: 1, catName: "Commercial", catNum: 15 },
    { id: 2, catName: "Office", catNum: 15 },
    { id: 3, catName: "Shop", catNum: 15 },
    { id: 4, catName: "Educate", catNum: 15 },
    { id: 5, catName: "Academy", catNum: 15 },
    { id: 6, catName: "Single family home", catNum: 15 },
  ];

  // مصفوفة المنشورات الحالية
  const RecentPosts = [
    {
      id: 1,
      imageUrl: Post1 ,
      recentPostText: "Best LearnPress WordPress Theme Collection for 2023",
    },
    {
      id: 2,
      imageUrl: Post2,
      recentPostText: "Best LearnPress WordPress Theme Collection for 2023",
    },
    {
      id: 3,
      imageUrl: Post3,
      recentPostText: "Best LearnPress WordPress Theme Collection for 2023",
    },
  ];
  return (
    <div className="NA-FilterBar">
      <FontAwesomeIcon className='NA-filter-icon' icon={faArrowRight} onClick={props.onClick} />

      <div className="SHaaban-category-area">
        <h4 className="SHaaban-adding-margin-bottom SHaaban-category-area-title">
          Category
        </h4>
        {Category.map((cat) => {
          return (
            <div className="SHaaban-category-body" key={cat.id}>
              <p className="SHaaban-remove-margin SHaaban-category-name">
                {cat.catName}
              </p>
              <p className="SHaaban-remove-margin">{cat.catNum}</p>
            </div>
          );
        })}
      </div>
      <div className="SHaaban-recent-posts-area">
        <h4 className="SHaaban-adding-margin-bottom SHaaban-recent-posts-area-title">
          Recent Posts
        </h4>
        {RecentPosts.map((post) => {
          return (
            <div className="SHaaban-recent-post-body" key={post.id}>
              <img
                className="SHaaban-adding-style-for-recent-posts-img"
                src={post.imageUrl}
                alt=""
              />
              <p className="SHaaban-adding-style-for-recent-posts-paragraph">
                {post.recentPostText}
              </p>
            </div>
          );
        })}
      </div>
      <div className="SHaaban-tags-area">
        <h4 className="SHaaban-adding-margin-bottom SHaaban-tags-area-title">
          Tags
        </h4>
        <div className="SHaaban-adding-style-for-tags-area">
          <TagsH />
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import styles from "./Trending.module.css";
import TrendingCard from "./TrendingCard";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSubreddit } from "../../store/redditSlice";
import cuteCat from "../../media/cute_cat.jpeg";
import keyboardCat from "../../media/cat_keyboard.jpg";
import dogCat from "../../media/cat_dog.jpg";
import pizzaCat from "../../media/cat_pizza.jpeg";

const trending = [
  {
    title: "Cute Cats",
    description: "Check out the web's cutest cats",
    channel: "r/cutecats",
    url: cuteCat,
  },
  {
    title: "Cats On Keyboards",
    description: "Explore the latest trends in mechanic cushions",
    channel: "r/CatsOnKeyboards",
    url: keyboardCat,
  },
  {
    title: "Cats With Dogs",
    description: "Friends not foes - Best friends share their stories",
    channel: "r/CatsWithDogs",
    url: dogCat,
  },
  {
    title: "Cats On Pizza",
    description: "Nothing better than a warm piece of cardboard",
    channel: "r/CatsOnPizza",
    url: pizzaCat,
  },
];

export default function Trending() {
  const [localSelectedSubreddit, setLocalSelectedSubreddit] =
    useState("/r/catpics/");
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector(
    (state) => state.reddit.selectedSubreddit
  );
  const handleSubredditChange = (value) => {
    setLocalSelectedSubreddit(value);
  };

  useEffect(() => {
    setLocalSelectedSubreddit(selectedSubreddit);
  }, [selectedSubreddit]);

  useEffect(() => {
    dispatch(setSelectedSubreddit(localSelectedSubreddit));
  }, [localSelectedSubreddit, dispatch]);

  let trendingIndex = Math.floor(Math.random() * 4);

  return (
    <div>
      <div className={`${styles.grid_container} ${styles.mobile_container}`}>
        <div className={styles.mobile_trending}>
          <p className={styles.heading}>Forever trending</p>
          <div
            className={`${styles.grid_item_0} ${styles.grid_item}`}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),url(${trending[trendingIndex].url})`,
            }}
            onClick={(event) => {
              event.preventDefault();
              handleSubredditChange(`/${trending[trendingIndex].channel}/`);
            }}
          >
            <TrendingCard
              title={trending[trendingIndex].title}
              text={trending[trendingIndex].description}
              channel={trending[trendingIndex].channel}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.grid_container} ${styles.desktop_container}`}>
        <p className={styles.heading}>Forever trending</p>
        <div
          className={`${styles.grid_item_0} ${styles.grid_item}`}
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),url(${trending[0].url})`,
          }}
          onClick={(event) => {
            event.preventDefault();
            handleSubredditChange(`/${trending[0].channel}/`);
          }}
        >
          <TrendingCard
            title={trending[0].title}
            text={trending[0].description}
            channel={trending[0].channel}
          />
        </div>

        <div
          className={`${styles.grid_item_1} ${styles.grid_item}`}
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),url(${trending[1].url})`,
          }}
          onClick={(event) => {
            event.preventDefault();
            handleSubredditChange(`/${trending[1].channel}/`);
          }}
        >
          <TrendingCard
            title={trending[1].title}
            text={trending[1].description}
            channel={trending[1].channel}
          />
        </div>
        <div
          className={`${styles.grid_item_2} ${styles.grid_item}`}
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),url(${trending[2].url})`,
          }}
          onClick={(event) => {
            event.preventDefault();
            handleSubredditChange(`/${trending[2].channel}/`);
          }}
        >
          <TrendingCard
            title={trending[2].title}
            text={trending[2].description}
            channel={trending[2].channel}
          />
        </div>
        <div
          className={`${styles.grid_item_3} ${styles.grid_item}`}
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),url(${trending[3].url})`,
          }}
          onClick={(event) => {
            event.preventDefault();
            handleSubredditChange(`/${trending[3].channel}/`);
          }}
        >
          <TrendingCard
            title={trending[3].title}
            text={trending[3].description}
            channel={trending[3].channel}
          />
        </div>
      </div>
    </div>
  );
}

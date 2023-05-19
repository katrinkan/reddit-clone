import React, { useState, useEffect } from "react";
import styles from "./Trending.module.css";
import TrendingCard from "./TrendingCard";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSubreddit } from "../../store/redditSlice";

export default function Trending() {
  const [localSelectedSubreddit, setLocalSelectedSubreddit] = useState("");
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector(
    (state) => state.reddit.selectedSubreddit
  );

  useEffect(() => {
    setLocalSelectedSubreddit(selectedSubreddit);
  }, [selectedSubreddit]);

  const handleSubredditChange = (value) => {
    setLocalSelectedSubreddit(value);
    submitSubredditChange();
  };

  const submitSubredditChange = () => {
    dispatch(setSelectedSubreddit(localSelectedSubreddit));
  };
  return (
    <div>
      <div className={`${styles.grid_container} ${styles.mobile_container}`}>
        <div className={styles.mobile_trending}>
          <p className={styles.heading}>Forever trending</p>
          <div
            className={`${styles.grid_item_one} ${styles.grid_item}`}
            onClick={(event) => {
              event.preventDefault();
              handleSubredditChange("/r/cutecats/");
            }}
          >
            <TrendingCard
              title={"Cute Cats"}
              text={`Check out the web's cutest cats`}
              channel={`r/cutecats`}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.grid_container} ${styles.desktop_container}`}>
        <p className={styles.heading}>Forever trending</p>
        <div
          className={`${styles.grid_item_one} ${styles.grid_item}`}
          onClick={(event) => {
            event.preventDefault();
            handleSubredditChange("/r/cutecats/");
          }}
        >
          <TrendingCard
            title={"Cute Cats"}
            text={`Check out the web's cutest cats`}
            channel={`r/cutecats`}
          />
        </div>

        <div
          className={`${styles.grid_item_two} ${styles.grid_item}`}
          onClick={(event) => {
            event.preventDefault();
            handleSubredditChange("/r/catsOnKeyboards/");
          }}
        >
          <TrendingCard
            title={"Cats On Keyboards"}
            text={`Explore the latest trends in mechanic cushions`}
            channel={`r/CatsOnKeyboards`}
          />
        </div>
        <div
          className={`${styles.grid_item_three} ${styles.grid_item}`}
          onClick={(event) => {
            event.preventDefault();
            handleSubredditChange("/r/CatsWithDogs/");
          }}
        >
          <TrendingCard
            title={"Cats With Dogs"}
            text={`Friends not foes. Best friends share their stories.`}
            channel={`r/CatsWithDogs`}
          />
        </div>
        <div
          className={`${styles.grid_item_four} ${styles.grid_item}`}
          onClick={(event) => {
            event.preventDefault();
            handleSubredditChange("/r/CatsOnPizza/");
          }}
        >
          <TrendingCard
            title={"Cats On Pizza"}
            text={`Nothing better than a warm piece of cardboard`}
            channel={`r/CatsOnPizza`}
          />
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  setSearchTerm,
  fetchComments,
  selectedPosts,
  fetchSearchResults,
} from "../../store/redditSlice";

export default function Home() {
  const reddit = useSelector((state) => state.reddit);
  const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
  const posts = useSelector(selectedPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm.length !== 0) {
      dispatch(fetchSearchResults(searchTerm));
    } else {
      dispatch(fetchPosts(selectedSubreddit));
    }
  }, [selectedSubreddit, searchTerm, dispatch]);

  const onToggleComments = (index) => {
    const getComments = (permalink) => {
      dispatch(fetchComments(index, permalink));
    };
    return getComments;
  };

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  if (error) {
    console.log(error);
    return (
      <div className="error">
        <h2>Failed to load posts.</h2>
        <button
          type="button"
          onClick={() => dispatch(fetchPosts(selectedSubreddit))}
        >
          Try again
        </button>
      </div>
    );
  }
  if (posts.length === 0) {
    return (
      <div className="error">
        <h2>No posts matching "{searchTerm}"</h2>
        <button type="button" onClick={() => dispatch(setSearchTerm(""))}>
          Go home
        </button>
      </div>
    );
  }
  return (
    <>
      {posts.map((post, index) =>
        post.gallery_data ? null : (
          <Card
            key={post.id}
            post={post}
            onToggleComments={onToggleComments(index)}
          />
        )
      )}
    </>
  );
}

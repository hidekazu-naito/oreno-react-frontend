// MainApp.tsx
import React, { useState } from 'react';
import PostList from './PostList';
import PostForm from './PostForm';

interface Post {
  id: number;
  text: string;
}

function MainApp() {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (text: string) => {
    if (text.length <= 140) {
      const newPost: Post = {
        id: new Date().getTime(),
        text: text,
      };
      setPosts([...posts, newPost]);
    } else {
      alert('投稿は140文字までです。');
    }
  };

  const deletePost = (postId: number) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>掲示板</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default MainApp;

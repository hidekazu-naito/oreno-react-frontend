// PostList.tsx
import React from 'react';

interface Post {
  id: number;
  text: string;
}

interface PostListProps {
  posts: Post[];
  deletePost: (postId: number) => void;
}

function PostList({ posts, deletePost }: PostListProps) {
  return (
    <div>
      <h2>投稿一覧</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <span>{post.text}</span>
            <button onClick={() => deletePost(post.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;

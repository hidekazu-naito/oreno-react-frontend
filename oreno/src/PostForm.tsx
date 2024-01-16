// PostForm.tsx
import React, { useState } from 'react';

interface PostFormProps {
  addPost: (text: string) => void;
}

function PostForm({ addPost }: PostFormProps) {
  const [postText, setPostText] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (postText.trim() !== '') {
      addPost(postText);
      setPostText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        投稿する（140文字まで）:
        <textarea
          value={postText}
          onChange={handleInputChange}
          maxLength={140}
        />
      </label>
      <button type="submit">投稿する</button>
    </form>
  );
}

export default PostForm;

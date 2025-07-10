import React from 'react';
import appWriteService from '../Appwrite/Config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredimage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full flex justify-center items-center bg-white">
        <div className="w-full h-auto flex justify-center bg-white">
          {featuredimage && (
            <img
              src={appWriteService.getFilePreview(featuredimage)}
              alt={title}
              className="rounded-xl"
            />
          )}
        </div>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;

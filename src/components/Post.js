import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment'

import './Post.css'

function Post({ data }) {
  const {
    author: { avatar, name },
    date,
    content,
    comments } = data;

  return (
    <li className="post">
      <div className="post_perfil">
        <img src={avatar} alt="Avatar" />
        <div>
          <h5>{name}</h5>
          <h6>{date}</h6>
        </div>
      </div>
      <h5 className="post_content">{content}</h5>
      <ul>
        {comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </ul>
    </li>
  );
}


export default Post;
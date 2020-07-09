import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css'

function Comment({ data }) {
  const {
    author: { avatar, name },
    content } = data;

  return (
    <div className="comment">
      <div className="comment_perfil">
        <img src={avatar} alt="Avatar" />
      </div>
      <h5 className="comment_content">{name} {content}</h5>
    </div>
  );
}


export default Comment;
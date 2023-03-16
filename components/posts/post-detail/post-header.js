import Image from 'next/image';
import React from 'react';
import classes from './post-header.module.css';
function PostHeader(props) {
  const { title, image } = props;
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image width={200} height={150} src={image} alt={title} />
    </header>
  );
}

export default PostHeader;

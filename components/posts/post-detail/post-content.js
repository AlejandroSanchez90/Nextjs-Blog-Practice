import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';
const DUMMY_POST = {
  title: 'Getting started with nextJs',
  image: 'getting-started-nextjs.png',
  date: '2022-02-10',
  slug: 'getting-started-with-netjs',
  content: '# This is a first post \n ## Hola \n ### Como estas',
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;

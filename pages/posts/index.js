import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    title: 'Getting started with nextJs',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a the react frame work for production',
    date: '2022-02-10',
    slug: 'getting-started-with-netjs',
  },
  {
    title: 'Getting started with nextJs2',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a the react frame work for production',
    date: '2022-02-10',
    slug: 'getting-started-with-netjs2',
  },
  {
    title: 'Getting started with nextJs3',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a the react frame work for production',
    date: '2022-02-10',
    slug: 'getting-started-with-netjs3',
  },
  {
    title: 'Getting started with nextJs4',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is a the react frame work for production',
    date: '2022-02-10',
    slug: 'getting-started-with-netjs4',
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;

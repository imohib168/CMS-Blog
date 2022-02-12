import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../components';
import { FeaturedPosts } from '../sections';

import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <main className='container mx-auto px-10 mb-8'>
      <Head>
        <title>CMS Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <FeaturedPosts />
      <section className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => (
            <PostCard key={post.title} post={post.node} />
          ))}
        </div>
        <aside className='lg:col-span-4 col-span-1'>
          <section className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </section>
        </aside>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}

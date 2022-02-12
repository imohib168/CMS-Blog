import { useEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((response) =>
        setRelatedPosts(response)
      );
    } else {
      getRecentPosts().then((response) => setRelatedPosts(response));
    }
  }, [slug]);

  return (
    <section className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl font-semibold mb-8 border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <Image
              unoptimized
              height='60px'
              width='60px'
              alt={post.title}
              className='align-middle rounded-full'
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-xs'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PostWidget;

import { useRouter } from 'next/router';
import { getPosts, getPostDetails } from '../../services';
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentForm,
  Loader,
} from '../../components';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) return <Loader />;

  return (
    <section className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <aside className='lg:col-span-4 col-span-1'>
          <section className='lg:sticky relative top-8'>
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </section>
        </aside>
      </div>
    </section>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}

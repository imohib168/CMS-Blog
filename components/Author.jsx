import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <section className='text-center relative mt-20 mb-8 p-12 rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14 '>
        <Image
          alt={author.name}
          height='100px'
          width='100px'
          className='align-middle rounded-full'
          src={author.photo.url}
          unoptimized
        />
      </div>
      <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-lg text-white'>{author.bio}</p>
    </section>
  );
};

export default Author;

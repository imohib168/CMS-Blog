import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
  }, []);

  return (
    <nav className='container mx-auto px-10 mb-8'>
      <div className='w-full border-b border-blue-400 py-6 inline-block'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <span className='w-80 cursor-pointer font-bold text-4xl text-white'>
              Graph CMS
            </span>
          </Link>
          <ul className='hidden md:flex flex-wrap'>
            {categories.map((category) => (
              <Link href={`/category/${category.slug}`} key={category.slug}>
                <span className='ml-auto cursor-pointer mr-8 mt-3 text-white font-semibold text-lg'>
                  {category.name}
                </span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

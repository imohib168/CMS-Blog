import { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
  }, []);

  return (
    <section className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl font-semibold mb-8 border-b pb-4'>Categories</h3>
      {categories?.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3 border-b'>
            {category.name}
          </span>
        </Link>
      ))}
    </section>
  );
};

export default Categories;

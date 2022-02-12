import { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments && comments.length > 0 && (
        <section className='bg-white rounded-lg shadow-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl mb-8 text-gray-800 font-bold border-b pb-4'>
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className='border-b border-gray-100 mb-4 pb-4'>
              <p className='mb-4'>
                <span className='font-semibold'>{comment.name}</span> on{' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className='whitespace-pre-line text-gray-600 w-full'>
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default Comments;

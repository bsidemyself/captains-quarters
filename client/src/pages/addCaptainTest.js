import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { COMPLETE_CAPTAIN } from '../../utils/mutations';
import { QUERY_COMPLETEDCAPTAINS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const CompletedCaptainForm = () => {
  const [CompletedCaptain, setCompletedCaptain] = useState('');

 

  const [addCompletedCaptain, { error }] = useMutation(COMPLETE_CAPTAIN, {
    update(cache, { data: { addCompletedCaptain } }) {
      try {
        const { completedcaptains } = cache.readQuery({ query: QUERY_COMPLETEDCAPTAINS });

        cache.writeQuery({
          query: QUERY_COMPLETEDCAPTAINS,
          data: { completedcaptains : [addCompletedCaptain, ...completedcaptains] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, completedcaptains: [...me.completedcaptains, addCompletedCaptain] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addCompletedCaptain({
        variables: {
            CompletedCaptain,
        },
      });

      setCompletedCaptain('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'CompletedCaptain' ) {
      setCompletedCaptain(value);
      
    }
  };

  return (
    <div>
      <h3>What's on your techy mind?</h3>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="thoughtText"
                placeholder="Here's a new thought..."
                value={CompletedCaptain}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Thought
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CompletedCaptainForm;
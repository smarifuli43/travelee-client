import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
       return (
         <div className='text-center' style={{ margin: '250px 0' }}>
           <Spinner animation='border' variant='danger'></Spinner>
         </div>
       );
    }
  return (
    <Route>
      {...rest}
      render={({ location }) =>
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    </Route>
  );
};

export default PrivateRoute;
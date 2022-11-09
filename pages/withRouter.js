import {
  useNavigate, useParams, useLocation,
} from 'react-router-dom';
import React from 'react';

function withRouter(Component) {
  // eslint-disable-next-line func-names
  return function (props) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        navigate={useNavigate()}
        params={useParams()}
        location={useLocation()}
      />
    );
  };
}

export default withRouter;

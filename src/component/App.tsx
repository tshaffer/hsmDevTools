import * as React from 'react';
// import { useEffect } from 'react';
import { connect } from 'react-redux';

// -----------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// Styles
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const AppComponent = () => {
  return (
    <div>
      Pizza
    </div>
  );
}

// -----------------------------------------------------------------------
// Container
// -----------------------------------------------------------------------

const mapStateToProps = (state: any): any => {
  return {
    color: 69
  };
};

export const App = connect(mapStateToProps)(AppComponent);
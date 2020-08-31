import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadLog } from '../controllers';
import { bindActionCreators } from 'redux';

// -----------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// Styles
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

interface AppProps {
  onLoadLogs: () => any;
}

const AppComponent = (props: AppProps | any) => {

  useEffect(() => {
    console.log('useEffect invoked');
    props.onLoadLogs();
  });

  return (
    <div>
      Pizza
    </div>
  );
};

// -----------------------------------------------------------------------
// Container
// -----------------------------------------------------------------------

const mapStateToProps = (state: any): any => {
  return {
    color: 69
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    onLoadLogs: loadLog,
  }, dispatch);
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

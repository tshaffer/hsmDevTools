import * as React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadLog } from '../controllers';
import { bindActionCreators } from 'redux';
import { getHsmEvents } from '../selectors/events';
import { HsmEvent } from '../type';

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
  events: HsmEvent[];
  onLoadLogs: () => any;
}

const AppComponent = (props: AppProps | any) => {

  const [_logLoaded, setLogLoaded] = useState(false);

  useEffect(() => {
    if (!_logLoaded) {
      props.onLoadLogs();
      setLogLoaded(true);
    }
  });

  console.log(props.events.length);

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
    events: getHsmEvents(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    onLoadLogs: loadLog,
  }, dispatch);
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

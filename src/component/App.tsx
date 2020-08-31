import * as React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadLog } from '../controllers';
import { bindActionCreators } from 'redux';
import clsx from 'clsx';

import { getHsmEvents } from '../selectors/events';
import { HsmEvent } from '../type';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

// -----------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// Styles
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  input: {
    width: 42,
  },
  quarterWidth: {
    width: '25%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
    display: 'inline',
  },
  inlineDiv: {
    display: 'inline',
  },
  selectControl: {
    minWidth: 96,
  }
}));

interface AppProps {
  events: HsmEvent[];
  onLoadLogs: () => any;
}

const AppComponent = (props: AppProps | any) => {

  const classes = useStyles();

  const [_logLoaded, setLogLoaded] = useState(false);

  useEffect(() => {
    if (!_logLoaded) {
      props.onLoadLogs();
      setLogLoaded(true);
    }
  });

  console.log(props.events.length);

  // https://stackoverflow.com/questions/46044589/dynamically-resize-columns-in-css-grid-layout-with-mouse
  // https://v4-9-14.material-ui.com/api/list/
  return (
    <div>
      <Button
        type='submit'
        variant='contained'
        className={clsx(classes.margin)}
      >
        Add Review
      </Button>
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

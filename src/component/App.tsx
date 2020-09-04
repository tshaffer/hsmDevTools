import * as React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadLog } from '../controllers';
import { bindActionCreators } from 'redux';
// import clsx from 'clsx';

import { getHsmEvents } from '../selectors/events';
import { HsmEvent } from '../type';

// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { ListItemText, ListItem } from '@material-ui/core';

// -----------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// Styles
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   input: {
//     width: 42,
//   },
//   quarterWidth: {
//     width: '25%',
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 180,
//     display: 'inline',
//   },
//   inlineDiv: {
//     display: 'inline',
//   },
//   selectControl: {
//     minWidth: 96,
//   }
// }));

interface AppProps {
  events: HsmEvent[];
  onLoadLogs: () => any;
}

const AppComponent = (props: AppProps | any) => {

  // const classes = useStyles();

  const [_logLoaded, setLogLoaded] = useState(false);

  useEffect(() => {
    if (!_logLoaded) {
      props.onLoadLogs();
      setLogLoaded(true);
    }
  });

  const selectEvent = (hsmEvent: HsmEvent) => {
    console.log('selectEvent invoked');
    console.log(hsmEvent);
  };

  const getEvents = () => {
    const events: any[] = props.events.map((event: HsmEvent, index: number) => {
      const eventLabel = event.event.EventType.toString();
      return (
        <ListItem
          key={index}
          button={true}
          onClick={() => selectEvent(event)}
        >
          <ListItemText primary={eventLabel} />
        </ListItem>
      );
    });
    return events;
  };

  // https://stackoverflow.com/questions/46044589/dynamically-resize-columns-in-css-grid-layout-with-mouse
  // https://v4-9-14.material-ui.com/api/list/
  return (
    <div>
      <List>
        {getEvents()}
      </List>
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

/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </div>
  );
}
*/
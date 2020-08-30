import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { style } from 'typestyle';
import * as csstips from 'csstips';
import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// -----------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------

/** @internal */
export interface TemplateProps {
  color: number;
}

// -----------------------------------------------------------------------
// Styles
// -----------------------------------------------------------------------

const containerStyle = style(csstips.fillParent, csstips.vertical);
const headerContainerStyle = () => style(
  {
    backgroundColor: 'white',
    color: 'black',
  },
  csstips.centerCenter,
  csstips.padding(10, 0, 35, 0),
  csstips.content,
  csstips.vertical,
  csstips.verticallySpaced(10)
);

// -----------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

const TemplateComponent = () => {

  const classes = useStyles();

  const [pizzaState, setPizza] = useState('pizzaFace');

  const handleEatPizza = (e: any) => {
    // tslint:disable-next-line: no-console
    console.log('handleEatPizza');
  };

  const handlePizzaNameChange = (e: any) => {
    // tslint:disable-next-line: no-console
    console.log('setPizza: ', e.target.value);
    setPizza(e.target.value);
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    handleEatPizza(e);
  };

  const renderHeader = () => {
    return (
      <div className={headerContainerStyle()}>
        <h1># BrightSign</h1>
        <p>UI Template Project</p>
        <p>{pizzaState}</p>
        <form noValidate={true} autoComplete='off' onSubmit={onFormSubmit}>
          <div>
            <TextField
              required={true}
              id='standard-required'
              label='Pizza name'
              className={clsx(classes.margin, classes.textField)}
              onChange={handlePizzaNameChange}
            />
          </div>
          <div>
            <Button
              type='submit'
              variant='contained'
              className={clsx(classes.margin)}
            >
              Eat Pizza
            </Button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className={containerStyle}>
      {renderHeader()}
    </div>
  );
};

// -----------------------------------------------------------------------
// Container
// -----------------------------------------------------------------------

const mapStateToProps = (state: any): Partial<TemplateProps> => {
  return {
    color: 69
  };
};

export const Template = connect(mapStateToProps)(TemplateComponent);
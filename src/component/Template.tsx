import * as React from 'react';
import { connect } from 'react-redux';
import { style } from 'typestyle';
import * as csstips from 'csstips';

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
    backgroundColor: 'black',
    color: 'white',
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

export class TemplateComponent extends React.Component<TemplateProps> {

  renderHeader() {
    return (
      <div className={headerContainerStyle()}>
        <h1># BrightSign</h1>
        <p>UI Template Project</p>
      </div>
    );
  }

  render() {
    return (
      <div className={containerStyle}>
        {this.renderHeader()}
      </div>
    );
  }
}

// -----------------------------------------------------------------------
// Container
// -----------------------------------------------------------------------

const mapStateToProps = (state: any): Partial<TemplateProps> => {
  return {
    color: 69
  };
};

export const Template = connect(mapStateToProps)(TemplateComponent);
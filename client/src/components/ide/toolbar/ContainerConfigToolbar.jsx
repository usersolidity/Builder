import React, { Component } from 'react';
import SaveToolbar from './SaveToolbar';
import SVG from '../../SVG';
import { READ_THE_DOCS } from '../../../config';

class ContainerConfigToolbar extends Component {
  render() {
    return (
      <React.Fragment>
        <SaveToolbar />
        <li className="docs">
          <a href={`${READ_THE_DOCS}/content.html`} target="_blank">
            <SVG name="book" />
            <div> Stage Container Docs </div>
          </a>
        </li>
      </React.Fragment>
    )
  }
}

export default ContainerConfigToolbar;
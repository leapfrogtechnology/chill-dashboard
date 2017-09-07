import React from 'react';
import PropTypes from 'prop-types';

const ProjectRow = props => (
  <div className={`col-lg-2 col-sm-6 `}>
    <div className="circle-tile ">
      <a href="#">
        <div
          className={`circle-tile-heading ${props.index % 2 === 0
            ? 'circle-tile-even'
            : 'circle-tile-odd'}`}
        >
          <i className="fa fa-money fa-fw fa-3x" />
        </div>
      </a>
      <div
        className={`circle-tile-content ${props.index % 2 === 0
          ? 'circle-tile-even'
          : 'circle-tile-odd'}`}
      >
        <div className="circle-tile-description text-faded"> {props.name}</div>
        <div className="circle-tile-number text-faded">5</div>
        <a href="#" className="circle-tile-footer">
          View Services <i className="fa fa-chevron-circle-right" />
        </a>
      </div>
    </div>
  </div>
);

ProjectRow.propTypes = {
  index: PropTypes.index,
  name: PropTypes.string
};
export default ProjectRow;

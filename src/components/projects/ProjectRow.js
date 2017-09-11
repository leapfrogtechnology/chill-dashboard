import React, { Component } from "react";
import PropTypes from "prop-types";
import * as projectServices from "../../services/projectServices";

class ProjectRow extends Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      name: ""
    };
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onDeleteClick(id) {
    projectServices.remove(id);
  }

  onEditClick(id) {
    this.setState({
      isEditing: true
    });
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  onSaveClick(id, name) {
    let data = {
      name: name,
      description: "Another description",
      isComplete: true
    };

    projectServices.update(id, data);
  }

  render() {
    return (
      <div className={`col-lg-2 col-sm-6 `}>
        <div className="circle-tile ">
          <div
            className={`circle-tile-heading ${this.props.index % 2 === 0
              ? "circle-tile-even"
              : "circle-tile-odd"}`}
          >
            <i className="fa fa-money fa-fw fa-3x" />
          </div>

          <div
            className={`circle-tile-content ${this.props.index % 2 === 0
              ? "circle-tile-even"
              : "circle-tile-odd"}`}
          >
            <div className="circle-tile-description text-faded">
              {this.state.isEditing ? (
                <div>
                  <input
                    type="text"
                    defaultValue={this.props.name}
                    onChange={this.handleChange}
                    className="inputfile"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      this.onSaveClick(this.props.id, this.state.name)}
                    className="inputfile"
                  >
                    save
                  </button>
                  <button type="button" className="inputfile">
                    cancle
                  </button>
                </div>
              ) : (
                <div>Project:</div>
              )}

              {this.props.name}
            </div>
            <div className="circle-tile-number text-faded">5</div>
            <button
              type="button"
              onClick={() => this.onDeleteClick(this.props.id)}
            >
              DELETE
            </button>
            <button
              type="button"
              onClick={() => this.onEditClick(this.props.id)}
            >
              EDIT
            </button>
            <a href="#" className="circle-tile-footer">
              View Services <i className="fa fa-chevron-circle-right" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ProjectRow.propTypes = {
  index: PropTypes.index,
  name: PropTypes.string,
  id: PropTypes.index
};
export default ProjectRow;

import React, { Component } from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
  render() {
    const { title, body } = this.props;

    if (!title) {
      return null;
    }

    return (
      <div data-test="listItemComponent">
        <h2 data-test="title">{title}</h2>
        <div data-test="body">{body}</div>
      </div>
    );
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

export default ListItem;

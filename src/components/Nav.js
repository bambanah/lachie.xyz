import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Nav extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <nav>
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>Projects</button>
          </li>
          <li>
            <button>GitHub</button>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

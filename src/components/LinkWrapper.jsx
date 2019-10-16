import React, { Component } from "react";

function Links(props) {
  const link_content = props.content;

  const listItems = link_content.map(link => (
    <li key={link.url}>
      <a href={link.url} style={{ color: link.color }}>
        {link.name}
      </a>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default class LinkWrapper extends Component {
  render() {
    return (
      <div className="link-wrapper">
        <div className="wrapper-title">{this.props.title}</div>
        <div className="wrapper-body col">
          <Links content={this.props.content} />
        </div>
      </div>
    );
  }
}

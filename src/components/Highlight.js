import React, { Component } from "react";
import hljs from "highlight.js/lib/highlight";
import "highlight.js/styles/github.css";
import css from "highlight.js/lib/languages/css";

hljs.registerLanguage("css", css);

class Highlight extends Component {
  constructor(props) {
    super(props);
    this.nodeRef = React.createRef();
  }

  componentDidMount() {
    this.highlight();
  }

  componentDidUpdate() {
    this.highlight();
  }

  highlight = () => {
    if (this.nodeRef) {
      const nodes = this.nodeRef.current.querySelectorAll("pre");
      nodes.forEach((node) => {
        hljs.highlightBlock(node);
      });
    }
  };

  render() {
    const { content } = this.props;
    return (
      <div
        ref={this.nodeRef}
        dangerouslySetInnerHTML={{ __html: content }}
        className="highlight"
      />
    );
  }
}

export default Highlight;

import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";

// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import "froala-editor/js/plugins/image.min.js";
import "froala-editor/js/plugins/font_size.min.js";
import "froala-editor/js/plugins/char_counter.min.js";
import "froala-editor/js/plugins/align.min.js";
import "froala-editor/css/plugins/image.min.css";
import "froala-editor/css/plugins/char_counter.min.css";

// Require Font Awesome.
import "font-awesome/css/font-awesome.css";

import FroalaEditor from "react-froala-wysiwyg";

// Include special components if required.
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
import FroalaEditorButton from "react-froala-wysiwyg/FroalaEditorButton";
import FroalaEditorImg from "react-froala-wysiwyg/FroalaEditorImg";
import FroalaEditorInput from "react-froala-wysiwyg/FroalaEditorInput";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: "",
      title: "<h2></h2>"
    };
  }

  handleTitleChange = title => {
    this.setState({
      title
    });
  };

  handleModelChange = model => {
    this.setState({
      model: model
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.model);
  };

  render() {
    return (
      <div className="Create">
        <NavBar fixed="top" theme="elpheba">
          <NavBar.Marque href="/blog">Sterling | Blog</NavBar.Marque>
          <NavBar.Collapse>
            <NavBar.Navigation>
              <NavBar.NavItem href="/#about-me">About Me</NavBar.NavItem>
              <NavBar.NavItem href="/#projects">Projects</NavBar.NavItem>
              <NavBar.NavItem href="/#connect">Connect</NavBar.NavItem>
              <NavBar.NavItem href="/create">Create</NavBar.NavItem>
              <NavBar.NavItem href="/">Home</NavBar.NavItem>
            </NavBar.Navigation>
          </NavBar.Collapse>
        </NavBar>
        <form onSubmit={e => this.handleSubmit(e)}>
          <textarea />
          <FroalaEditor
            tag="textarea"
            model={this.state.title}
            onModelChange={e => this.handleTitleChange(e)}
            config={{
              initOnClick: true,
              placeholderText: "Edit Blog Title",
              charCounterCount: true,
              toolbarBottom: true,
              fontSizeSelection: true,
              fontSizeDefaultSelection: "24",
              fontSize: ["24"],
              attribution: false,
              imageInsertButtons: []
            }}
          />
          <FroalaEditor
            tag="textarea"
            model={this.state.model}
            onModelChange={e => this.handleModelChange(e)}
            config={{
              initOnClick: true,
              placeholderText: "Edit Your Content Here!",
              charCounterCount: true,
              toolbarBottom: true,
              fontSizeSelection: true,
              imageInsertButtons: ["imageByURL"],
              imagePaste: true,
              attribution: false
            }}
          />
          <FroalaEditorImg config={{}} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Create;

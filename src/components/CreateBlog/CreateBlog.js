import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "font-awesome/css/font-awesome.css";
import FroalaEditor from "react-froala-wysiwyg";
// Include special components if required.
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
import FroalaEditorButton from "react-froala-wysiwyg/FroalaEditorButton";
import FroalaEditorImg from "react-froala-wysiwyg/FroalaEditorImg";
// import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';
import "./CreateBlog.css";

class CreateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }
  updateContent = event => {
    event.preventDefault();
    console.log(event.target);
  };
  render() {
    console.log(this.state.content);
    return (
      <div className="CreateBlog">
        <NavBar fixed="top">
          <NavBar.Marque href="/blog">Sterling | Blog</NavBar.Marque>
          <NavBar.Collapse>
            <NavBar.Navigation>
              <NavBar.NavItem href="/">Home</NavBar.NavItem>
              <NavBar.NavItem href="/projects">Projects</NavBar.NavItem>
              <NavBar.NavItem href="/about">About Me</NavBar.NavItem>
              <NavBar.NavItem href="/create">Create</NavBar.NavItem>
            </NavBar.Navigation>
          </NavBar.Collapse>
        </NavBar>
        <form>
          <FroalaEditor tag="textarea" id="the-words" />
          <button type="submit">Submit</button>
        </form>
        <FroalaEditorView />
        <div className="editArea">{this.state.content}</div>
      </div>
    );
  }
}

export default CreateBlog;

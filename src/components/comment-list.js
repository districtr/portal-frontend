import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";

const Filter = require('bad-words'),
    wordfilter = new Filter();

export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);

    this.state = {
      tutorials: [],
      postName: "",
      postLink: "",
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  retrieveTutorials() {
    TutorialDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data.concat(["a"])
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return <div>
      <h2>Comments</h2>
      <ul>
        {this.state.tutorials.map((t, idx) => <li key={idx}>
          <a href={(t.description && t.description.includes("http")) ? t.description : "#"}>
            {wordfilter.clean(t.title || "No Comments / Untitled")}
          </a>
        </li>)}
      </ul>
      <a class="btn btn-success" href="/upload">Post a Comment</a>
    </div>
  }
}

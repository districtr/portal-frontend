import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.saveTutorial = this.saveTutorial.bind(this);

    this.state = {
      tutorials: [],
      postName: "",
      postLink: "",
    };
  }

  saveTutorial(e) {
    e.target.disabled = true;
    e.target.innerText = "Posting...";

    let data = {
      title: this.state.postName,
      description: this.state.postLink,
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          submitted: true
        });
        window.location.href = "/comment";
      })
      .catch(e => {
        console.error(e);
      });
  }

  render() {
    return <div>
      <h3>Post a Comment</h3>
      <p>
        Submit a comment for review. If your comment passes quality standards,
        it will be visible on our public comments site.
      </p>
      <i>This demo page currently accepts only links and text comments.
        File uploads will be added in the near future.
      </i>
      <div className="form">
        <div className="form-group">
          <label className="form-label">Region</label>
          <br/>
          <select>
            <option value="state">Statewide</option>
            <option value="r1">Central Region</option>
            <option value="r2">Region 2</option>
            <option value="r3">Region 3</option>
            <option value="r4">Region 4</option>
            <option value="r5">Region 5</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            autoComplete="off"
            autofill="off"
            onChange={e => this.setState({ postName: e.target.value })}
            required
            value={this.state.postName}/>
        </div>
        <div className="form-group">
          <label className="form-label">Link (optional)</label>
          <input
            type="text"
            name="link"
            className="form-control"
            placeholder="https://"
            autoComplete="off"
            autofill="off"
            onChange={e => this.setState({ postLink: e.target.value })}
            value={this.state.postLink}/>
        </div>
        <div className="form-group">
          <label className="form-label">Comments</label>
          <textarea className="form-control" name="txt" autoComplete="off" autofill="off"></textarea>
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary"
            onClick={this.saveTutorial}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  }
}

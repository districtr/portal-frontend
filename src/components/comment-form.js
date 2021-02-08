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
      <h2>Post a Comment</h2>
      <p>
        Welcome to the <a href="#">Ohio Citizens Redistricting Commission</a> public input portal.
        Tell the CRC what’s important to you! You can do so with written testimony,
        by submitting a Community of Interest map, or by drawing your own districting plan.
      </p>
      <p>
        A Community of Interest (COI) is an area where residents are united by a common
        interest that could be affected by legislation. Interests can be, for example,
        social, cultural, economic, ethnic, environmental, or historical. By identifying
        COIs, districters will know which areas are important to keep whole in a district.
      </p>
      <p>
        Districting plans are maps of Congressional, State Legislative, or other districts.
        Federal law requires that all districting plans have very close to equal population
        per district and that they do not prevent minority groups from electing candidates of choice.
      </p>
      <i>
        If your comment passes quality standards,
        it will be visible on our public comments site.
      </i>
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
          <div className="input-group">
            <input
              type="text"
              name="first"
              className="form-control"
              autoComplete="off"
              autofill="off"
              onChange={e => this.setState({ postName: e.target.value })}
              placeholder="First/Personal"
              required
              value={this.state.postName}/>
            <input
              type="text"
              name="last"
              className="form-control"
              autoComplete="off"
              autofill="off"
              onChange={e => this.setState({ lastName: e.target.value })}
              placeholder="Last/Family"
              required
              value={this.state.lastName}/>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Pronouns</label>
          <input name="pronouns" type="text" className="form-control"
            autoComplete="off" autofill="off"
            />
        </div>
        <div className="form-group">
          <label className="form-label">E-mail address</label>
          <input name="email" type="email" className="form-control"
            autoComplete="off" autofill="off"
            />
        </div>
        <div className="form-group">
          <label className="form-label">Residence</label>
          <div className="input-group">
            <input
              type="text"
              name="place"
              className="form-control"
              autoComplete="off"
              autofill="off"
              placeholder="Place"/>
            <input
              type="text"
              name="state"
              className="form-control"
              autoComplete="off"
              autofill="off"
              placeholder="State"/>
          </div>
        </div>
        <hr/>
        <strong>What are you submitting?</strong>
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
          <label className="form-label">Written testimony</label>
          <textarea className="form-control" name="txt" autoComplete="off" autofill="off"></textarea>
        </div>
        <div className="form-group">
          <label className="form-label">File Upload (optional)</label>
          <input className="form-control" type="file" id="formFile"/>
        </div>
        <hr/>

        <strong>Are you submitting on behalf of an organization? Are you submitting on behalf of others?</strong>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            Yes
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label class="form-check-label" for="flexRadioDefault1">
            No
          </label>
        </div>
        <hr/>

        <strong>Is there anything else you would like the Ohio Community Commission to know?</strong>
        <div className="form-group">
          <textarea className="form-control">
          </textarea>
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

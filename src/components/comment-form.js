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
      videoLink: "",
      selectMode: -1,
      selectName: "",
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
    const regions = [
      'Appalachia Region (Athens, Zanesville)',
      'Central Region (Columbus/Delaware Co.)',
      'Cincinnati and Dayton',
      'Greater Cleveland',
      'Northeast-Central Region (Akron, Canton, Youngstown)',
      'Northwest Region (Toledo)',
    ];

    const cities = [
      'Akron',
      'Canton',
      'Cincinnati',
      'Cleveland',
      'Columbus',
      'Dayton',
      'Euclid',
      'Lima',
      'Mansfield',
      'Portsmouth',
      'Toledo',
      'Youngstown',
    ];

    return <div>
      <h2>Submit a Public Comment</h2>
      <p>
        Welcome to the <a href="#">Ohio Citizens Redistricting Commission</a> public input portal.
        Tell the OCRC what’s important to you! You can do so with written testimony,
        by submitting a Community of Interest map, or by drawing your own districting plan.
      </p>
      <p>
        A Community of Interest (COI) is an area where residents are united by a common
        interest that could be affected by legislation. Interests can be, for example,
        social, cultural, economic, ethnic, environmental, or historical. By identifying
        COIs, districters will know which areas are important to keep whole in a district.
      </p>
      <p style={{display:"none"}}>
        Districting plans are maps of Congressional, State Legislative, or other districts.
        Federal law requires that all districting plans have very close to equal population
        per district and that they do not prevent minority groups from electing candidates of choice.
      </p>
      <i style={{display:"none"}}>
        If your comment passes quality standards,
        it will be visible on our public comments site.
      </i>
      <i>This demo page currently accepts only links and text comments.
        File uploads will be added in the near future.
      </i>
      <div className="form">
        <div className="form-group">
          <label className="form-label">Mapped Location</label>
          <br/>
          <div className="input-group">
            <button
              className={"btn " + (this.state.selectMode === 0 ? "btn-primary" : "btn-outline-secondary")}
              type="button"
              onClick={e => this.setState({ selectMode: 0 })}
            >Statewide</button>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <button
              className={"btn dropdown-toggle " + (this.state.selectMode === 1 ? "btn-primary" : "btn-outline-secondary")}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >{this.state.selectMode === 1 ? this.state.selectName : "Region"}</button>
            <ul className="dropdown-menu">
              {regions.map((r, idx) => <li key={idx}>
                <a href="#" className="dropdown-item" onClick={e => {
                  setTimeout(() => this.setState({ selectMode: 1, selectName: r }),
                    250);
                }}>
                  {r}
                </a>
              </li>)}
            </ul>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <button
              className={"btn dropdown-toggle " + (this.state.selectMode === 2 ? "btn-primary" : "btn-outline-secondary")}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >{this.state.selectMode === 2 ? this.state.selectName : "City"}</button>
            <ul className="dropdown-menu">
              {cities.map((r, idx) => <li key={idx}>
                <a href="#" className="dropdown-item" onClick={e => {
                  setTimeout(() => this.setState({ selectMode: 2, selectName: r }),
                    250);
                }}>
                  {r}
                </a>
              </li>)}
            </ul>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <input
              type="text"
              name="regionName"
              className="form-control"
              autoComplete="off"
              autofill="off"
              placeholder="Other"
              style={{maxWidth:200}}
            />
          </div>
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
              name="city"
              className="form-control"
              placeholder="Place"/>
            <input
              type="text"
              name="state"
              className="form-control"
              placeholder="State"/>
            <input
              type="text"
              name="zipcode"
              size="5"
              maxLength="5"
              className="form-control"
              style={{maxWidth:100}}
              placeholder="ZIP"/>
          </div>
        </div>
        <hr/>
        <strong>What are you submitting?</strong>
        <div className="form-group">
          <label className="form-label">Districtr Link (optional)</label>
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
          <label className="form-label">Video Link (optional)</label>
          <input
            type="text"
            name="video-link"
            className="form-control"
            placeholder="https://"
            autoComplete="off"
            autofill="off"
            onChange={e => this.setState({ videoLink: e.target.value })}
            value={this.state.videoLink}/>
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

        <strong>Are you submitting on behalf of an organization?</strong>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Yes
          </label>
          <br/>
          <label>Organization</label>&nbsp;&nbsp;
          <input type="text" name="org-name"/>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            No
          </label>
        </div>
        <hr/>

        <strong>Is there anything else you would like the Ohio Citizens Redistricting Commission to know?</strong>
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

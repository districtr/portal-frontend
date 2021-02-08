import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return <div>
      <h1>Welcome</h1>
      <img
        src="/Flag_of_Ohio.png"
        alt="Flag of Ohio"
        style={{float:"right", width: 200, margin: 20}}
      />
      <p>
        We are working together to map the future of Ohio.
      </p>
      <p>
        In 2021, the <strong>Ohio Citizens' Redistricting Commission</strong> works with residents
        and community organizations to draw districts. This affects your elections for
        US Congress, the General Assembly (State Senate and State House), and local government.
      </p>
      <p>
        During the public comment phase, your input informs map-drawers about neighborhoods,
        communities, and your interests.
      </p>
      <h2>How to comment</h2>
      Share your redistricting plans and community-of-interest maps, in any of these formats
      <ul>
        <li>Plans from redistricting and mapping sites (links)</li>
        <li>Scans, digital drawings, documents, etc. (files)</li>
        <li>Written comments</li>
      </ul>
      <a class="btn btn-success" href="/upload">Post a Comment</a>
    </div>
  }
}

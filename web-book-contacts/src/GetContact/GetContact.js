import React, { Component } from 'react';

class GetContact extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const {  getAccessToken } = this.props.auth;

    fetch('http://127.0.0.1:3010/api/private',
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + getAccessToken(),
        },
        body: JSON.stringify({ sub: this.state.profile.sub }),
      })
      .then(res => res.text())
      .then(console.log)

    return (
      <div>
        <div>
         puribum
        </div>
      </div>
    );
  }
}

export default GetContact;

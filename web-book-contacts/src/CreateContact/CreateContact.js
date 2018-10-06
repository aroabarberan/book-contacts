import React from "react";

class CreateContact extends React.Component {
  constructor() {
    super()
    // this.state = {
    //   profile: {},
    //   contacts: [{
    //     user: '',
    //     name: '',
    //     phone: ''
    //   }]
    // }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }
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
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  submit(evt) {
    evt.preventDefault();
    const { name, phone } = this.state;
    this.setState(({ contacts }) => ({ contacts: [...contacts, { name, phone }] }));
  }

  render() {
    return (
      <div>
        <h2>Create Contact</h2>
        <form onSubmit={this.submit}>
          <div>
            <label>Name</label>
            <input type="text" name='name' onChange={this.handleChange} />
          </div>
          <div>
            <label>Phone</label>
            <input type="text" name='phone' onChange={this.handleChange} />
          </div>
          <button>Send</button>
        </form>
        {/* <div>
          {this.state.friends.map((f, i) =>
            <div key={i}>
              <p>Name: {f.name}</p>
              <p>Last name: {f.last_name}</p>
              <p>Phone: {f.phone}</p>
            </div>
          )}
        </div> */}
      </div>
    )
  }
}
export default CreateContact;

import React from 'react'

class FetchUsers extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    const url = 'https://randomuser.me/api?results=10'
    fetch(url)
      .then(r => r.json())
      .then(data => {
        this.setState({
          users: data.results
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <div key={user.login.uuid}>
            <img
              src={user.picture.thumbnail}
              alt='user img'
            />
            {user.name.first} {user.name.last} {user.email}
          </div>
        ))}
      </div>
    )
  }
}

export default FetchUsers

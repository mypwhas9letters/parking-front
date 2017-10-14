import React from 'react'

class Search extends React.Component{
  render() {
    return (
      <div className="ui container">
        <div className="ui borderless main menu">
          <div className="ui icon input">
            <input type="text" placeholder="Address"/>
            <i className="search icon"></i>
          </div>
          <div className="ui icon input">
            <input type="text" placeholder="Start Date"/>
            <i className="search icon"></i>
          </div>
          <div className="ui icon input">
            <input type="text" placeholder="End Date"/>
            <i className="search icon"></i>
          </div>
        </div>
      </div>

    )
  }
}

export default Search

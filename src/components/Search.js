import React from 'react'

class Search extends React.Component{
  render() {
    return (
      <div>
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
    )
  }
}

export default Search

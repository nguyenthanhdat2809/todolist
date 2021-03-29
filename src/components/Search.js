import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: ""
    }
  }

  onChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;

    this.setState({
      [name]: value
    })
  }

  onSearch = () => {
    this.props.onSearch(this.state.keyWord)
  }

  render() {
    var { keyWord } = this.state;
    return (
      <div className="input-group ml-15">
        <input
          type="text"
          className="form-control"
          placeholder="Nhập từ khóa..."
          name="keyWord"
          value={keyWord}
          onChange={this.onChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button" onClick={this.onSearch}>
            <span className="fa fa-search mr-5" />
            Tìm
          </button>
        </span>
      </div>
    );
  }
}

export default Search;

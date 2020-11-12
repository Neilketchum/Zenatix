import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
export class SearchString extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body:""
        };
    
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        // const postItems = 
        return (
            <div>
                <input type = 'text' name = 'body' value = {this.state.body} onChange = {this.onChange}></input>
                {
                    this.props.strings.filter(name => name.includes(this.state.body)).map(filteredName => (
                        <li>
                          {filteredName}
                        </li>
                      ))
                }
            </div>
        )
    }
}
SearchString.propTypes = {
  
    strings: PropTypes.array.isRequired,
    
  };
  
  const mapStateToProps = state => ({
        strings : state.AddString.strings
  });
  
export default connect(mapStateToProps)(SearchString)

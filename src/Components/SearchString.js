import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Styles/SearchString.css'
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
    getHighlightedText(text, highlight) {
        // Split text on highlight term, include term itself into parts, ignore case
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span>{parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <b>{part}</b> : part)}</span>;
    }
    render() {
        // const postItems = 
        return (
            <div>
                <input type = 'text' name = 'body' value = {this.state.body} onChange = {this.onChange}></input>
                {
                    this.props.strings.filter(name => name.toLowerCase().includes(this.state.body.toLowerCase())).map(filteredName => (
                        <li>
                            {this.getHighlightedText(filteredName,this.state.body)}
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

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Styles/SearchString.css'
export class SearchString extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        };

        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    getHighlightedText(text, highlight) {

        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span>{parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <b className="searchString__highlight">{part}</b> : part)}</span>;
    }
    render() {

        return (
            <div className = "searchString">
                <input type='text' name='body' className = "searchString__input" value={this.state.body} onChange={this.onChange} ></input>
                {
                    this.props.strings.filter(name => name.toLowerCase().includes(this.state.body.toLowerCase())).map(filteredName => (
                        <div className = "searchString__result">

                             { 
                                this.state.body.length>0?
                                this.getHighlightedText(filteredName, this.state.body):filteredName
                             }
                         </div>   
    
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
    strings: state.AddString.strings
});

export default connect(mapStateToProps)(SearchString)

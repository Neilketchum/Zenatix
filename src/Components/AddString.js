import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {addString} from '../Actions/stringAction'
export class AddString extends Component {
    constructor(props) {
        super(props);
        this.state = {
          body: ""
        };
    
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });

    }
      handleSubmit(e){
        e.preventDefault();
        var a = this.state.body
        console.log(this.props)
        this.props.addString(a);
      }
     
    render() {
      
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>String: </label>
                    <br />
                    <input
                    type="text"
                    name="body"
                    onChange={this.onChange}
                    value={this.state.body}
                    />
                    <button type = 'submit'>Add String</button>
                  </form>
                
            </div>
        )
    }
}
AddString.propTypes = {
    addString: PropTypes.func.isRequired
  };
export default connect(null,{addString})(AddString)

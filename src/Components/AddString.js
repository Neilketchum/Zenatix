import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import './Styles/AddString.css'
import { addString } from '../Actions/stringAction'
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
  handleSubmit(e) {
    e.preventDefault();
    this.setState({body:""})
    var a = this.state.body
    console.log(this.props)
    this.props.addString(a);
  }

  render() {

    return (
      <div className='addString'>
          <form onSubmit={this.handleSubmit}>
            <div class="input-field">
              <input type="text" id="name" required 
                name="body"
                onChange={this.onChange}
                value={this.state.body} 
                className = 'addString__input'/>
              <label for="name">Add Word:</label>
            </div>
            <button class = 'addString__btn' type='submit'>Add String</button>
          </form>
         
      

      </div>
    )
  }
}
AddString.propTypes = {
  addString: PropTypes.func.isRequired
};
export default connect(null, { addString })(AddString)

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
export class SearchString extends Component {

    render() {
        const postItems = this.props.strings.map((str,index) => (
            <div key={index}>
              <h3>{str}</h3>
            </div>
          ));
        return (
            <div>
                {postItems}
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

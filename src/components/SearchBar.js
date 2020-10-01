import React from 'react';

export default class SearchBar extends React.Component{
  _onInputChange = (event) => {
    this.setState({term:event.target.value})
  }

  _onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  constructor(props){
    super(props);
    this.state ={
      term:'',
    }
  }

  render(){
    return(
      <div className='ui segment'>
        <form onSubmit={this._onFormSubmit} className='ui form' >
          <div className='field'>
            <label>Search Image</label>
            <input 
            placeholder='Typing some text ...' 
            value={this.state.term} 
            onChange={this._onInputChange}
            type="text"/>
          </div>
          <label style={this.state.term.length < 4 ? {color:'red'} : {display:"none"}} >Warning</label>
        </form>
      </div>
    )
  }
}
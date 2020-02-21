import React from  'react';
import {connect} from 'react-redux';
import readTodo from './redux/actions/index';

class Home extends React.Component {
    state = {
      userId: '',
      id: '',
      title: '',
      completed: false
    };
  
    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
  
    onSubmit = e => {
        e.preventDefault();
        console.log('todo values submitted')
        this.props.dispatch(readTodo())
    }
        
  
    render() {
      return (
        <div>
          <form>
            <h2>Todo Form</h2>
            <label htmlFor="userId">
              userId:{' '}
              <input
                type="text"
                id="userId"
                name="userId"
                value={this.state.userId}
                onChange={this.onChange}
              />
            </label>
            <br />
  
            <label>
              id:{' '}
              <input
                type="text"
                id="id"
                name="id"
                value={this.state.id}
                onChange={this.onChange}
              />
            </label>
            <br />
  
            <label>
              title:{' '}
              <input
                type="text"
                id="title"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </label>
            <br />
  
            <label>
              completed:{' '}
              <input
                type="text"
                id="completed"
                name="completed"
                value={this.state.completed}
                onChange={this.onChange}
              />
            </label>
            <br />
  
            <button type="button" onClick={this.onSubmit}>
              Submit
            </button>
          </form>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
      return{
    result:state.todo.result
  }
}
  
  export default connect(mapStateToProps)(Home);
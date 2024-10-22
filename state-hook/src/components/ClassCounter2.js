import React, { Component } from 'react'


class ClassCounter2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      name:'',
    }
  }

  componentDidMount(){
    document.title =  `Clicked ${this.state.count} times`
  }

  componentDidUpdate(prevProps, prevState){
    if(!(prevState.count === this.state.count))
    console.log('Updating the doc title')
    document.title =  `Clicked ${this.state.count} times`
  }


  render() {
    return (
      <div>
        ClassCounter2
        <input type="text" value={this.state.name} onChange={(event) =>{
          return this.setState({name: event.target.value});
        }} />
        <button onClick={()=>{
          return this.setState({
            count: this.state.count +1
            })
          }}>
          Click {this.state.count} times
        </button>
      </div>
    )
  }
}

export default ClassCounter2
import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(), time:7,showtime:true};
      

    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID); 
    }

    componentDidUpdate() {    
        if (this.state.time === 0){
          this.componentWillUnmount()      
        }
      }
    
  
    tick() {
      this.setState({
        date: new Date(), time:this.state.time-1
      });
    }
  
    render() {
      return (
        <div style={{margin: "0 auto", textAlign:"center"}}>
          <h2>Sekarang Jam : {this.state.date.toLocaleTimeString()}.</h2>
          <h2>Hitung mundur : {this.state.time}</h2>
        </div>
      );
    }
  }

export default Clock

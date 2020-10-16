import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        time:7,
        showtime:true};
      

    }
  
    componentDidMount() {
      if (this.props.start !== undefined) {
        this.setState({time: this.props.start})
      }
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID); 
    }

    componentDidUpdate() {    
      if (this.state.showtime === true){
        if (this.state.time <= 0){
          this.setState({showtime: false})
        }
      }
    }
  
    tick() {
      this.setState({
        date: new Date(), time:this.state.time-1
      });
    }
  
    render() {
      return (
        <>
        {
          this.state.showtime && (        
        <div style={{margin: "0 auto", textAlign:"center"}}>
          <h2>Sekarang Jam : {this.state.date.toLocaleTimeString()}.</h2>
          <h2>Hitung mundur : {this.state.time}</h2>
        </div>
      )}
      </>
      );
    }
  }

export default Clock

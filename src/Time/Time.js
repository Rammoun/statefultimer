import React from 'react';
import './Time.css';

const timeMs=98704939;


class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { // initialise a state object
      timer: timeMs,
      isOn: false
    }    
      // this function will increment the timer every 1 second

      setInterval(()=>
              {
              if(this.state.isOn===true)
              
              {
                this.setState({ 
                timer: this.state.timer + 1000  
                       
              })}
              //start()
           }  , 1000);
  
  
 }
      starttimer=()=>{
        if(this.state.isOn===false){ 
          this.setState({isOn:true});
          document.getElementById('strt').textContent="Stop";
        }
        else {
          this.setState({isOn:false});
          document.getElementById('strt').textContent="Start";}
            }
        
      reset=()=>{
        this.setState({timer: 0 ,
          isOn:false
       })
      }
      
   
  convert=(ms)=>{
    var timeS=ms/1000;
        var timeM=timeS/60;
        var timeH=Math.round(timeM/60).toString();
        timeM=Math.round(timeM%60).toString();
        timeS=Math.round(timeS%60);
        timeH = (timeH < 10) ? "0" + timeH + ":" : timeH + ":";
        timeM = (timeM < 10) ? "0" + timeM + ":"  : timeM + ":";
        timeS = (timeS < 10) ? "0" + timeS : timeS;
        return(timeH+timeM+timeS)
  }
  render() { // should be declared in the constructor
    console.log(this.state.isOn)
    return (
      <div >
      <h1>{this.convert(this.state.timer)}</h1>
      <div className='btns'>
        <button  className='strt' id='strt' onClick={this.starttimer}>Start</button>
        <button onClick={this.reset} className='rst'>Reset</button>
      </div>
      </div>
    );
  }
}  
 


/*const Time=(props)=>{
  return(
    <div className='full'>    
      {obj.map((tme)=><div className='part'><input type='text' value={tme.value} className='time'/><span className='title'>{tme.title}</span></div>)}      
      <div className='btns'>
        <button onClick={startstop} className='strt'>Start</button>
        <button onClick={reset} className='rst'>Reset</button>
      </div>
    </div>
    
  )
}*/


export default Timer;
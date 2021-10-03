import React, {useState} from 'react'
import './Agee.css'


const Age = () => {
    const [day, setday] = useState('')
    const [month, setmonth] = useState('')
    const [year, setyear] = useState('')
    const [newday, setnewday] = useState()
    const [newmonth, setnewmonth] = useState()
    const [newyear, setnewyear] = useState()
    
         
       
      const calculate = () =>{
        const current = new Date()
        const d1 = current.getDate();
        const d2 = 1 + current.getMonth();
        const d3 = current.getFullYear();
        const monts = [31,28,31,30,31,30,31,31,30,31,30,31];
    
        if(day > d1){
            d1 = d1 + monts[d2 -1];
            d2 = d2 - 1;
        }
         if( month>d2){
             d2 = d2 + 12;
             d3 = d3 - 1;
         }
         
          setnewday(d1 - day);
          setnewmonth(d2 - month);
           setnewyear (d3 - year);
           
          
    
      }
    

    
    return (
        <>
        <div className="bg">
            <div className="agebox">
                <div className="title">Age Calculator</div>
            <div className="input_value">
           <div className="date"> <p>date</p>
                <input input = { day} onChange= { (e)=>{ setday(e.target.value) }}  className="days" type="text" />
                </div> 
           <div className="Month"> <p>Month</p>
                <input input = {month } onChange= { (e)=>{setmonth(e.target.value )}} className="days" type="text" />
                </div> 
           <div className="Year"> <p>Year</p>
                <input input = {year } onChange= { (e)=>{setyear(e.target.value) }} className="days" type="text" />
                </div> 
                </div> 
                <div className="btn_sub">
                    <button onClick={calculate}  >Submit</button>
            </div>
             <div className="dis">
              
                 <p> {newyear} years {newmonth}month {newday} days </p>

              

              

             </div>
                </div>
              
        </div>
            
        </>
    )
}

export default Age;

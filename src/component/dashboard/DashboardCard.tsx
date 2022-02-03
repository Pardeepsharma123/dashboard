import React, { Fragment } from 'react';
import './DashboardCard.css'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
interface Props{
    title:string
}
const data_array=[
    {action:'Pending for Action',value:8,color:'lightgrey'},
    {action:'Under Review',value:6,color:'orange'},
    {action:'Reviewed',value:48,color:'green'},
]

const DashboardCard:React.FC<Props> = ({title}) => {
    const {action:p_action,value:p_value,color:p_color}=data_array[0]
    const {action:ur_action,value:ur_value,color:ur_color}=data_array[1]
    const {action:r_action,value:r_value,color:r_color}=data_array[2]
   
  return <Fragment>
       <div className='card'>
           <div className='card_container'>
           <div className='card_title'>{title}</div>
           <div className='card_body'>
               <div className='progress_bar'>
               <CircularProgressbarWithChildren
                        value={r_value}
                        styles={buildStyles({
                        pathColor: `${p_color}`,
                        trailColor: `${r_color}`,
                        strokeLinecap: "butt"
                        })}
                    >
                <div className='child'>
                <span>{p_value+r_value+ur_value}</span><br></br>
                <span>Assets</span>
                </div>
                {/* Foreground path */}
                <CircularProgressbar
                        value={p_value+ur_value}
                        styles={buildStyles({
                            pathColor: `${ur_color}`,
                            trailColor: "transparent",
                            strokeLinecap: "butt"
                        })}
                        className='crcl'
                />
         </CircularProgressbarWithChildren>
               </div>
               <div className='card_data'>
                   {data_array.map((data,index)=>(
                   <div key={index} className='data_item'>
                        <p>{data.action}</p>
                        <p style={{color:`${data.color}`,fontWeight:'bold'}}>{data.value}</p>
                   </div>
                   ))}
               </div>
           </div>
           </div>
           
        </div>
      </Fragment>
     
};

export default DashboardCard;

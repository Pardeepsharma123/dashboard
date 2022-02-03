import React, { Fragment } from 'react';
import DashboardCard from './DashboardCard';
import './DashboardCard.css'

interface Props{
    list:string[]
}
const DashboardList:React.FC<Props> = ({list}) => {
  return <Fragment>
      {list.map((list_item,index)=><div key={index} className='list_item'><DashboardCard title={list_item}/></div>)}
  </Fragment>;
};

export default DashboardList;

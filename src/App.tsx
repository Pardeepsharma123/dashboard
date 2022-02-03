import React,{useState} from 'react'
import MyDropzone from './component/dragdrop/MyDropzone';
import CommentModal from './component/message/CommentModal'
import DashboardCard from './component/dashboard/DashboardCard'
import DashboardList from './component/dashboard/DashboardList'

const assets_list=["Total Uploaded Assets","Data Changes","Data Quries","Provisinal Results"]

function App() {
  const [showCommentBox,setShowCommentBox]=useState(false)
  return (
    <div className="App">
     {/* <MyDropzone/> */}
     <CommentModal/>
     <DashboardList list={assets_list}/>
     {/* <DashboardCard title='Total Uploaded Assets'/> */}
    </div>
  );
}

export default App;

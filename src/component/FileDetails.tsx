import React, { Fragment } from "react";
import FileList from "./FileList";
import PropTypes from "prop-types";
import "./FileDetails.css";
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
interface Props{
fileInfo:{
  name: string;
}[];
deleteItem:Function,
setFileInfo:Function,
setFileUploaded:Function
}


const FileDetails:React.FC<Props> =({fileInfo, deleteItem, setFileInfo, setFileUploaded}) => {
  

  const handleChange = (e:any) => {
    
    const fileName = e.target.files[0];
    if (fileInfo.some((file) => file.name === fileName.name)) {
      alert("file already exists");
    } else {
      setFileInfo((prev:any) => [...prev, fileName]);
    }
  };
  // const handleChange = (event:Event) => {
  //   const target= event.target as HTMLInputElement;
  //   const fileName: File = (target.files as FileList)[0];
  //   console.log("file2=", fileName);
  //   //const fileName = e.target.files[0];
  //   if (fileInfo.some((file) => file.name === fileName.name)) {
  //     alert("file already exists");
  //   } else {
  //     setFileInfo((prev:any) => [...prev, fileName]);
  //   }
  // };
  return (
    <Fragment>
      <div className="main">
        <div className="outer_wrapper">
          <div className="top">
            <div className="top_left">
              <h3 className="title">Data Upload</h3>
              <p className="sub_title">
                {fileInfo.length} Files selected to upload
              </p>
            </div>
            <div className="top_right">
              <label htmlFor="files" className="browse_btn">
                Browse File
              </label>
              <input
                id="files"
                style={{ display: "none" }}
                type="file"
                onChange={(e) => handleChange(e)}
              />
              <button
                className="close_btn"
                onClick={() => setFileUploaded(false)}
              >
                x
              </button>
            </div>
          </div>
          <div className="inner_wrapper">
            <div className="heading_container">
              <div className="heading heading_left">File Name</div>
              <div className="heading heading_middle">Fund Name</div>
              <div className="heading heading_right">Include historic data</div>
            </div>
            {fileInfo.map((file) => (
              <div key={file.name}>
                <FileList file={file} deleteItem={deleteItem} />
              </div>
            ))}
          </div>

          <div className="bottom_wrapper">
            <PrimaryButton type="primary" text="Upload All" className='btn btn_active' />
            <DefaultButton type="default" text="Upload Selected" className="btn"/>
            <DefaultButton type="default" text="Cancel" className="btn"/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

FileDetails.propTypes = {
  fileInfo: PropTypes.array.isRequired,
};
export default FileDetails;

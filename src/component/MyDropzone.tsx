import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./MyDropzone.css";
import FileDetails from "./FileDetails";


const MyDropzone:React.FC = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileInfo, setFileInfo] = useState([{name:''}]);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles) {
      setFileUploaded(true);
      setFileInfo(acceptedFiles);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const deleteItem = (names:string) => {
    //fileInfo.filter((file) =>console.log(file))
     const newList = fileInfo.filter((file) => file.name !== names);
     setFileInfo(newList);
  };
  return (
    <>
      <h2>Upload Data</h2>

      <div className="drag_drop">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <i className="fad fa-upload"></i>
          )}
        </div>
        <p><strong>Click to upload</strong>, or drag and drop</p>
        <p>PPT, XLS, DOC or PDF (max. 10MB)</p>
      </div>
      {fileUploaded && fileInfo && (
        <FileDetails
          fileInfo={fileInfo}
          deleteItem={deleteItem}
          setFileInfo={setFileInfo}
          setFileUploaded={setFileUploaded}
        />
      )}
    </>
  );
};

export default MyDropzone;

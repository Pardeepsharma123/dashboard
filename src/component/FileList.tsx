import React, { Fragment, useState } from "react";
import { Dropdown, DropdownMenuItemType } from '@fluentui/react/lib/Dropdown';
import { Toggle } from "@fluentui/react/lib/Toggle";
import CheckBox from "../common/CheckBox";
import "./FileList.css";

interface Props{
  file:{
    name:string
  }
  deleteItem:Function,
  }

const options= [
  { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
  { key: 'apple', text: 'Apple' },
  { key: 'banana', text: 'Banana' },
  { key: 'orange', text: 'Orange', disabled: false }
];


const FileList:React.FC<Props> = ({ file, deleteItem }) => {
  const { name } = file;
  const [toggle, setToggle] = useState(false);
  const _onChange = () => {
    setToggle(!toggle);
  };
  return (
    <Fragment>
      <div className="file_list">
        <div className="left">
          <CheckBox />
          <span className="file_name">{name}</span>
        </div>
        <div className="middle">
          <Dropdown
          placeholder="Select an option"
          options={options}
          className='dropdown'
        />
        </div>
        <div className="right">
          <Toggle onChange={_onChange} className="toggle" />
          <i className="ms-Icon ms-Icon--Delete delete_icon" aria-hidden="true" onClick={()=>deleteItem(name)}></i>
        </div>
      </div>
    </Fragment>
  );
};


export default FileList;

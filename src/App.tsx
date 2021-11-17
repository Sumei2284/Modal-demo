import React, { FC, useState } from 'react';
import { Modal, Button, Tag, Checkbox, List } from 'antd';
import './App.css';

const msg = "you have to select at least one option.";let list_item = [""];

const App: FC = () => {
  
  //function and variables for Modal
  const [visiblestate,setVisiblestate] = useState(false);
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([""]);
  

  function showModal() {
    setVisiblestate(true);
  }
  const handleOk = () => {
    console.log('click ok');
    if(data.length > 0){
      setVisiblestate(false);
      console.log(data.toString());
      list_item.push(...data);
    }
  }
  const handleCancel = () => {
    console.log('click cancel');
    setData([""]);
    setVisiblestate(false);
  }

  //checkbox
  function onChange(checkedValues: any) {
    console.log('checked = ', ...checkedValues);
    setData(checkedValues);
    if(checkedValues.length > 0){
      console.log('bigger than 1');
      setStatus(true);
    }else{
      console.log('equals 0');
      setStatus(false);
    }
  }
  
  const plainOptions = ['Apple', 'Pear', 'Orange'];

  return (
    <div className="Layout">
      <div className="add_button">
        <Button type="primary" onClick={showModal}>Open</Button>
        <Modal
          title="Basic Modal"
          visible={visiblestate}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Checkbox.Group options={plainOptions} onChange={onChange} />
          <br />
          <Checkbox.Group options={data} onChange={onChange} />
          <br />
          <p className="msg">{(data.length===0) && msg}</p>
        </Modal>
      </div>
      <div className="show-data">
        {status &&
          <>
            <p>{data}</p>
            <List
            bordered
            dataSource={list_item}
            renderItem={item => (
              <List.Item>
                {item}
              </List.Item>
            )} />
          </>
          }
      </div>
  </div>
  )
};

export default App;
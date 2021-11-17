import React, { FC, useState } from 'react';
import { Modal, Button, Checkbox, List } from 'antd';
import styled from 'styled-components';
import './App.css';

const msg = "you have to select at least one option.";
let list_item = [""];
const plainOptions = ['Apple', 'Pear', 'Orange'];

const StyledCheckboxGroup = styled(Checkbox.Group)`
    display: flex;

    .ant-checkbox-group-item {
        .ant-checkbox {
            display: none;
        }

        span {
            padding: 10px;
            background-color: #F3F3F3;
            color: #000000;
            border-radius: 0.3rem;
            font-weight: normal;
            white-space: nowrap;
        }

        &.ant-checkbox-wrapper-checked {
            span {
                color: #FFFFFF;
                background-color: #2E63A3;
            }
        }
    }
`;

const App: FC = () => {
  
  //function and variables for Modal
  const [visiblestate,setVisiblestate] = useState(false);
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([""]);
  
  //Function of Modal
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
    setData([""]);
    setVisiblestate(false);
    setStatus(false);
  }

  //checkbox
  function onChange1(checkedValues: any) {
    console.log('checked = ', ...checkedValues);
    setData(checkedValues);
    if(checkedValues.length > 0){
      setStatus(true);
    }else{
      setStatus(false);
    }
  }

  function onChange2(checkedValues: any) {
    console.log('checked = ', ...checkedValues);
    setData(checkedValues);
    if(checkedValues.length > 0){
      setStatus(true);
    }else{
      setStatus(false);
    }
  }

  return (
    <div className="Layout">
      <div className="add_button">
        <Button type="primary" onClick={showModal}>Incert...</Button>
        <Modal
          title="Basic Modal"
          visible={visiblestate}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <StyledCheckboxGroup options={plainOptions} onChange={onChange1} />
          <br />
          <StyledCheckboxGroup options={data} onChange={onChange2} />
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



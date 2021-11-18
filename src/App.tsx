import React, { FC, useState } from 'react';
import { Modal, Button, Checkbox, List } from 'antd';
import styled from 'styled-components';
import './App.css';

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
  const msg = "you have to select at least one option.";
  const plainOptions = ['Apple', 'Pear', 'Orange'];let final_data: string[] = [];
  //function and variables for Modal
  const [visiblestate,setVisiblestate] = useState(false);
  const [upperdata, setUpperdata] = useState<string[]>([]);
  const [bottomdata, setBottomdata] = useState<string[]>([]);
  
  //Function of Modal
  function showModal() {
    setVisiblestate(true);
  }
  const handleOk = () => {
    merge();
    setVisiblestate(false);
  }
  const handleCancel = () => {
    setVisiblestate(false);
  }

  //checkbox
  function onChange1(checkedValues: any) {
    console.log('checked = ', ...checkedValues);
    setUpperdata(checkedValues);
  }
  function onChange2(checkedValues: any) {
    console.log('checked = ', ...checkedValues);
    setBottomdata(checkedValues);
  }

  //merge two data array
  function merge() {
    final_data = upperdata.concat(bottomdata);
    // console.log(final_data);
    console.log(upperdata.concat(bottomdata));
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
          <StyledCheckboxGroup options={upperdata} onChange={onChange2} />
          <br />
          <p className="msg">{(final_data.length===0) && msg}</p>
        </Modal>
      </div>
      <div className="show-data">
        {(final_data.length > 0) &&
          <>
            <List
              dataSource={final_data}
              renderItem={item => (
                <List.Item>
                  {item}
                </List.Item>
              )} 
            />
          </>
          }
      </div>
  </div>
  )
};

export default App;



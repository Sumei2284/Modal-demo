import React, { FC, useState } from 'react';
import { Modal, Button, Tag, Checkbox } from 'antd';
import './App.css';
//import HotTags from './components/HotTags';
const { CheckableTag } = Tag;

const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

const msg = "you have to select at least one option.";

const App: FC = () => {
  
  //function and variables for Modal
  const [visiblestate,setVisiblestate] = useState(false);
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([""]);
  const checkedValues = [""];
  
  function showModal() {
    setVisiblestate(true);
  }
  const handleOk = () => {
    console.log('click ok');
    if(data.length > 0){
      setVisiblestate(false);
    }else{

    }
    
  }
  const handleCancel = () => {
    console.log('click cancel');
    setData([""]);
    setVisiblestate(false);
  }
  //checkable tags
  //const tags = new HotTags();
  //show data

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
    //console.log(Object.prototype.toString.call(checkedValues));
  }
  
  const plainOptions = ['Apple', 'Pear', 'Orange'];

  return (
    <div className="Layout">
      <div>
        <Button type="primary" onClick={showModal}>Open</Button>
        <Modal
          title="Basic Modal"
          visible={visiblestate}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <HotTags />
          <br />
          <Checkbox.Group options={plainOptions} onChange={onChange} />
        </Modal>
      </div>
      <div className="show-data">
        {status &&
          <p>{data}</p>}
      </div>
  </div>
  )
};

export default App;

class HotTags extends React.Component {
  state = {
    selectedTags: ['']
  };

  handleChange(tag: string, checked: boolean) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', ...nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
    console.log(...nextSelectedTags);
  }

  render() {
    const { selectedTags } = this.state;
    return (
      <>
        {tagsData.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </>
    );
  }
}
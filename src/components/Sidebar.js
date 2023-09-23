import React  from 'react';
import StickyBox from "react-sticky-box";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div style={{display: "flex"}}>
    <StickyBox offsetTop={20} offsetBottom={20}>
      <Sidebar />
    </StickyBox>
    <div>Content</div>
  </div>
);
};
export default Sidebar;

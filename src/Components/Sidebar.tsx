import {
  BarsOutlined,
  HomeOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <BarsOutlined />
        <div className="action-logo">
          <HomeOutlined />
          <FileTextOutlined />
        </div>
        <p className="avatar">SA</p>
      </div>
    </div>
  );
};

export default Sidebar;

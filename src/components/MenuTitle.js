import "../styles/MenuTitle.scss";

const MenuTitle = () => {
  return (
    <div className="menu">
      <span className="title">financial dashboard</span>
      <div className="dashLine long"></div>
      <span className="specif">ux/ui</span>
      <div className="dashLine short"></div>
      <span className="specif">web</span>
    </div>
  );
};

export default MenuTitle;

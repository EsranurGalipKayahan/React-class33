import { Avatar } from "./components/Avatar";
import "./App.css";
import useTypeFinder from "./components/useTypeFinder";
import useScreenSize from "./components/useScreenSize";

function App() {
  const { avatarType, attrList } = useTypeFinder();
  const { windowSize } = useScreenSize();

  return (
    <div>
      <span>
        {windowSize.width}px / {windowSize.height}px
      </span>
      {Object.keys(avatarType).length !== 0 &&
        Object.keys(attrList).length !== 0 && (
          <div className="container">
            <div className="avatar">
              <Avatar name={avatarType.name} attrList={attrList} />
            </div>
            <div className="info">
              <span>
                You're seeing{" "}
                <em>
                  <b>{avatarType.name}</b>
                </em>
                , because your screen size is : <b>{avatarType.screenType}</b>
              </span>
              <span>
                <i className={avatarType.icon}></i>
              </span>
            </div>
          </div>
        )}
    </div>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
function Tabs(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <MainPane>
      
    <div className="header-menu">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          erview
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          annoucement
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          course content
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          bookmark
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Q&A
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          grade
        </button>
      </div>       
        
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2>Awarded By</h2>
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h3>Course Instructer</h3>
        </div>
      </div>
    </div> 
    </MainPane>
  );
  }
export default Tabs;
const MainPane = styled.div`
.header-menu{
}

`

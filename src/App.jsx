import Nav from "./components/nav"
import Jumbotron from "./components/jumbotron";
import SoundSection from "./components/soundSection";
import DisplaySection from "./components/displaySection";
import WebgiViewer from "./components/webgiViewer";
import { useRef } from "react";
import Loader from "./components/loader";

function App() {

  const webgiViewerRef = useRef(); 
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  }

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview}/>
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef}/>
    </div>
  );
}

export default App;

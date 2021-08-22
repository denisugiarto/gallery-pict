import ImageGrid from "./component/ImageGrid";
import { Title } from "./component/Title";
import { UploadForm } from "./component/UploadForm";
import Modal from "./component/Modal";
import { useState } from "react";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;

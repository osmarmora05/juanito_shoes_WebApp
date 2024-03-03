import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "../../css/selectfiles.css";
import { CloseButton } from "./Buttons";

export default function SelectFile() {
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const imageFiles = acceptedFiles.filter((file) =>
      file.type.startsWith("image/")
    );

    if (imageFiles.length == 0) {
      acceptedFiles[0] = null;
      return;
    }

    setFile(acceptedFiles[0]);
  }, []);

  //   useEffect(() => {
  //     console.log(file);
  //   }, [file]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop });

  const handleImageFiles = () => {
    setFile(null);
  };

  return (
    <>
      <div className="file-box__container">
        <div {...getRootProps()} className="file-box">
          <input {...getInputProps()} />
          {file === null && (
            <p>
              Arrastre y suelte una imagen o haga clic para seleccionar imagen
            </p>
          )}
        </div>
        {file && (
          <div className="file-box__container-img">
            <CloseButton
              className={"file-box__close-btn"}
              handleOnClick={handleImageFiles}
            />
            <img
              src={URL.createObjectURL(file)}
              alt="Imagen arrastrada"
              className="file-box__img"
            />
          </div>
        )}
      </div>
    </>
  );
}

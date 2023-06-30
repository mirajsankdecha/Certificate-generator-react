import React, { useRef } from "react";

const Navbar = ({
  handleNameChange,
  handleFontSizeIncrease,
  handleFontSizeDecrease,
  handleBoldToggle,
  handleItalicToggle,
  handleUnderlineToggle,
  handleColorChange,
  handleFontFamilyChange,
  handleImageUpload,
  generateCertificate,
  generatedImage,
  downloadImage,
  fontSize,
  isBold,
  isItalic,
  textColor,
  isUnderline,
  selectedFont,
}) => {
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    handleImageUpload(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-dark">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <label htmlFor="name" className="nav-link ml-3 text-light">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              onChange={handleNameChange}
            />
          </li>
          <li className="nav-item">
            <label className="nav-link ml-2 text-light">Size:</label>
            <button
              className="btn btn-primary"
              onClick={handleFontSizeIncrease}
              style={{ marginRight: "5px" }}
            >
              +
            </button>

            <label className="nav-link form-control">{fontSize}px</label>
            <button
              className="btn btn-primary"
              onClick={handleFontSizeDecrease}
              style={{ marginRight: "0px" }}
            >
              -
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn ml-2 ${isBold ? "btn-primary" : "btn-danger"}`}
              onClick={handleBoldToggle}
              style={{ borderRadius: "50%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-type-bold"
                viewBox="0 0 16 16"
              >
                <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z" />
              </svg>
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn ml-2 ${isItalic ? "btn-primary" : "btn-danger"}`}
              onClick={handleItalicToggle}
              style={{ borderRadius: "50%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-type-italic"
                viewBox="0 0 16 16"
              >
                <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z" />
              </svg>
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn ml-2 ${
                isUnderline ? "btn-primary" : "btn-danger"
              }`}
              onClick={handleUnderlineToggle}
              style={{ borderRadius: "50%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-type-underline"
                viewBox="0 0 16 16"
              >
                <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z" />
              </svg>
            </button>
          </li>
          <li className="nav-item">
            <label htmlFor="color" className="nav-link ml-3 text-light">
              Color:
            </label>
            <input
              type="color"
              id="color"
              className=""
              value={textColor}
              onChange={handleColorChange}
            />
          </li>
          <li className="nav-item">
            <label htmlFor="fontFamily" className="nav-link ml-3 text-light">
              Font:
            </label>
            <select
              id="fontFamily"
              className="form-control"
              value={selectedFont}
              onChange={handleFontFamilyChange}
            >
              <option value="Arial">Arial</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
              <option value="Verdana">Verdana</option>
            </select>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-primary ml-2"
              onClick={handleButtonClick}
            >
              Upload{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cloud-upload"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                />
              </svg>
            </button>
            <input
              type="file"
              id="logo"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageChange}
            />
          </li>

          {generatedImage && (
            <li className="nav-item">
              <button className="btn btn-success ml-3" onClick={downloadImage}>
                Download{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cloud-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                  <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
                </svg>
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

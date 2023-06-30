import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../App.css";

const CG = () => {
  const [name, setName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [fontSize, setFontSize] = useState(30);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [textColor, setTextColor] = useState("#000000");
  const [isUnderline, setIsUnderline] = useState(false);
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [nameX, setNameX] = useState(100);
  const [nameY, setNameY] = useState(100);

  useEffect(() => {
    generateCertificate();
  }, [
    name,
    fontSize,
    isBold,
    isItalic,
    textColor,
    isUnderline,
    selectedFont,
    nameX,
    nameY,
  ]);

  useEffect(() => {
    if (selectedImage) {
      generateCertificate();
    }
  }, [selectedImage]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFontSizeIncrease = () => {
    setFontSize((prevSize) => prevSize + 1);
  };

  const handleFontSizeDecrease = () => {
    setFontSize((prevSize) => prevSize - 1);
  };

  const handleBoldToggle = () => {
    setIsBold(!isBold);
  };

  const handleItalicToggle = () => {
    setIsItalic(!isItalic);
  };

  const handleUnderlineToggle = () => {
    setIsUnderline(!isUnderline);
  };

  const handleColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleFontFamilyChange = (e) => {
    setSelectedFont(e.target.value);
  };

  const handleImageUpload = (file) => {
    setSelectedImage(file);
  };

  const generateCertificate = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const image = new Image();
    image.src = selectedImage && URL.createObjectURL(selectedImage);

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;

      context.drawImage(image, 0, 0);
      context.font = `${isBold ? "bold" : ""} ${
        isItalic ? "italic" : ""
      } ${fontSize}px ${selectedFont}`;
      context.fillStyle = textColor;

      // Update the text positioning based on nameX and nameY values
      const textX = nameX;
      const textY = nameY;

      context.fillText(name, textX, textY);

      if (isUnderline) {
        context.strokeStyle = textColor;
        context.lineWidth = 2;
        const textWidth = context.measureText(name).width;
        context.beginPath();
        context.moveTo(textX, textY + 2);
        context.lineTo(textX + textWidth, textY + 2);
        context.stroke();
      }

      setGeneratedImage(canvas.toDataURL("image/png"));
    };
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = generatedImage;
    link.download = "certificate.png";
    link.click();
  };

  return (
    <div className="certificate-generator">
      <Navbar
        handleNameChange={handleNameChange}
        handleFontSizeIncrease={handleFontSizeIncrease}
        handleFontSizeDecrease={handleFontSizeDecrease}
        handleBoldToggle={handleBoldToggle}
        handleItalicToggle={handleItalicToggle}
        handleUnderlineToggle={handleUnderlineToggle}
        handleColorChange={handleColorChange}
        handleFontFamilyChange={handleFontFamilyChange}
        handleImageUpload={handleImageUpload}
        generateCertificate={generateCertificate}
        generatedImage={generatedImage}
        downloadImage={downloadImage}
        fontSize={fontSize}
        isBold={isBold}
        isItalic={isItalic}
        textColor={textColor}
        isUnderline={isUnderline}
        selectedFont={selectedFont}
      />
      {generatedImage && (
        <div className="text-center mt-5">
          <div className="generated-image-container position-relative d-inline-block">
            <div className="vertical-input-container">
              <label htmlFor="nameY" className="nav-link">
                Y-axis:
              </label>
              <input
                type="range"
                id="nameY"
                className="form-control-range vertical-range"
                min="0"
                max="500"
                value={nameY}
                onChange={(e) => setNameY(parseInt(e.target.value))}
                style={{
                  writingMode: "bt-lr",
                  transform: "rotate(270deg)",
                  height: "150px",
                  margin: "0",
                }}
              />
            </div>

            <img src={generatedImage} alt="Certificate" />
            <div className="horizontal-input-container">
              <label htmlFor="nameX" className="nav-link">
                X-axis:
              </label>
              <input
                type="range"
                id="nameX"
                className="form-control-range"
                min="0"
                max="500"
                value={nameX}
                onChange={(e) => setNameX(parseInt(e.target.value))}
              />
            </div>
            <div
              className="name-marker position-absolute"
              style={{ top: `${nameY}px`, left: `${nameX}px` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CG;

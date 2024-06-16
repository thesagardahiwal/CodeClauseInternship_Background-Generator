import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import GradientTypeSelector from './components/GradientTypeSelector';
import GradientPreview from './components/GradientPreview';
import styles from '../src/styles/App.module.css';

const App: React.FC = () => {
  const [colors, setColors] = useState<string[]>(['#ffffff', '#ffffff']);
  const [gradientType, setGradientType] = useState<string>('linear');

  const handleColor = () => {
    setColors((colors) => [...colors, '#ffffff', '#ffffff']);
  }

  const generateColor = ():string => {
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
  }

  const handleGenerateButton = () => {
    setColors(() => [generateColor(), generateColor()])
  }

  const handleColorChange = (index: number, color: string) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  return (
    <div className={styles.app}>
      <h1>Background Generator</h1>
      <div className={styles.controls}>
        {colors.map((color, index) => (
          <ColorPicker
            key={index}
            color={color}
            onChange={(newColor) => handleColorChange(index, newColor)}
          />
        ))}
        <GradientTypeSelector
          gradientType={gradientType}
          onChange={setGradientType}
        />
      </div>
      <div className={styles.buttons}>
        <button onClick={handleColor} style={{border: "none", backgroundColor:"transparent", color: "violet", cursor: "pointer"}}>Get more color picker</button>
        <button onClick={handleGenerateButton}>Generator Background Color</button>
      </div>
      <GradientPreview colors={colors} gradientType={gradientType} />
    </div>
  );
};

export default App;

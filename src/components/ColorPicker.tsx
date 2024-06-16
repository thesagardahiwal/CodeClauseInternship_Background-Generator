import React from 'react';
import { SketchPicker } from 'react-color';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  const handleChangeComplete = (color: any) => {
    onChange(color.hex);
  };
  console.log(color);

  return <SketchPicker color={color} onChangeComplete={handleChangeComplete} />;
};

export default ColorPicker;

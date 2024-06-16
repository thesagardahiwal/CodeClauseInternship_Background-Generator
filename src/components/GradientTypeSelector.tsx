import React from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface GradientTypeSelectorProps {
  gradientType: string;
  onChange: (type: string) => void;
}

const GradientTypeSelector: React.FC<GradientTypeSelectorProps> = ({ gradientType, onChange }) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <Select value={gradientType} onChange={handleChange}>
      <MenuItem value="linear">Linear</MenuItem>
      <MenuItem value="radial">Radial</MenuItem>
      <MenuItem value="conic">Conic</MenuItem>
    </Select>
  );
};

export default GradientTypeSelector;

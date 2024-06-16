import React from 'react';
import styles from '../styles/App.module.css';

interface GradientPreviewProps {
  colors: string[];
  gradientType: string;
}

const GradientPreview: React.FC<GradientPreviewProps> = ({ colors, gradientType }) => {
  const gradient = gradientType === 'linear'
    ? `linear-gradient(${colors.join(', ')})`
    : gradientType === 'conic' ? `conic-gradient(${colors.join(', ')})`
    : `radial-gradient(${colors.join(', ')})`

  return <div className={styles.preview} style={{ background: gradient }} />;
};

export default GradientPreview;

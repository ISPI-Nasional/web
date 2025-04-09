import React from 'react';
import './DownloadButton.css';

export default function DownloadButton({ url, filename, variant = 'primary' }) {
  return (
    <a
      href={url}
      download={filename}
      className={`download-btn ${variant}`}
    >
      {variant === 'outline' ? 'Download Template' : 'Download Logo'}
    </a>
  );
}
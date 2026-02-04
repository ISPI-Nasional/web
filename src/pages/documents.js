import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

function DocumentList() {
  const [files, setFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the generated file list
    fetch(useBaseUrl('/file-list.json'))
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setFiles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load file list:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <Layout title="Dokumen" description="Daftar Dokumen ISPI Nasional">
        <main className="container margin-vert--lg">
          <h1>Daftar Dokumen</h1>
          <p>Loading documents...</p>
        </main>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout title="Dokumen" description="Daftar Dokumen ISPI Nasional">
        <main className="container margin-vert--lg">
          <h1>Daftar Dokumen</h1>
          <p className="alert alert--danger">Error loading documents: {error.message}</p>
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="Dokumen" description="Daftar Dokumen ISPI Nasional">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <h1>Daftar Dokumen</h1>
            <p>Telusuri dan unduh dokumen-dokumen penting ISPI Nasional.</p>
            <input
              type="text"
              placeholder="Cari berdasarkan nama file..."
              className="search-input"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                borderRadius: '5px',
                border: '1px solid #ddd'
              }}
            />
            {filteredFiles.length === 0 && (
              <p>Tidak ada dokumen yang cocok dengan pencarian Anda.</p>
            )}
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {filteredFiles.map((file, index) => (
                <li key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                  <a href={useBaseUrl(file.path)} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <strong>{file.name}</strong> ({file.type.toUpperCase()})
                  </a>
                  <span style={{ float: 'right', color: '#888' }}>
                    <a href={useBaseUrl(file.path)} download style={{ marginLeft: '15px', color: '#007bff' }}>Unduh</a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default DocumentList;

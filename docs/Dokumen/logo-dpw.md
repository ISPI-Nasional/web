---
title: Logo DPW (Dewan Pengurus Wilayah)
sidebar_label: Logo DPW
---

import DownloadButton from '@site/src/components/DownloadButton';

## Daftar Logo DPW

<div className="logo-grid">

  <!-- Row 1 -->
  <div className="logo-card">
    <img src="/logo/dpw/dpw-dki-banten.png" alt="DPW DKI Jakarta & Banten"/>
    <h3>DKI Jakarta & Banten</h3>
    <DownloadButton url="/logo/dpw/dpw-dki-banten.png" filename="dpw-dki-banten.png"/>
  </div>

  <div className="logo-card">
    <img src="/logo/dpw/dpw-jabar.png" alt="DPW Jawa Barat"/>
    <h3>Jawa Barat</h3>
    <DownloadButton url="/logo/dpw/dpw-jabar.png" filename="dpw-jabar.png"/>
  </div>

  <div className="logo-card">
    <img src="/logo/dpw/dpw-jambi.png" alt="DPW Jambi"/>
    <h3>Jambi</h3>
    <DownloadButton url="/logo/dpw/dpw-jambi.png" filename="dpw-jambi.png"/>
  </div>

  <!-- Row 2 -->
  <div className="logo-card">
    <img src="/logo/dpw/dpw-jawa-timur.png" alt="DPW Jawa Timur"/>
    <h3>Jawa Timur</h3>
    <DownloadButton url="/logo/dpw/dpw-jawa-timur.png" filename="dpw-jawa-timur.png"/>
  </div>

  <div className="logo-card">
    <img src="/logo/dpw/dpw-kalbar.png" alt="DPW Kalimantan Barat"/>
    <h3>Kalimantan Barat</h3>
    <DownloadButton url="/logo/dpw/dpw-kalbar.png" filename="dpw-kalbar.png"/>
  </div>

  <div className="logo-card">
    <img src="/logo/dpw/dpw-kaltim.png" alt="DPW Kalimantan Timur"/>
    <h3>Kalimantan Timur</h3>
    <DownloadButton url="/logo/dpw/dpw-kaltim.png" filename="dpw-kaltim.png"/>
  </div>

  <!-- Row 3 -->
  <div className="logo-card">
    <img src="/logo/dpw/dpw-lampung.png" alt="DPW Lampung"/>
    <h3>Lampung</h3>
    <DownloadButton url="/logo/dpw/dpw-lampung.png" filename="dpw-lampung.png"/>
  </div>

  <div className="logo-card">
    <img src="/logo/dpw/dpw-ntb.png" alt="DPW Nusa Tenggara Barat"/>
    <h3>NTB</h3>
    <DownloadButton url="/logo/dpw/dpw-ntb.png" filename="dpw-ntb.png"/>
  </div>

  <div className="logo-card">
    <img src="/logo/dpw/dpw-papua-barat.png" alt="DPW Papua Barat"/>
    <h3>Papua Barat</h3>
    <DownloadButton url="/logo/dpw/dpw-papua-barat.png" filename="dpw-papua-barat.png"/>
  </div>

  <!-- Row 4 -->
  <div className="logo-card">
    <img src="/logo/dpw/dpw-pekanbaru.png" alt="DPW Pekanbaru"/>
    <h3>Pekanbaru</h3>
    <DownloadButton url="/logo/dpw/dpw-pekanbaru.png" filename="dpw-pekanbaru.png"/>
  </div>

  <div className="logo-card">
    <img src="/logo/dpw/dpw-riau.png" alt="DPW Riau"/>
    <h3>Riau</h3>
    <DownloadButton url="/logo/dpw/dpw-riau.png" filename="dpw-riau.png"/>
  </div>

  <div className="logo-card">
    <img src="/logo/dpw/dpw-sulawesi-utara.png" alt="DPW Sulawesi Utara"/>
    <h3>Sulawesi Utara</h3>
    <DownloadButton url="/logo/dpw/dpw-sulawesi-utara.png" filename="dpw-sulawesi-utara.png"/>
  </div>

  <!-- Row 5 -->
  <div className="logo-card">
    <img src="/logo/dpw/dpw-sulselbar.png" alt="DPW Sulawesi Selatan & Barat"/>
    <h3>Sulselbar</h3>
    <DownloadButton url="/logo/dpw/dpw-sulselbar.png" filename="dpw-sulselbar.png"/>
  </div>

</div>

## Template Master Logo

<div className="template-box">
  <img src="/logo/dpw/DPW-TEMPLATE.svg" alt="Template Logo DPW" className="template-preview"/>
  
  ### Petunjuk Pengeditan:
  <div className="tutorial-steps">
    <div className="step">
      <h4>1. Software</h4>
      <ul>
        <li>Adobe Illustrator (rekomendasi)</li>
        <li>Inkscape (gratis)</li>
        <li>CorelDRAW</li>
      </ul>
    </div>

    <div className="step">
      <h4>2. Edit Teks</h4>
      <ul>
        <li>Buka file SVG</li>
        <li>Edit layer teks "WILAYAH"</li>
        <li>Gunakan font <strong>Poppins Bold</strong></li>
      </ul>
    </div>

    <div className="step">
      <h4>3. Export</h4>
      <ul>
        <li><strong>PNG</strong>: 500×500px, latar transparan</li>
        <li><strong>PDF</strong>: Untuk kebutuhan cetak</li>
      </ul>
    </div>

    <!-- <div className="step">
      <h4>4. Warna Resmi</h4>
      <div className="color-palette">
        <div className="color-swatch primary">#FFD700<br/>Kuning</div>
        <div className="color-swatch secondary">#FF0000<br/>Merah</div>
      </div>
    </div> -->
  </div>

  <DownloadButton 
    url="/logo/dpw/DPW-TEMPLATE.svg" 
    filename="DPW-TEMPLATE.svg"
    variant="outline"
  />
</div>

<style>{`
  .logo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
  
  .logo-card {
    border: 1px solid var(--ifm-color-emphasis-200);
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .logo-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.1);
  }
  
  .logo-card img {
    height: 120px;
    width: auto;
    object-fit: contain;
    margin-bottom: 1rem;
  }
  
  .logo-card h3 {
    margin: 0.5rem 0;
    font-size: 1.1rem;
    color: var(--ifm-color-primary);
  }

  .template-box {
    background: var(--ifm-color-emphasis-50);
    padding: 2rem;
    border-radius: 12px;
    margin-top: 3rem;
    border-left: 4px solid var(--ifm-color-primary);
  }
  
  .template-preview {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1.5rem auto;
    padding: 1rem;
    background: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .tutorial-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .step {
    background: white;
    padding: 1rem;
    border-radius: 8px;
  }

  .step h4 {
    margin-bottom: 0.5rem;
    color: var(--ifm-color-primary-dark);
  }

  .color-palette {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
  }

  .color-swatch {
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    line-height: 1.3;
    text-align: center;
    color: white;
    flex: 1;
  }

  .primary {
    background: #2E5AAC;
  }

  .secondary {
    background: #F7941D;
  }

  @media (max-width: 768px) {
    .logo-grid {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
    
    .tutorial-steps {
      grid-template-columns: 1fr;
    }
  }
`}</style>
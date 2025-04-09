import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Daftar fitur ISPI Nasional
const FeatureList = [
  {
    title: 'Profesionalisme Supervisi',
    Svg: require('@site/static/img/freepik_flat-engineering-construction-il.svg').default, // Bisa diganti dengan SVG kustom
    description: (
      <>
        Meningkatkan standar pengawasan konstruksi dengan keahlian dan teknologi terkini untuk hasil berkualitas.
      </>
    ),
  },
  {
    title: 'Integritas Terjamin',
    Svg: require('@site/static/img/freepik_engineers-working-construction-f.svg').default, // Bisa diganti dengan SVG kustom
    description: (
      <>
        Menjunjung tinggi kode etik dan moral dalam setiap praktik supervisi demi kredibilitas organisasi.
      </>
    ),
  },
  {
    title: 'Jaringan Nasional',
    Svg: require('@site/static/img/freepik_construction-concept-illustratio.svg').default, // Bisa diganti dengan SVG kustom
    description: (
      <>
        Struktur organisasi dari pusat hingga wilayah, mendukung supervisi di seluruh Indonesia.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
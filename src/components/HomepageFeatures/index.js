import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: 'API',
    Svg: require('@site/static/img/APIL1.svg').default,
    description: (
      <Translate>
        Tüm ShopiVerse veri modelleri ve uygulamalarınız için nasıl veri alacağınız hakkında bilgi edinin.
      </Translate>
    ),
  },
  {
    title: 'Panel',
    Svg: require('@site/static/img/PANELL1.svg').default,
    description: (
      <Translate>
        Kullanıcı paneli , Raporlar , Pazaryerleri ve Entegrasyonlar hakkında bilgi edinin.
      </Translate>
    ),
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/BLOGL1.svg').default,
    description: (
      <Translate>
        ShopiVerse Blog.
      </Translate>
    ),
  },
 
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><Translate>{title}</Translate></h3>
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

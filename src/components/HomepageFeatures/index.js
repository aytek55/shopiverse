import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'API',
    Svg: require('@site/static/img/api4.svg').default,
    description: (
      <>
        Tüm ShopiVerse veri modelleri ve uygulamalarınız ile entegrasyonlarınız için nasıl veri alacağınız hakkında bilgi edinin.
      </>
    ),
  },
  {
    title: 'Başlarken',
    Svg: require('@site/static/img/tutorial2.svg').default,
    description: (
      <>
       Sistem Tanıtımı ve Dokümantasyon bilgilendirmesi...
      </>
    ),
  },
  {
    title: 'Panel',
    Svg: require('@site/static/img/panel2.svg').default,
    description: (
      <>
        Kullanıcı paneli hakkında bilgi edinin.
      </>
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
        <h3>{title}</h3>
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

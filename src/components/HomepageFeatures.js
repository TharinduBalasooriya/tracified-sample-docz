import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Enabling Trust Through Traceability',
    Svg: require('../../static/img/tra1 (2).svg').default,
    
    description: (
      <>
       Tracified powered by Blockchain technology facilitates a tamper proof platform that streamlines the data flow within a supply chain, introducing a novel crypto-economic model based on a reward/penalty concept, ensuring fair distribution of gains across the chain. The originality of the solution is further enhanced by its ability to get customized to suit the needs of a business.
      </>
    ),
  },
  {
    title: 'Blockchain to Track Value Chain',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Tracified offers the only blockchain capable of ensuring not only the complete audit-ability & immutability of data but also the authenticity
      </>
    ),
  },
  {
    title: 'Application Domains',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Tracified can be implemented with any supply chain with much ease
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
    
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

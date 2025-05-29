import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Flaws',
    image: require('@site/static/img/flaws.png').default,
    url: '/vampire/Flaws',
  },
  {
    title: 'Skills',
    image: require('@site/static/img/skills.png').default,
    url: '/vampire/Skills',
  },
  {
    title: 'Rituals',
    image: require('@site/static/img/rituals.png').default,
    url: '/vampire/Rituals',
  },
  {
    title: 'Attributes',
    image: require('@site/static/img/attributes.png').default,
    url: '/vampire/Attributes',
  },
  {
    title: 'Backgrounds',
    image: require('@site/static/img/backgrounds.png').default,
    url: '/vampire/Backgrounds',
  },
  {
    title: 'Introduction',
    image: require('@site/static/img/introduction.png').default,
    url: '/vampire/IntroToDarkSkylines',
  },
];

function Feature({image, title, url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={url} ><img src={image} className={styles.featureImage} alt={title} /></a>
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

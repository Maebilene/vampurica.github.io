import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <span className={styles.font}>DARK SKYLINES</span>
        </Heading>
        <div className={styles.buttons}>
          <Link
            className={styles.button}
            to="/vampire/Clans">
            <img src={require('@site/static/img/clans.png').default} height="135%"></img>
          </Link>
          <Link
            className={styles.button}
            to="/vampire/Disciplines">
            <img src={require('@site/static/img/disciplines.png').default} height="135%"></img>
          </Link>
          <Link
            className={styles.button}
            to="/vampire/Techniques">
            <img src={require('@site/static/img/techniques.png').default} height="135%"></img>
          </Link>
          <Link
            className={styles.button}
            to="/vampire/Merits">
            <img src={require('@site/static/img/merits.png').default} height="135%"></img>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Dark Skylines Docs Reference`}
      description="A Documentation Reference of Rules for a VRChat Vampire the Masquerade LARP">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

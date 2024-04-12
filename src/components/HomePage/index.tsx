import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomePage/HomepageFeatures/HomePageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={
        'hero row margin-horiz--sm margin-vert--none padding-horiz--sm padding-vert--md'
      }
    >
      <div
        className={'col col--5 padding-horiz--md ' + clsx(styles['heroBanner'])}
      >
        <Heading as='h1' className='hero__title'>
          {siteConfig.tagline}
        </Heading>

        <p className='hero__subtitle'>Your entire PKI at your fingertips.</p>
      </div>

      <div className='col col--7 text--center'>
        <img src='/img/screenshots/dashboard.png' />
      </div>
    </header>
  );
}

export default function HomePage(): JSX.Element {
  return (
    <Layout
      title={`Home`}
      description='Cert Warden - Centralized ACME Certificate Management'
    >
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

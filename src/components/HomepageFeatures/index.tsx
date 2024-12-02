import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Tokenization',
    description: (
      <>
        Tokenize Bengali text into words.
      </>
    ),
  },
  {
    title: 'Embeddings',
    description: (
      <>
        Generate embeddings for Bengali text.
      </>
    ),
  },
  {
    title: 'Part of speech tagging',
    description: (
      <>
        Tag parts of speech for Bengali text.
      </>
    ),
  },
  {
    title: 'Named Entity Recognition',
    description: (
      <>
        Identify named entities in Bengali text.
      </>
    ),
  },
  {
    title: 'Text Cleaning',
    description: (
      <>
        Clean Bengali text from noise.
      </>
    ),
  },
  {
    title: 'Corpus',
    description: (
      <>
        Create a corpus from Bengali text.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive NLP Toolkit for Bangla',
    description: (
      <>
        BNLP offers essential tools for natural language processing in Bengali, including tokenization, stemming, and lemmatization.
      </>
    ),
  },
  {
    title: 'Easy Text Preprocessing',
    description: (
      <>
        Simplify text processing tasks with intuitive API for sentence splitting, word tokenization, and stopword removal.
      </>
    ),
  },
  {
    title: 'Named Entity Recognition',
    description: (
      <>
       Identify and classify entities like names, locations, and organizations in Bengali text with built-in NER capabilities.
      </>
    ),
  },
  {
    title: 'Part-of-Speech (POS) Tagging',
    description: (
      <>
        Analyze and classify words in Bengali text by their grammatical roles.
      </>
    ),
  },
  {
    title: 'Word Embedding Support',
    description: (
      <>
        Utilize pretrained FastText embeddings for semantic analysis of Bengali language data.
      </>
    ),
  },
  {
    title: 'Open-Source and Community-Driven',
    description: (
      <>
        Benefit from active development and community contributions to improve Bengali language processing.
      </>
    ),
  }
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

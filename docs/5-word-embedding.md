---
id: word-embedding
title: Word Embedding
---

## Bengali Word2Vec

### Generate Vector Using Pretrain Model

To use pretrained model do not pass `model_path` to `BengaliWord2Vec()`. It will download pretrained `BengaliWord2Vec` model itself.

```py
from bnlp import BengaliWord2Vec

bwv = BengaliWord2Vec()

word = 'গ্রাম'
vector = bwv.get_word_vector(word)
print(vector.shape)
```

### Find Most Similar Word Using Pretrained Model

To use pretrained model do not pass `model_path` to `BengaliWord2Vec()`. It will download pretrained `BengaliWord2Vec` model itself.

```py
from bnlp import BengaliWord2Vec

bwv = BengaliWord2Vec()

word = 'গ্রাম'
similar_words = bwv.get_most_similar_words(word, topn=10)
print(similar_words)
```

### Generate Vector Using Own Model

To use own model pass model path as `model_path` argument to `BengaliWord2Vec()` like below snippet

```py
from bnlp import BengaliWord2Vec

own_model_path = "own_directory/own_bwv_model.pkl"
bwv = BengaliWord2Vec(model_path=own_model_path)

word = 'গ্রাম'
vector = bwv.get_word_vector(word)
print(vector.shape)
```

### Find Most Similar Word Using Own Model

To use own model pass model path as `model_path` argument to `BengaliWord2Vec()` like below snippet

```py
from bnlp import BengaliWord2Vec

own_model_path = "own_directory/own_bwv_model.pkl"
bwv = BengaliWord2Vec(model_path=own_model_path)

word = 'গ্রাম'
similar_words = bwv.get_most_similar_words(word, topn=10)
print(similar_words)
```

### Train Bengali Word2Vec with your own data

Train Bengali word2vec with your custom raw data or tokenized sentences.

Custom tokenized sentence format example:
```py
sentences = [['আমি', 'ভাত', 'খাই', '।'], ['সে', 'বাজারে', 'যায়', '।']]
```
Check [gensim word2vec api](https://radimrehurek.com/gensim/models/word2vec.html#gensim.models.word2vec.Word2Vec) for details of training parameter

```py
from bnlp import Word2VecTraining

trainer = Word2VecTraining()

data_file = "raw_text.txt" # or you can pass custom sentence tokens as list of list
model_name = "test_model.model"
vector_name = "test_vector.vector"
trainer.train(data_file, model_name, vector_name, epochs=5)
```

### Pre-train or resume word2vec training with same or new corpus or tokenized sentences

Check [gensim word2vec api](https://radimrehurek.com/gensim/models/word2vec.html#gensim.models.word2vec.Word2Vec) for details of training parameter

```py
from bnlp import Word2VecTraining

trainer = Word2VecTraining()

trained_model_path = "mytrained_model.model"
data_file = "raw_text.txt"
model_name = "test_model.model"
vector_name = "test_vector.vector"
trainer.pretrain(trained_model_path, data_file, model_name, vector_name, epochs=5)
```

## Bengali FastText

To use `fasttext` you need to install fasttext manually by `pip install fasttext==0.9.2` or install via bnlp by `pip install bnlp_toolkit[fasttext]`

NB: To use `fasttext` on `windows`, install `fasttext` by following [this article](https://medium.com/@oleg.tarasov/building-fasttext-python-wrapper-from-source-under-windows-68e693a68cbb).

### Generate Vector Using Pretrained Model

To use pretrained model do not pass `model_path` to `BengaliFasttext()`. It will download pretrained `BengaliFasttext` model itself.

```py
from bnlp.embedding.fasttext import BengaliFasttext

bft = BengaliFasttext()

word = "গ্রাম"
word_vector = bft.get_word_vector(word)
print(word_vector.shape)
```

### Generate Vector File from Fasttext Binary Model

To use pretrained model do not pass `model_path` to `BengaliFasttext()`. It will download pretrained `BengaliFasttext` model itself.

```py
from bnlp.embedding.fasttext import BengaliFasttext

bft = BengaliFasttext()

out_vector_name = "myvector.txt"
bft.bin2vec(out_vector_name)
```

### Generate Vector Using Pretrained Model

To use own model pass model path as `model_path` argument to `BengaliFasttext()` like below snippet.

```py
from bnlp.embedding.fasttext import BengaliFasttext

own_model_path = "own_directory/own_fasttext_model.bin"
bft = BengaliFasttext(model_path=own_model_path)

word = "গ্রাম"
word_vector = bft.get_word_vector(model_path, word)
print(word_vector.shape)
```

### Generate Vector File from Fasttext Binary Model

To use own model pass model path as `model_path` argument to `BengaliFasttext()` like below snippet.

```py
from bnlp.embedding.fasttext import BengaliFasttext

own_model_path = "own_directory/own_fasttext_model.bin"
bft = BengaliFasttext(model_path=own_model_path)

out_vector_name = "myvector.txt"
bft.bin2vec(out_vector_name)
```

### Train Bengali FastText Model

Check [fasttext documentation](https://fasttext.cc/docs/en/options.html) for details of training parameter

  ```py
  from bnlp.embedding.fasttext import FasttextTrainer

  trainer = FasttextTrainer()

  data = "raw_text.txt"
  model_name = "saved_model.bin"
  epoch = 50
  trainer.train(data, model_name, epoch)
  ```

## Bengali GloVe Word Vectors

We trained glove model with bengali data(wiki+news articles) and published bengali glove word vectors<br/>
You can download and use it on your different machine learning purposes.

```py
from bnlp import BengaliGlove

bengali_glove = BengaliGlove() # will automatically download pretrained model

word = "গ্রাম"
vector = bengali_glove.get_word_vector(word)
print(vector.shape)

similar_words = bengali_glove.get_closest_word(word)
print(similar_words)
```
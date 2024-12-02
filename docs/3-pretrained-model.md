---
id: pretrained-model
title: Pretrained Model
---

## Download Links

Large model published in [huggingface](https://huggingface.co/) model hub.

* [Bengali SentencePiece](https://github.com/sagorbrur/bnlp/tree/master/model)
* [Bengali Word2Vec](https://huggingface.co/sagorsarker/bangla_word2vec)
* [Bengali FastText](https://huggingface.co/sagorsarker/bangla-fasttext)
* [Bengali GloVe Wordvectors](https://huggingface.co/sagorsarker/bangla-glove-vectors)
* [Bengali POS Tag model](https://github.com/sagorbrur/bnlp/blob/master/model/bn_pos.pkl)
* [Bengali NER model](https://github.com/sagorbrur/bnlp/blob/master/model/bn_ner.pkl)
* [Bengali News article Doc2Vec model](https://huggingface.co/sagorsarker/news_article_doc2vec)
* [Bangla Wikipedia Doc2Vec model](https://huggingface.co/sagorsarker/bnwiki_doc2vec_model)

## Training Details
* Sentencepiece, Word2Vec, Fasttext, GloVe model trained with **Bengali Wikipedia Dump Dataset**
  - [Bengali Wiki Dump](https://dumps.wikimedia.org/bnwiki/latest/)
* SentencePiece Training Vocab Size=50000
* Fasttext trained with total words = 20M, vocab size = 1171011, epoch=50, embedding dimension = 300 and the training loss = 0.318668,
* Word2Vec word embedding dimension = 100, min_count=5, window=5, epochs=10
* To Know Bengali GloVe Wordvector and training process follow [this](https://github.com/sagorbrur/GloVe-Bengali) repository
* Bengali CRF POS Tagging was training with [nltr](https://github.com/abhishekgupta92/bangla_pos_tagger/tree/master/data) dataset with 80% accuracy.
* Bengali CRF NER Tagging was train with [this](https://github.com/MISabic/NER-Bangla-Dataset) data with 90% accuracy.
* Bengali news article doc2vec model train with 8 jsons of [this](https://www.kaggle.com/datasets/ebiswas/bangla-largest-newspaper-dataset) corpus with epochs 40 vector size 100 min_count=2, total news article 400013
* Bengali wikipedia doc2vec model trained with wikipedia dump datasets. Total articles 110448, epochs: 40, vector_size: 100, min_count: 2

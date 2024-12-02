---
id: tokenization
title: Tokenization
---

## Basic Tokenizer

  ```py
  from bnlp import BasicTokenizer
  
  tokenizer = BasicTokenizer()

  raw_text = "আমি বাংলায় গান গাই।"
  tokens = tokenizer(raw_text)
  print(tokens)
  # output: ["আমি", "বাংলায়", "গান", "গাই", "।"]
  ```

## NLTK Tokenization

  ```py
  from bnlp import NLTKTokenizer

  bnltk = NLTKTokenizer()

  text = "আমি ভাত খাই। সে বাজারে যায়। তিনি কি সত্যিই ভালো মানুষ?"
  word_tokens = bnltk.word_tokenize(text)
  sentence_tokens = bnltk.sentence_tokenize(text)
  print(word_tokens)
  print(sentence_tokens)
  # output
  # word_token: ["আমি", "ভাত", "খাই", "।", "সে", "বাজারে", "যায়", "।", "তিনি", "কি", "সত্যিই", "ভালো", "মানুষ", "?"]
  # sentence_token: ["আমি ভাত খাই।", "সে বাজারে যায়।", "তিনি কি সত্যিই ভালো মানুষ?"]
  ```


## Bengali SentencePiece Tokenization

### Tokenization using trained model

To use pretrained model do not pass `model_path` to `SentencepieceTokenizer()`. It will download pretrained `SentencepieceTokenizer` model itself.

```py
from bnlp import SentencepieceTokenizer

bsp = SentencepieceTokenizer()


input_text = "আমি ভাত খাই। সে বাজারে যায়।"
tokens = bsp.tokenize(input_text)
print(tokens)
text2id = bsp.text2id(input_text)
print(text2id)
id2text = bsp.id2text(text2id)
print(id2text)
```

### Tokenization Using Own Model

To use own model pass model path as `model_path` argument to `SentencepieceTokenizer()` like below snippet.

```py
from bnlp import SentencepieceTokenizer

own_model_path = "own_directory/own_sp_model.pkl"
bsp = SentencepieceTokenizer(model_path=own_model_path)


input_text = "আমি ভাত খাই। সে বাজারে যায়।"
tokens = bsp.tokenize(input_text)
print(tokens)
text2id = bsp.text2id(input_text)
print(text2id)
id2text = bsp.id2text(text2id)
print(id2text)
```

### Training SentencePiece
```py
from bnlp import SentencepieceTrainer

data = "raw_text.txt"
vocab_size = 32000
model_prefix = "model"

trainer = SentencepieceTrainer(
   data=data,
   vocab_size=vocab_size,
   model_prefix=model_prefix
)
trainer.train()

```
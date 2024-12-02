---
id: bengali-ner
title: Bengali NER
---

## Find NER Tag Using Pretrained Model

To use pretrained model do not pass `model_path` to `BengaliNER()`. It will download pretrained `BengaliNER` model itself.

```py
from bnlp import BengaliNER

bn_ner = BengaliNER()

text = "সে ঢাকায় থাকে।" # or you can pass ['সে', 'ঢাকায়', 'থাকে', '।']
result = bn_ner.tag(text)
print(result)
# [('সে', 'O'), ('ঢাকায়', 'S-LOC'), ('থাকে', 'O')]
```

## Find NER Tag Using Own Model

To use own model pass model path as `model_path` argument to `BengaliNER()` like below snippet.

```py
from bnlp import BengaliNER

own_model_path = "own_directory/own_ner_model.pkl"
bn_ner = BengaliNER(model_path=own_model_path)

text = "সে ঢাকায় থাকে।" # or you can pass ['সে', 'ঢাকায়', 'থাকে', '।']
result = bn_ner.tag(text)
print(result)
# [('সে', 'O'), ('ঢাকায়', 'S-LOC'), ('থাকে', 'O')]
```

## Train NER Tag Model

```py
from bnlp import CRFTaggerTrainer

trainer = CRFTaggerTrainer()

model_name = "ner_model.pkl"
train_data = [[('ত্রাণ', 'O'),('ও', 'O'),('সমাজকল্যাণ', 'O'),('সম্পাদক', 'S-PER'),('সুজিত', 'B-PER'),('রায়', 'I-PER'),('নন্দী', 'E-PER'),('প্রমুখ', 'O'),('সংবাদ', 'O'),('সম্মেলনে', 'O'),('উপস্থিত', 'O'),('ছিলেন', 'O')], [('ত্রাণ', 'O'),('ও', 'O'),('সমাজকল্যাণ', 'O'),('সম্পাদক', 'S-PER'),('সুজিত', 'B-PER'),('রায়', 'I-PER'),('নন্দী', 'E-PER'),('প্রমুখ', 'O'),('সংবাদ', 'O'),('সম্মেলনে', 'O'),('উপস্থিত', 'O'),('ছিলেন', 'O')], [('ত্রাণ', 'O'),('ও', 'O'),('সমাজকল্যাণ', 'O'),('সম্পাদক', 'S-PER'),('সুজিত', 'B-PER'),('রায়', 'I-PER'),('নন্দী', 'E-PER'),('প্রমুখ', 'O'),('সংবাদ', 'O'),('সম্মেলনে', 'O'),('উপস্থিত', 'O'),('ছিলেন', 'O')]]

test_data = [[('ত্রাণ', 'O'),('ও', 'O'),('সমাজকল্যাণ', 'O'),('সম্পাদক', 'S-PER'),('সুজিত', 'B-PER'),('রায়', 'I-PER'),('নন্দী', 'E-PER'),('প্রমুখ', 'O'),('সংবাদ', 'O'),('সম্মেলনে', 'O'),('উপস্থিত', 'O'),('ছিলেন', 'O')], [('ত্রাণ', 'O'),('ও', 'O'),('সমাজকল্যাণ', 'O'),('সম্পাদক', 'S-PER'),('সুজিত', 'B-PER'),('রায়', 'I-PER'),('নন্দী', 'E-PER'),('প্রমুখ', 'O'),('সংবাদ', 'O'),('সম্মেলনে', 'O'),('উপস্থিত', 'O'),('ছিলেন', 'O')], [('ত্রাণ', 'O'),('ও', 'O'),('সমাজকল্যাণ', 'O'),('সম্পাদক', 'S-PER'),('সুজিত', 'B-PER'),('রায়', 'I-PER'),('নন্দী', 'E-PER'),('প্রমুখ', 'O'),('সংবাদ', 'O'),('সম্মেলনে', 'O'),('উপস্থিত', 'O'),('ছিলেন', 'O')]]

trainer.train(model_name, train_data, test_data)
```

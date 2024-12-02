---
id: bengali-pos-tagging
title: Bengali POS Tagging
---

## Find Pos Tag Using Pretrained Model

To use pretrained model do not pass `model_path` to `BengaliPOS()`. It will download pretrained `BengaliPOS` model itself.

```py
from bnlp import BengaliPOS

bn_pos = BengaliPOS()

text = "আমি ভাত খাই।" # or you can pass ['আমি', 'ভাত', 'খাই', '।']
res = bn_pos.tag(text)
print(res)
# [('আমি', 'PPR'), ('ভাত', 'NC'), ('খাই', 'VM'), ('।', 'PU')]
```

## Find Pos Tag Using Own Model

To use own model pass model path as `model_path` argument to `BengaliPOS()` like below snippet.

```py
from bnlp import BengaliPOS

own_model_path = "own_directory/own_pos_model.pkl"
bn_pos = BengaliPOS(model_path=own_model_path)

text = "আমি ভাত খাই।" # or you can pass ['আমি', 'ভাত', 'খাই', '।']
res = bn_pos.tag(text)
print(res)
# [('আমি', 'PPR'), ('ভাত', 'NC'), ('খাই', 'VM'), ('।', 'PU')]
```

## Train POS Tag Model

```py
from bnlp import CRFTaggerTrainer

trainer = CRFTaggerTrainer()

model_name = "pos_model.pkl"
train_data = [[('রপ্তানি', 'JJ'), ('দ্রব্য', 'NC'), ('-', 'PU'), ('তাজা',  'JJ'), ('ও', 'CCD'), ('শুকনা', 'JJ'), ('ফল', 'NC'), (',', 'PU'), ('আফিম', 'NC'), (',', 'PU'), ('পশুচর্ম', 'NC'), ('ও', 'CCD'), ('পশম', 'NC'), ('এবং', 'CCD'),('কার্পেট', 'NC'), ('৷', 'PU')], [('মাটি', 'NC'), ('থেকে', 'PP'), ('বড়জোর', 'JQ'), ('চার', 'JQ'), ('পাঁচ', 'JQ'), ('ফুট', 'CCL'), ('উঁচু', 'JJ'), ('হবে', 'VM'), ('৷', 'PU')]]

test_data = [[('রপ্তানি', 'JJ'), ('দ্রব্য', 'NC'), ('-', 'PU'), ('তাজা', 'JJ'), ('ও', 'CCD'), ('শুকনা', 'JJ'), ('ফল', 'NC'), (',', 'PU'), ('আফিম', 'NC'), (',', 'PU'), ('পশুচর্ম', 'NC'), ('ও', 'CCD'), ('পশম', 'NC'), ('এবং', 'CCD'),('কার্পেট', 'NC'), ('৷', 'PU')], [('মাটি', 'NC'), ('থেকে', 'PP'), ('বড়জোর', 'JQ'), ('চার', 'JQ'), ('পাঁচ', 'JQ'), ('ফুট', 'CCL'), ('উঁচু', 'JJ'), ('হবে', 'VM'), ('৷', 'PU')]]

trainer.train(model_name, train_data, test_data)

```
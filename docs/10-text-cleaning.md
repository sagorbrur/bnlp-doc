---
id: text-cleaning
title: Text Cleaning
---

We adopted different text cleaning formula, codes from [clean-text](https://github.com/jfilter/clean-text) and modified for Bangla. Now you can normalize and clean your text using the following methods.

```py
from bnlp import CleanText

clean_text = CleanText(
   fix_unicode=True,
   unicode_norm=True,
   unicode_norm_form="NFKC",
   remove_url=False,
   remove_email=False,
   remove_emoji=False,
   remove_number=False,
   remove_digits=False,
   remove_punct=False,
   replace_with_url="<URL>",
   replace_with_email="<EMAIL>",
   replace_with_number="<NUMBER>",
   replace_with_digit="<DIGIT>",
   replace_with_punct = "<PUNC>"
)

input_text = "আমার সোনার বাংলা।"
clean_text = clean_text(input_text)
print(clean_text)
```
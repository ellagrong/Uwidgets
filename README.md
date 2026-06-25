# Rotating Chinese Flashcard Widget

A custom [Übersicht](http://tracesof.net/uebersicht/) desktop widget that displays random Chinese vocabulary flashcards with Chinese characters, pinyin, and English translation.

The widget is designed for Chinese learners who want passive vocabulary exposure directly on their Mac desktop.


Phrase format
Each line in phrases.txt should use this format:
Chinese|Pinyin|English
Example:
慢慢来|Màn màn lái|Take it slowly.
今天也要加油|Jīntiān yě yào jiāyóu|Keep going today too.
我可以做到|Wǒ kěyǐ zuòdào|I can do it.
Do not add commas or extra symbols between the sections. The widget uses the | symbol to separate Chinese, pinyin, and English.

**Customisation**
Editing the phrases
You can modify the phrases shown by the widget by editing the phrases.txt file.
Each line in phrases.txt should contain one flashcard entry.
Example:
你好 | nǐ hǎo | hello
谢谢 | xièxie | thank you
我喜欢学习中文 | wǒ xǐhuān xuéxí zhōngwén | I like studying Chinese
You can replace the existing phrases with your own Chinese vocabulary, sentences, or study notes.
Changing the phrase file path
If the widget does not show your phrases, you may need to update the path to your phrases.txt file inside index.jsx.
Open:
rotating-phrases.widget/index.jsx
Find this line:
const phraseFilePath = '/Users/YOUR-USERNAME/Library/Application Support/Übersicht/widgets/rotating-phrases.widget/phrases.txt'
Replace YOUR-USERNAME with your Mac username.
For example:
const phraseFilePath = '/Users/ella/Library/Application Support/Übersicht/widgets/rotating-phrases.widget/phrases.txt'
To find your username, open Terminal and type:
whoami
Then use the result in the file path.

This widget was designed for Chinese study, but you can use it for any language or topic by editing the phrases.txt file.
You can also hange color, size, font etc. by editing the code.
The icon is a little transparent so you can see any files behind it.


## Preview

The widget displays one random vocabulary card at a time:

```txt
慢慢来
Màn màn lái
Take it slowly.

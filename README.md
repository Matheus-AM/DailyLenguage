# DailyLenguage

This is an App that I've made to help me on my language learning journey. I got this idea when I started to learn Japanese by myself and wanted a (software) infrastructure to have a "5 daily kanji lesson" and a quiz to practice all the kanjis/hiragana/katakana that i already learned.

## MVP

My main objectives are:
- The Application must run on any computer without the need of installing or configuring some tool. To accomplish this, I'm doing a basic reactive library with the material design components to ease my development and maintenance once I'm using vanilla JS.
- The Application must have a database files with the Symbols(shape, sound, meaning). To accomplish this, I've done some data-crawler python scripts to get the symbols from symbol-lists and transform this crawled data into JSON information; 
- The Application must memorize my learning progress: the application can add new known words/symbols.
- The Application must have a quiz to let me practice: the application can have a quiz page that I can test if I really learned those words/symbols.
- The Application must have at least 2 languages: English, Japanese.

## Increment

Once I did accomplish the main objectives, there's other objectives:
- The Application should have more 3 languages: Arabic, Chinese, Russian; 
- The Application should have a script to attach all the files into a single HTML file;
- The Application should have the sound of the word/symbol;
- The Application should have a canvas to learn the writing of the symbols (like the strokes of japanese/chinese symbols);
    - The Application could match the symbol written with the real symbol (probably using AI recognition pattern like);
- The Application should have more languages;
- The Application could have responsivity;
- The Application could be able to listen to my pronunciation;
    - The Application could be able to match the sound of my pronunce with the real sound of the word/symbol;
- The Application could have a desktop version using Electron.js;
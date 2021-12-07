# Work

## Installation

```
$ git clone https://github.com/yichennnn36/github-reader.git
$ cd github-reader
$ npm install && npm start (or using yarn instead)
```

## File Structure

```
├── .gitignore
├── yarn.lock
├── package.json
├── public
│   └── index.html
└── src
      ├── App.js
      ├── api.js                        # 所有的 api，使用 fetch
      ├── index.js     
      ├── components
      │   ├── Header
      │   ├── Footer
      │   ├── Loading
      │   ├── List
      ├── constants                 # global style
      └── hooks                     # Custom hooks       
```

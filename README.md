## Description
- server template based on koa2
- update from koa-base-template

## Details
- extend: koa2
- unit test: jest
- formatter: eslint and prettier
- code doc: typedoc 
- design doc: gitbook, /design/

## Usage
- test: unit test
```bash
npm run test
```

- test: unit test with coverage
```bash
npm run test-cov
```

- build: build
```bash
npm run build
```

- lint,lint:fix : code analysis by eslint and prettier
```bash
npm run lint
npm run lint:fix
```

- docs: genarate document by typedoc
```bash
npm run docs
```

- dev: via nodemon
```bash
npm run dev
```

## Todo list
- [x] lint
- [x] test
- [x] curd template
- [x] code doc
- [x] errors handle
- [ ] swagger
- [ ] api template cli
- [ ] deploy scripts
- [ ] authorization


## Code documents
- [document](./docs/globals.md)

## Design documents
- [document](./design/index.md)

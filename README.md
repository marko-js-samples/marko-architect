# Marko + Architect

Sample app of using Marko with [Architect](https://arc.codes)

## Install

Install the required dependencies in order to deploy the project or run the
project locally.

```bash
npm install
```

## Create

This command creates all required AWS resources and deploys your project

```bash
npm run create
```

## Start Local

Run the project locally. This command should only be run after running `npm run create`.

```bash
npm start
```

## Deploy

Ensure that you first update `AWS_PROFILE` and `AWS_REGION` environment variables
in the `package.json` scripts.

```bash
npm run deploy
```

## How?

Marko can be easily run on [AWS Lambda](https://aws.amazon.com/lambda/). We first run a prebuild of our page.
The prebuild step uses [`lasso`](https://github.com/lasso-js/lasso) and
[`lasso-s3-writer`](https://github.com/lasso-js/lasso-s3-writer) to write all
bundles of JavaScript and CSS as well as static assets to Amazon S3. It then
rewrites your page and creates a static cache using the public S3 URLs returned.
We then precomile all Marko pages using the `npm run compile-templates` command,
which walks the directory tree, finds all Marko templates, and compiles them.
By doing this, we do not have to perform any compilation step in Lambda.

After the build, we use [Architect](https://arc.codes) to easily deploy the
application to [AWS Lambda](https://aws.amazon.com/lambda/).

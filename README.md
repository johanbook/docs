# docs

![deploy](https://img.shields.io/github/actions/workflow/status/johanbook/docs/deploy.yaml)
![uptime](https://img.shields.io/uptimerobot/ratio/m793425276-368a1e113b433b3c04d08dd6)
![last commit](https://img.shields.io/github/last-commit/johanbook/docs)

**docs** is my coding wiki, hosted at
[johanbook.com/docs](https://johanbook.com/docs). They are written using
[markdown](https://www.markdownguide.org/) and compiled to a static site using
the Nodejs-based [Docusaurus](https://docusaurus.io/) framework.

## Found an error?

If something is incorrect or could be improved, open an issue in
[here](https://github.com/johanbook/docs/issues).

## Running locally

The documentation site can be run locally. It requires a Nodejs runtime and the
PNPM package manager. The dependencies are installed by running

```sh
pnpm install
```

To start a local development server run

```sh
pnpm run dev
```

## Deployment

The docs are hosted on Github pages and are built as part of a CD pipeline. The
compilation is done using latest Nodejs LTS.

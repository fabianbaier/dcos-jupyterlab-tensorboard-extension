# dcos-jupyterlab-tensorboard-extension

A JupyterLab extension to use TensorBoard with the Mesosphere DC/OS JupyterLab Service

![quick demo](https://dha4w82d62smt.cloudfront.net/items/0D0h2p1Y3Z2b0m0j1G0G/Screen%20Recording%202018-08-28%20at%2012.08%20PM.gif)

## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install dcos-jupyterlab-tensorboard-extension
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

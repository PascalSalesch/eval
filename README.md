# eval
> Evaluate expressions to import

This module evaluates the URL hash it receives and exports it.

1. [Getting started](#getting-started)
2. [Developing](#developing)
    1. [Built With](#built-with)
    2. [Prerequisites](#prerequisites)
    3. [Setting up Dev](#setting-up-dev)
    4. [Building](#building)
    5. [Deploying / Publishing](#deploying--publishing)
3. [Versioning](#versioning)
4. [Configuration](#configuration)
5. [Tests](#tests)
6. [Style Guide](#style-guide)
7. [Api Reference](#api-reference)
    1. [Deno](#deno)
8. [Licensing](#licensing)




## Getting started

```js
import Deno from 'https://cdn.deno.land/evil/versions/1.0.4/raw/mod.js#Deno';
```



## Developing

1. [Built With](#built-with)
2. [Prerequisites](#prerequisites)
3. [Setting up Dev](#setting-up-dev)
4. [Building](#building)
5. [Deploying / Publishing](#deploying--publishing)



### Built With

This JavaScript module has no dependencies.



### Prerequisites

Before starting to develop you need to have the latest [Deno](https://deno.land/) version installed.



### Setting up Dev

In order to start developing the project further git-clone this respository:

```shell
git clone git@github.com:PascalSalesch/eval.git
cd eval/
deno run ./mod.js
```

By cloning this repository you're downloading all assets hosted on github.
When `deno run ./mod.js` will executed the code in `mod.js`.



### Building

This package requires no build step. If it had any dependencies these could be bundled.

```shell
deno bundle 'https://deno.land/x/evil/mod.js' eval.bundle.js
```


### Deploying / Publishing

The package is deployed to [deno.land/x/evil](https://deno.land/x/evil). In short, a git tag must be pushed.

```shell
git tag -a $major.$minor.$patch -m "v$major.$minor.$patch"
git push origin $major.$minor.$patch
```



## Versioning

We are using [SemVer](http://semver.org/) for versioning in order to conform to [deno.land/x](https://deno.land/x/#info) requirements.




## Configuration

The package evaluates either the hash or the query string.

:warning: The redirect to the latest version will omit query parameters and hashes. Use `cdn.deno.land` instead.

| Value           | Example                                       | Description                                            |
| --------------- | --------------------------------------------- | ------------------------------------------------------ |
| Hash            | `deno.land/x/evil/mod.ts#Deno`                | The module tries to evaluate `Deno`                    |
| eval parameter  | `deno.land/x/evil/mod.ts?eval=Deno`           | The module tries to evaluate `Deno`                    |
| async parameter | `deno.land/x/evil/mod.ts?async=true&eval=1+1` | Setting `async` to `true` will await an async function |



## Tests

A few small tests reside in `test.js`.



## Style Guide

Follow the [Deno Style Guide](https://deno.land/manual/contributing/style_guide).
Lint with the following command:

```shell
deno fmt
```




## Licensing

All rights reserved. [MIT license](https://github.com/PascalSalesch/eval/blob/main/LICENSE).

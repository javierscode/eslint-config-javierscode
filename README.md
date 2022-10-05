<h1 align="center">
  ⚙️ My custom ESLint + Prettier configuration
</h1>

<p align="center">
  Opinionated linting configuration. <br/>
  Valid for your JavaScript, TypeScript & React projects.
</p>

## 👀 How to use

1. Install the dependency
   ```bash
   npm install --save-dev eslint-config-javierscode
   ```

2. Add it to your `.eslintrc.json` file:

   ```json
   {
     "extends": [ "eslint-config-javierscode" ]
   }
   ```

3. If you are using TypeScript, extend the TypeScript configuration instead, and point to your `tsconfig.json` in `parserOptions`:

   ```json
    {
    "extends": [
        "eslint-config-javierscode/typescript"
    ],
    "parserOptions": {
        "project": [
        "./tsconfig.json"
        ]
    }
    }
   ```

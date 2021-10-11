# Run TypeScript on VS code 
## 1. Create a Node Project 
<code>
    npm init -y
</code>

## 2. Install dependencies   
```shell
    npm i -d typescript 
    npm i -d ts-node-dev
```
## 3. Create a script to start Ts server on *package.json*
Add this script to scripts, **index.ts** is a file that will be executed.

```shell
    "scripts": {
        "start": "ts-node-dev --respawn src/index.ts"
    },
```
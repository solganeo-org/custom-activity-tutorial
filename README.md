# Custom Activity Tutorial

This project will help you to create a Custom Acitivity by using Node JS as language.

## Table of Contents

- [Custom Activity Tutorial](#custom-activity-tutorial)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Step 1: Install Node and NPM](#step-1-install-node-and-npm)
    - [Windows](#windows)
    - [MAC](#mac)
  - [Step 2: Start Node Project and Install dependencies](#step-2-start-node-project-and-install-dependencies)
  - [Step 3: Create Folder Structure](#step-3-create-folder-structure)

## Requirements

1. **Javascript** and **NodeJS**
2. HTTP Protocol
3. PaaS as **Heroku**
4. Express Module
5. VSCode

<a name="install"/>
## Step 1: Install Node and NPM

Install Node and Npm.

### Windows

1. **Download the Windows Installer** from [Node](https://nodejs.org/en/download/). Make sure you have downloaded the latest version of NodeJs. It includes the NPM package manager.

2. **Install Node.js and NPM**: After choosing the path, double-click to install .msi binary files to initiate the installation process. Then give access to run the application. You will get a welcome message on your screen and click the “Next” button. The installation process will start.

3. **Check Node.js and NPM Version**: If you have a doubt whether you have installed everything correctly or not, let’s verify it with “Command Prompt”. o confirm Node installation, type `node -v` command.

### MAC

Now, if you are using a macOS, let’s understand the process of Node.js and NPM installation.

1. **Install Node Using .pkg Installer**: Well, it’s a similar process as Windows. Here, Node provides a .pkg installer for Mac. Besides, we can also download from its [official website](https://nodejs.org/en/download/).

2. **Run Node.js Installer**: Now, your installer is ready to run. However, it will not take your much time. So, let’s explain in detail here.

   Introduction > Continue License > Select Continue > Agree Installation Type > Install > Authenticate with your Mac to allow the Installation > Install Software Summary > Close

3. **Check Node.js and NPM Version**: To verify whether you have properly installed Node.js in your macOS, run the following command in your terminal: `node -v`.

4. **Update your NPM Version**: Node.js doesn’t automatically update the version of npm. Write a given command and your npm version will be updated. `sudo npm install npm --global`

## Step 2: Start Node Project and Install dependencies

Create a folder where you will code your Node.js Application. For example: (first-custom-activity). This folder will be empty at the begginig. Open it with VSCode 😁

Open a terminal or a command prompt (Windows) inside the folder and tap `npm init -y`. This command will start a node.js project by creating a _package.json_ file.

Install Express and dotenv module with the following command:
`npm i express dotenv`. Once executed this command, you will see a new *node_modules* folder and a *package-lock.json* file.

## Step 3: Create Folder Structure

This project is a full-stack project, it means that it will need a public section and a server section.

Let's start with the folder structure:

```
- ./public
  - ./css
  - ./images
  - ./js
    - customActivity.js
    - jquery.min.js
    - postmonger.js
    - require.js
  - ./vendor
  - config.json
  - index.html
- ./server
  - index.js
```

Until this step it's jsut necessary to create **public** and **server** folder with *./public/index.html* and *./server/index.js* files.

Finally modify the package.json file and add the following line inside the **scripts** section:

```json
{
    ...
    

    "scripts": {
        "dev": "node ./server/index.js"
    },

    
    ...

}

```



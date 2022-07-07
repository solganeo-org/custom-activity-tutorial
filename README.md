# Custom Activity Tutorial

This project will help you to create a Custom Acitivity by using Node JS as language. It's also important to explain that custom activities can also be coded by using other languages as Java, Python or C++. It's just necessary to find a way to expose a server with the programming language to expose the website to SFMC. Everything is possible ! 💻

For each of the steps, you will find a branch called (step-*) with what was done in that part of the tutorial, in any case the complete code will be in the **main** branch.

Feel free to contact **solganeo technical** (it@solgnaneo.com) support if you have any questions related to this tutorial. 

## Table of Contents

- [Custom Activity Tutorial](#custom-activity-tutorial)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Step 1: Install Node and NPM](#step-1-install-node-and-npm)
    - [Windows](#windows)
    - [MAC](#mac)
  - [Step 2: Install ngrok](#step-2-install-ngrok)
  - [Step 3: Start Node Project and Install dependencies](#step-3-start-node-project-and-install-dependencies)
  - [Step 4: Create Folder Structure](#step-4-create-folder-structure)
  - [Step 5: Start Node Js Server using Express](#step-5-start-node-js-server-using-express)
  - [Step 6: Create the First Custom Activity](#step-6-create-the-first-custom-activity)
    - [config.json](#configjson)
    - [Index.html](#indexhtml)
    - [Download postmonger, jquery and require libraries](#download-postmonger-jquery-and-require-libraries)
    - [customActivity.js](#customactivityjs)
    - [Modify ./server/index.js](#modify-serverindexjs)
  - [Step 7: Run the application using ngrok](#step-7-run-the-application-using-ngrok)

## Requirements

1. **Javascript** and **NodeJS**
2. HTTP Protocol
3. PaaS as **Heroku**
4. Express Module
5. VSCode
6. Ngrok

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

## Step 2: Install ngrok

Ngrok est un outil qui permet de rendre votre poste de développement web local accessible depuis l'extérieur, via un tunnel sécurisé, depuis une url du type https://azerty.ngrok.io. Cette url est accessible par n'importe qui (vos clients, vos collègues...) et depuis n'importe où.

Go to https://ngrok.com/download and Install it ! 😉 It will be useful to test the application locally in SFMC

## Step 3: Start Node Project and Install dependencies

Create a folder where you will code your Node.js Application. For example: (first-custom-activity). This folder will be empty at the begginig. Open it with VSCode 😁

Open a terminal or a command prompt (Windows) inside the folder and tap `npm init -y`. This command will start a node.js project by creating a _package.json_ file.

Install Express and dotenv module with the following command:
`npm i express dotenv`. Once executed this command, you will see a new *node_modules* folder and a *package-lock.json* file.

## Step 4: Create Folder Structure

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

## Step 5: Start Node Js Server using Express

copy and paste the following code inside **./server.index.js**

```js

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```

Finally Open a terminal and exectue `npm run dev` This command will start the server. Finally go to http://localhost:3000 and see the Magic! 😎

## Step 6: Create the First Custom Activity

For this section I will rely entirely on the documentation made by Salesforce https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/creating-activities.html . Feel free to consult it to find more details about each section. Remember that this is just a quick guide or even a template to get you started!

### config.json

For simplicity, the documentation mostly refers to custom activities. In Journey Builder, custom events and custom activities use the same framework, so building either object follows the same structure. For event-specific instructions, see Considerations for Building Custom Activities.

Copy and paste the Following Code Inside **./public/config.json**

```json
{
	"workflowApiVersion": "1.1",
	"metaData": {
		"icon": "images/sms.png",
		"category": "message"
	},
	"type": "myActivityType",
	"lang": {
		"en-US": {
			"name": "Custom Activity (Workflow API v1.1)",
			"description": "A custom Journey Builder activity using workflow API v1.1 format."
		}
	},
	"arguments": {
		"execute": {
			"inArguments": [],
			"outArguments": [],
			"timeout": 100000,
			"retryCount": 1,
			"retryDelay": 10000,
			"concurrentRequests" : 5,
			"url": "https://some-endpoint.com/execute"
		}
	},
	"configurationArguments": {
		"save": {
			"url": "URI/for/your/activity/save"
		},
		"publish": {
			"url": "URI/for/your/activity/publish"
		},
		"validate": {
			"url": "URI/for/your/activity/validate"
		},
		"stop": {
			"url": "URI/for/your/activity/stop"
		}
	},
	"userInterfaces": {
		"configModal": {
			"height": 200,
			"width": 300,
			"fullscreen": true
		}
	},
	"schema": {
		"arguments": {
			"execute": {
				"inArguments": [],
				"outArguments": []
			}
		}
	}
}
```

### Index.html

Copy and paste the following code inside **./public/index.html**

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Custom Journey Builder Activity</title>

    <link rel="stylesheet" type="text/css" href="vendor/salesforce-lightning/assets/styles/salesforce-lightning-design-system.min.css" />

    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/require.js"></script>
    <script type="text/javascript">
      (function () {
        var config = {
          baseUrl: "js",
        };

        var dependencies = ["customActivity"];

        require(config, dependencies);
      })();
    </script>

  </head>
  <body>
        My First Custom Activity
  </body>
</html> 
```

### Download postmonger, jquery and require libraries

Go to the **main** branch on this repository and download 

- **./public/js/jquery.min.js**
- **./public/js/postmonger.js**
- **./public/js/require.js**

### customActivity.js

Copy and Paste the following code inside **./public/js/customActivity.js** file.

```js
define(["postmonger"], function (Postmonger) {
    "use strict";
  
    var connection = new Postmonger.Session();
    var payload = {};
  
    $(window).ready(onRender);
  
    connection.on("initActivity", initialize);
    connection.on("requestedTokens", onGetTokens);
    connection.on("requestedEndpoints", onGetEndpoints);
  
    connection.on("clickedNext", onClickedNext);
    connection.on("clickedBack", onClickedBack);
    connection.on("gotoStep", onGotoStep);
  
    function onRender() {
      // JB will respond the first time 'ready' is called with 'initActivity'
      connection.trigger("ready");
  
      connection.trigger("requestTokens");
      connection.trigger("requestEndpoints");
  
    }
  
    function initialize(data) {
      if (data) {
        payload = data;
      }
  
      var message;
      var hasInArguments = Boolean(
        payload["arguments"] &&
          payload["arguments"].execute &&
          payload["arguments"].execute.inArguments &&
          payload["arguments"].execute.inArguments.length > 0
      );
  
      var inArguments = hasInArguments
        ? payload["arguments"].execute.inArguments
        : {};
  
      $.each(inArguments, function (index, inArgument) {
        $.each(inArgument, function (key, val) {
          if (key === "message") {
            message = val;
          }
        });
      });
  
    }
  
    function onGetTokens(tokens) {
      // Response: tokens = { token: <legacy token>, fuel2token: <fuel api token> }
      // console.log(tokens);
    }
  
    function onGetEndpoints(endpoints) {
      // Response: endpoints = { restHost: <url> } i.e. "rest.s1.qa1.exacttarget.com"
      // console.log(endpoints);
    }
  
    function onClickedNext() {
      save()
    }

    function save() {
  
  
      payload["metaData"].isConfigured = true;
  
      connection.trigger("updateActivity", payload);
    }
  

  });

```

### Modify ./server/index.js

```js
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { title: 'My Custom Activity' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```

Finally Execute the Applicatio  using the command: `npm run dev`

## Step 7: Run the application using ngrok

Once Installed Ngrok and with the step 6 finished, you can use ngrok to run the application.

Firstly, run the app using `npm run dev` and after this `ngrok http 3000`. The second command will open a tunnel and will give you a public endpoint to connect Salesforce Marketing Cloud to your server.

Copy the **https** endpoint for the next steps! 
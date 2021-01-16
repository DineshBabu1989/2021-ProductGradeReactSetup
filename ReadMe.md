# Setting up a production grade react project setup using webpack
This is a project where you will learn to create a react project by properly
understanding all the internals
## Step:1 Setting up and configuring webpack to bundle JS
 Right now the project has a very minimal setup and when you run 'npm run build'
 a webpack bundles your file index.js and creates a bundle bundle.js which can you find 
 in the dist folder. The webpack.config.js is self explanatory.
 ## Step:2 Configuring asset management 
     In this set will configure webpack so that we can use CSS, Images, Fonts, files inside our 
     JS file for this need something called loaders from webpack for achieving this task
 ### Step:2.1 Bundling CSS along with JS
     add css-loader, style-loader and configure webpack.config.js after this step when you run 
     'npm run build' you could see you have bundled your css along with JS. Right now the bundle.js 
     is 4kb
 ### Step:2.2 Bundling Images along with JS
     Images are bundled with the built in assest management modules, after adding the images and 
     configuring webpack, bundling a 29kb image caused the bundle size to increase to 8kb and the 
     image is assigned a hash and moved to the dist folder by webpack, now we can use the image both 
     inside JS and CSS files. At this point we are slowly realising the image shouldn't be part of the 
     bundle. we will come to solve this issue later.
 ### Step:2.3 Adding fonts to your project
     The most ideal way to load fonts is adding them to assets and managing them inside the project, 
     here in our project we will download and use the 'Roboto' font. We will make sure we support all 
     the browsers. After adding the configuration and fonts to the local assets folder, We run the build 
     command and the new build bundle.js is generated and it has the font's linked. we also see that 
     the fonts are located in side the dist folder now. We can also see the bundle.js is still at 8kb.
 ## Step:3 Adding icon fonts 
    What are icon fonts? they are svg images which are converted in to fonts. I would prefer to download 
    and use fonts that I need selectively otherwise I will end up increasing the bundle size with the 
    amount of fonts that are added to the project.I personally used fontello fonts which gave me an option 
    to select the needed fonts, so I added the icon fonts to the project in a similar way like the one that I
    followed for adding the roboto font. Now lets remove the Image which has been increasing the 
    bundle size :), Now with around 35 icons added and image removed bundel size is around 12kb.
 ## Step:4 Adding dynamic bundle name generation for multiple bundles
    Add configuration to create multiple bundles, dynamic bundle naming and clean up of previous 
    build assests plus generating a new index.html dynamically, everytime when the 'npm run build' command
    is ran.
    using 2 plugins 
    - html-webpack-plugin
    - clean-webpack-plugin
 ## Step:5 Configuring webpack for development
    We need to further configure webpack to use webpack-dev-server for helping us in development,
    Some additional configuration to track errors during the development phase using inline-source-map.
    Now in the scripts
      "watch": "webpack --watch", // doesn't serve the file on dev server, but rebuilds the build on changes
      "start": "webpack serve --open" // doesn't create a build, but it serves a inmemory build file

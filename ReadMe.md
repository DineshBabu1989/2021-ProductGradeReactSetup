# Setting up a production grade react project setup using webpack
This is a project where you will learn to create a react project by properly
understanding all the internals
## Step:1 Setting up and configuring webpack to bundle JS
 Right now the project has a very minimal setup and when you run 'npm run build'
 a webpack bundles your file index.js and creates a bundle bundle.js which can you find 
 in the dist folder. The webpack.config.js is self explanatory.
## Step:2 Configuring asset management 
  In this set will configure webpack so that we can use CSS, Images, Fonts, files inside our JS file
  for this need something called loaders from webpack for achieving this task
### Step:2.1 Bundling CSS along with JS
     add css-loader, style-loader and configure webpack.config.js after this step when you run 'npm run build'
     you could see you have bundled your css along with JS. Right now the bundle.js is 4kb
### Step:2.2 Bundling Images along with JS
    Images are bundled with the built in assest management modules, after adding the images and configuring webpack,
    bundling a 29kb image caused the bundle size to increase to 8kb and the image is assigned a hash and moved to the dist 
    folder by webpack, now we can use the image both inside JS and CSS files.
    At this point we are slowly realising the image shouldn't be part of the bundle. we will come to solve this issue later.
### Step:2.3 Adding fonts to your project
    The most ideal way to load fonts is adding them to assets and managing them inside the project, here in our project we will 
    download and use the 'Roboto' font. We will make sure we support all the browsers. After adding the configuration and fonts to the
    local assets folder, We run the build command and the new build bundle.js is generated and it has the font's linked. we also see that 
    the fonts are located in side the dist folder now. We can also see the bundle.js is still at 8kb.
# 1_intro_to_webpack
A Intro Step by Step to build a node js webpack project


## Step 1. Init a npm project

```
npm init -y
```

creates a package.json with default

## Step 2. Install basic webpack packages

```
npm install webpack webpack-cli --save-dev
```

## Step 3. Add index.html and index.js as entry files

Copy code shown in the commit No.3

## Step 4. Make your first bundle

- 4-1. move index.html inside dist/index.html
- 4-2. change the html as it shows here https://github.com/Saayaman/1_intro_to_webpack/blob/d5809991a303e03caa7f1d1615368740c24c8b0c/dist/index.html
- 4-3. Import lodash dynamically
https://github.com/Saayaman/1_intro_to_webpack/commit/d5809991a303e03caa7f1d1615368740c24c8b0c#diff-1fdf421c05c1140f6d71444ea2b27638

- 4-3. ```npm install --save lodash```
- 4-4. ```npx webpack```
  
 npx webpack is a command to bundle your file into main.js!
 If it text in html, you are doing it right! You just made your first bundle!
 
 
## Step 5. Add configuration file and add Script

- 5-1. Add webpack.config.js
https://github.com/Saayaman/1_intro_to_webpack/commit/a9746441fc301dcf8191f053fd1e5612b2d36072#diff-11e9f7f953edc64ba14b0cc350ae7b9d

- 5.2 Add Script(command) for bundling
https://github.com/Saayaman/1_intro_to_webpack/commit/a9746441fc301dcf8191f053fd1e5612b2d36072#diff-b9cfc7f2cdf78a7f4b91a753d10865a2R8

- 5.3 Try Chaging text in the index.js like ```Hello, World``` to see if it bundles correctly later
- 5.4 ```npm run build```

If the text in the html changes, you are doing it right!

### Step 6. Add Babel

- 6-1. ```npm install babel-core babel-loader babel-preset-es2015 webpack --save-dev```
- 6-2. Configure in webpack.config.js https://github.com/Saayaman/1_intro_to_webpack/commit/6dd334970f6113811fdaed1adb5b052c3cf47279#diff-11e9f7f953edc64ba14b0cc350ae7b9d
- 6.3. Try changing something in index.js and build!
```npm run build```

Remember, es2015 is already supported in modern browsers, so you won't see what changed, but it is necessary to add it.


### Step 7-1. Be able to load css

- 1. Add css loader 
```npm install --save-dev style-loader css-loader```
- 2. Configure webpack.config.js
https://github.com/Saayaman/1_intro_to_webpack/commit/c8f538670aa6854347e86b2526fdb9914a57da9e#diff-11e9f7f953edc64ba14b0cc350ae7b9d
- 3. Try adding something ```css``` to see if sass works now!
- 4. Remember to always build! ```npm run build```

### Step 7-2. Be able to load sass

- 1. Add sass loader 
```npm install sass-loader node-sass --save-dev```
- 2. Configure webpack.config.js
- 3. Try adding something ```sass``` to see if sass works now!
- 4. Remember to always build! ```npm run build```


### Step 7-3. Be able to load image files

- 1. Add sass loader 
```npm install --save-dev file-loader```
- 2. Configure webpack.config.js 
- 3. Try adding something ```images``` to see if sass works now!
- 4. Remember to always build! ```npm run build```

### Step 8. Setting up HtmlWebpackPlugin

HtmlWebpack plugin lets you update the index.html from the webpack configuration!
Basically you are generating index.html by controlling webpack.

this is for keeping index.html always up-to-date.

- 1. ```npm install --save-dev html-webpack-plugin```
- 2. Add things in webpack.config.js
https://github.com/Saayaman/1_intro_to_webpack/commit/cf3ff5beea61f82b226791f96b4c839fc2b1145d#diff-11e9f7f953edc64ba14b0cc350ae7b9d
- 3. ```npm run build```

tada! index.js will automatically be changed to the title you set after you build!!


### Step 9. Add CleanWebpackPlugin and template

- CleanWebpackPlugin will enable you to make your /dist folders clean
- will erase files not used etc...

- 1. ```npm install --save-dev clean-webpack-plugin```
- 2. Try chaging the output file name in wepack, and adding the plugin https://github.com/Saayaman/1_intro_to_webpack/commit/bf958911399e6f97654e6f331cbe717da0fecda0#diff-11e9f7f953edc64ba14b0cc350ae7b9d
- 3. ```npm run build```

tada! the bundle is switched to the new name!

- 4. add code in webpack.config.js so we can use templates!
https://github.com/Saayaman/1_intro_to_webpack/commit/bf958911399e6f97654e6f331cbe717da0fecda0#diff-11e9f7f953edc64ba14b0cc350ae7b9d

- 5. Make a new index.html file inside public folder for using as a template!
- 6. ```npm run build```

Tada! the dist/index.html is reading from public/index.html


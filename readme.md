Walking through this course https://github.com/LinkedInLearning/typescript-EssT-2428199

### Preparing evironment

for Debian like distros (for others substitute apt with your pachkage manager for example yum for CentOS):
 - sudo apt install npm
 - npm install typescript --save-dev
 - sudo apt install node-typescript

to be able to use jQuery with the confort and linting it you also need to install @types/jquery:
 - npm i --save-dev @types/jquery

in the chapter 5 we need to install:
- npm i reflect-metadata

but before we need to update our nodejs because this functionality starts working at least from v14. The best choice is nvm 
https://github.com/nvm-sh/nvm
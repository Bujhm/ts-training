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

History (reveresd):
- 0c4d8cb environment preparation, tsconfig.json and ensuring that validation is working properly
- 373fe3f makes JS be validated (before fix issues)
- daf95f6 after fixing issues,  but one remains to be fixed in another way )
- 99ebad6 fixes the last issue with installing the library npm i --save-dev @types/jquery
- 96700d0 primitives and built in types
- 2c0d4e7 createing cusom types with interfaces
- 734e84b Defining types using type aliases
- 1b18feb defining enumerable types
- cede96c typing functions
- 5d8145e Defining a metatype using generics, use case 1
- 15b15d4 Defining a metatype using generics, use case 2 - srict generic, different generic type for IN and OUT
- 08c1b18 Defining a metatype using generics, use case 3 - matching properties in interfaces
- d387c46 Defining a metatype using generics, use case 4 - generic typed interfaces
- 7bb0885 combining multiple types with union types, wartch comments
- 338a0b0 keyof operator, part 1
- ba00f0e keyof operator, part 2
- 1d50236 keyof operator, part 3 - refactoring
- 2773f8c typeof operator, part 1 - before
- 37dbc43 typeof operator, part 2 - after
- dc2ea93 indexed access types, part 1 - before
- 57f1dbe indexed access types, part 2 - after
- 96df297 defining dynamic but limited types with records, part 1 - before
- ff84c6c defining dynamic but limited types with records, part 2 - after, but still have issue
- 7a24a1d extending and modifying existing types, part 1 - before
- cc260b6 extending and modifying existing types, part 2 - after, see key note comments
- 3d5c272 extracts metadata from existing types, part 1 - before
- ea79dcf extracts metadata from existing types, part 2 - after
- 5d88d52 chapter 4 challenge, before
- cdaa98e chapter 4 challenge, this resolves only one half of the problem
- b9c1c66 chapter 4 challenge, after
- 025f74a what are decorators and why are they helpful, part 1 - before
- 072a90a what are decorators and why are they helpful, part 2 - after + preparations for decorators
- 00bc2bb creating a method decorator, part 1 - before
- 0878474 creating a method decorator, part 2 - after, here is the decorator but the job is not finished )
- 6d3723e creating decorator factories that fixes the issue with @authorize(param)
- 6aa0ac2 creating a class decorator, part 1
- f484b6c creating a class decorator, part 2
- 11495a9 creating a property decorator
- 302aa41 share code with imports and exports, part 1 - before
- 388de29 share code with imports and exports, part 2 - after
- b6e641b defining global types with ambient modules
- 5ee549a declaration merging
- 1b93f94 (HEAD -> main, origin/main) executing modular code

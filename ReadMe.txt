ENVIRONMENTAL SETUP

Install node and npm
https://nodejs.org/en/download/
Install VS code
https://code.visualstudio.com/download
Install Typescript
npm install -g typescript

Open a command prompt in the project's root directory (APM)

Type: npm install This installs the dependencies as defined in the package.json file.

Type: npm start This launches the TypeScript compiler (tsc) to compile the application and wait for changes. It also starts the lite-server and launches the browser to run the application.

ANGULAR 2 CONCEPTS

Basic files : 
---------------------------------------------------------------------------------------------------
package.json	  |  This file has the references of all the Angular 2 modules. 
                  |  Node will use this file to download all the Angular modular files.
tsconfig.json	  |  This is a configuration file for typescript and will be used by typescript
                  |  to define how transpiling process takes place in typescript. 
typings.json	  |  Typescript is a new language some of the old JS frameworks cannot be consumed
                  |  in typescript. For those frameworks we need to define the typings.
systemjs.config	  |  SystemJS is a module loader. This configuration file defines the configuration
                  |  for SystemJS module loader.
---------------------------------------------------------------------------------------------------

Decorator : 
Specified with @ sign. helful for proving wrapper over the servicing class. To get these decorators
we need to import some libraries for example @angular/core

Class : 
Can define method and properties.

Interface:
To provide contract for classes

Life Cycle :

System.JS - > Main.Js - > App module -> AppComponent -> Child Components/Pipes/Services

Component: 

It is like directive consisting of templateurl, selector, model id, styleurls etc... properties. 
Component is useful for binding logic to the template. 

Template : 

Html file which contains angular code. 
[] for one way property binidng eg [title]="class property"
() for one way method/event biding eg (click)="GetProducts()"
[()] for two way binding eg [(ngModel)]="Class property"

Custom filter:
If we need to create customer filter, we need to create class which implement PipeTransform 
and override transform method. Also you need to add pipe decorator to expose this filter.

Service Injection : 

Create class with @Injectable decorator. use this class as provider in root component since it will apply to all child Components.
inject this service instance on the constructor of child component.
import{_ as t,c as a,a1 as n,o}from"./chunks/framework.A1JjM_w9.js";const u=JSON.parse('{"title":"Code","description":"","frontmatter":{},"headers":[],"relativePath":"code.md","filePath":"code.md"}'),i={name:"code.md"};function s(r,e,d,l,h,c){return o(),a("div",null,e[0]||(e[0]=[n('<h1 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h1><p>This page gives an overview about how the application and it&#39;s code are structured.</p><h2 id="frontend" tabindex="-1">Frontend <a class="header-anchor" href="#frontend" aria-label="Permalink to &quot;Frontend&quot;">​</a></h2><p>In the frontend, the code is encapsulated in loosely coupled components, to remove complexity and make it easily readable.</p><p>The components are using services, to get their data or dispatch actions.</p><p>The services are using api calls, that are defined in a separate folder.</p><p>The framework is handeling the updating of the view, when state is changing.</p><p>A router is handeling the routing by means of the url, and vice versa.</p><p>A language service is handeling the translations for the currently selected language. Any number of languages can be added to be available for selection by the user.</p><p>The styling is done with UnoCss and the preset of Tailwind. A &quot;dark:&quot; modifier allows to define separate styles for when the &quot;dark mode&quot; is activated by the user.</p><p>All Code is written in Typescript, so that we have very good autocompletion for functions or properties of a class or object.</p><p>Authentication is handled by an authentication token that is sent along to the backend with every request.</p><h2 id="backend" tabindex="-1">Backend <a class="header-anchor" href="#backend" aria-label="Permalink to &quot;Backend&quot;">​</a></h2><p>The backend is written in Typescript, and divided into Model, View and Controller.</p><p>The controller defines the endpoints using Get, Post, Put, and Delete actions. Annotations are used to define if a route is public or if certain permissions are needed.</p><p>Authentication is handled automatically by the framework, with the help of a JWT authentication token, that is sent along as a header with every request by the frontend.</p><p>The framework automatically is retrieving the user from the token, and makes it available in the controller.</p><p>Request parameters and the body payload are also made available with annotation decorated fields in the controller - in conjuction with generic typing.</p><p>The controller then is using services, to execute business logic.</p><p>The services are using dependency injection, to access other services or database models.</p><p>Database models are defined using annotated classes in a separate folder.</p><p>The dependency between documents (tables) are defined by the relations between classes and the types of their fields.</p><p>All writing and reading is handled by the database layer automatically. The query of the database is assembled with the help of the database layer &#39;mongoose&#39;. Query, update and selection commands are beautyfully assembled with the help of javascript objects.</p><p>After executing the business logic, the service is handeling the result back to the controller. The controller is giving back the result to the frontend, with http status codes and possible body payload result in JSON.</p><h2 id="next" tabindex="-1">Next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;Next&quot;">​</a></h2><p>Read the next chapter, to learn about automatic deployment.</p>',26)]))}const f=t(i,[["render",s]]);export{u as __pageData,f as default};
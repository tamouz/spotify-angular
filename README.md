# SpotifyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run npm i before ng serve
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## How the application works
This project uses angular 12.1.1 and bootstrap 
first the project asks the user to login via a third party spotify website then takes the token from the url 
the user can search for an artist name 
the application will send an http get to spotify api which will return 
json data conating the artists name etc
the user can click on any artist to see his albums 
the application will then navigate him to album search pages
and takes the artist id and name from the url.
## Components  
This application consists of 6 components and 3 services 
the app component , Login component which handles the way the application gets the user token 
,artist search and artist component finaly the albums search and the albums component
## Services
1.check if loged in which is used by token gaurd to check whether the application has a token from the user 
2.get token which returns the token and gets the token from login there are many ways to get the token
3.spotify api caller which is responsible for calling the spotify api and fetching json data
## Time needed to finish 
20 hours total
	6 hours to understand how should I get the token and how the api work 
	6 hours needed for html and css 
	3 hours for developing the services properly
	30 min needed to get the stars working properly 
	2 hours for routing
	1.5 hours where spent for making sure that everthing works fine 
	
I wasn't able to work friday and sunday 
and because of the electricty problems I didn't have enough time to work on this test 







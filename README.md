To run the project run the following commands:

`yarn` && 
`yarn start`

Project uses a small package called easy-peazy for state managenemt. This exact scenario does not need state management but I used it for demonstration purposes.
https://easy-peasy.now.sh/

to connect o the BE, you need to change the BASE_URL in src/api/constants to point to your IP address(or to the IP of whichever computer is running the node instance)

Project makes use of a scaffolding tool called Plop, which works off of the internals folder.
https://github.com/plopjs/plop
scaffolding can be used by running yhe following command:
`yarn generate`

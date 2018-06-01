SETTING UP THE PROJECT
----------------------

To set up this project, Node js needs to be installed in your computer. If it is not install, you can download and install it from the link: https://nodejs.org/download/

Next, we have to install Gulp globally. To do that, click on START and open Command Prompt by typing `cmd` in the search field and press Enter. Once the Command Prompt is open, type  `npm install g gulp` and press Enter.

We also have to install Bower globally. We can do that by typing into the Command Prompt `npm install g bower` and then press Enter.

After Gulp is successfully installed, change Command Prompt directory to your project ROOT directory. Then, type `npm install` and press Enter. This will take some time.

After this completes, type `bower install` in the Command Prompt and press Enter. Once this completes, your project set up should be complete.

To run/view your project, in the Command Prompt (keeping the path as the project ROOT folder), type `gulp serve` and press Enter.

To build your project, in the Command Prompt (keeping the path as the project ROOT folder), type `gulp build` and press Enter.

To view the built project, you will need to install live-server npm globally by typing  `npm install -g live-server` in the Command Prompt and press Enter. After the installation is successfully completed, you will need to enter the build directory (example: ROOT/dist) through the Command Prompt by typing `cd build dir` (example: `cd dist/`) then press Enter. After entering the build directory, type `live-server` and press Enter.
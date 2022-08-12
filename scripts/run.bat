cd ..
set port=%random%
start serve -l %port%
start http://localhost:%port%

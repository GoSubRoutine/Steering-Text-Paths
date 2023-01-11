cd ..
set /a port = %random% * 40000 / 32768 + 10000
start serve -l %port%
start http://localhost:%port%

#!/bin/sh

cd ..
port=$(($(($RANDOM%40000))+10000))
python -m webbrowser "http://localhost:$port"
serve -l $port

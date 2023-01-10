#!/bin/sh

cd ..
port=$(($(($RANDOM%40000))+10000))
serve -l $port &
python -m webbrowser "http://localhost:$port"

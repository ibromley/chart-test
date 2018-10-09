#!/usr/bin/env bash
set -e
echo "building go server for Linux..."
#Linux users, execut: CGO_ENABLED=0 go build -a
GOOS=linux
CGO_ENABLED=0 
go build -a
docker build -t server .
go clean
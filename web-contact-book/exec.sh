#!/usr/bin/env bash
docker build -t auth0-react-03-calling-an-api .
docker run -p 3000:3000 -p 3010:3010 -it auth0-react-03-calling-an-api

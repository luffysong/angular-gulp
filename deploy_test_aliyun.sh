#!/bin/bash

npm run test
rsync -rvltOD ./dist/* "www@ali-rong-$1:/data/docker/$2/work/frontend/prod/36kr/nrong/dist"

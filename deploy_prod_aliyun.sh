#!/bin/bash

cdn=1 online=1 npm run prod

cdnstr="/data/work/asset/nrong"
####### CDN

#site1
rsync -rvltOD ./dist/* ali-rong-proxy-01:$cdnstr
rsync -rvltOD ./dist/* ali-rong-api-01:$cdnstr

#site2
rsync -rvltOD ./dist/* ali-rong-proxy-02:$cdnstr
rsync -rvltOD ./dist/* ali-rong-api-02:$cdnstr


###### 业务逻辑
pathstr="/data/work/frontend/prod/36kr/nrong/dist"
if [ $1 = 'site1' ]; then
    rsync -rvltOD ./dist/* ali-rong-proxy-01:$pathstr
elif [ $1 = 'site2' ]; then
    rsync -rvltOD ./dist/* ali-rong-proxy-02:$pathstr
elif [ $1 = 'sim' ]; then
    rsync -rvltOD ./dist/* ali-rong-sim-01:$pathstr
elif [ $1 = 'all' ]; then
    rsync -rvltOD ./dist/* ali-rong-proxy-01:$pathstr
    rsync -rvltOD ./dist/* ali-rong-proxy-02:$pathstr
    rsync -rvltOD ./dist/* ali-rong-sim-01:$pathstr
fi


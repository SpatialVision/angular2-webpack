#!/bin/bash
: ${TARGET_ENV?"Need to set TARGET_ENV e.g. TARGET_ENV=dev TARGET_ENV=qa TARGET_ENV=uat or TARGET_ENV=prod"}

export CONTAINER_WEBAPP=minview-webapp
export IMAGE_TAG_WEBAPP=svgitlab.spatialvision.com.au:4567/docker/angular2-docker:201701

source env-$TARGET_ENV.sh

function drun {
    CONTAINER=$1
    IMAGE_TAG=$2

    echo "Check if $CONTAINER exists, running or stopped"
    docker inspect -f {{.State.Running}} $CONTAINER
    ./dcheck.sh $CONTAINER
    STATUS=$?
    echo "Status is $STATUS"

    case "$STATUS" in
    "1")
        echo "ghost, what to do?"
        ;;
    "2")
        echo "Not running, starting"
        docker start $CONTAINER
        docker exec -it $CONTAINER bash
        ;;
    "3")
        echo "Does not exist, running"

        echo "Running $CONTAINER, in $(pwd)"
        docker run -it --rm --name $CONTAINER \
        -v $(pwd):/app \
        -p 8080:8080 \
        --privileged=true \
        $IMAGE_TAG

        #echo "Stop infinite"
        #docker exec $CONTAINER /app/stop-infinite-watch.sh
        ;;
    *)
        echo "Running, do nothing"
        ;;
    esac

}

drun $CONTAINER_WEBAPP $IMAGE_TAG_WEBAPP



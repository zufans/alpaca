#!/bin/bash

getExistingRepo(){
    repoList=("$@")
    repositoryName=""
    error=false
    while true ; do
        read -p "Repository Name: " repositoryName
        for repo in $repoList; do
            if [ "$repositoryName" == "$repo" ]; then
                echo "Error: There is already repository called $repositoryName"
                error=true
                break
            fi
        done
        if [ $error == false ]; then
            break
        fi

    done
    gh repo create "$repositoryName"
    if [ $? -eq 0 ]; then
        echo "$repositoryName"
    else
        echo "An error occurred creating repository"
        exit 1
    fi
    
}






export -f getExistingRepo
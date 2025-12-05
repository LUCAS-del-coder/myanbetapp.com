#!/bin/bash

# GitHub 倉庫連接腳本
# 使用方法: ./connect-github.sh <您的GitHub倉庫URL>

if [ -z "$1" ]; then
    echo "請提供您的 GitHub 倉庫 URL"
    echo "使用方法: ./connect-github.sh https://github.com/username/repo-name.git"
    echo "或者: ./connect-github.sh git@github.com:username/repo-name.git"
    exit 1
fi

GITHUB_URL=$1

echo "正在連接 GitHub 倉庫: $GITHUB_URL"
git remote add origin $GITHUB_URL

echo "正在推送到 GitHub..."
git branch -M main
git push -u origin main

echo "完成！您的代碼已推送到 GitHub"


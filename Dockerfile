# ベースイメージの指定
FROM node:lts

# 作業ディレクトリの指定
WORKDIR /usr/src/app

# プロジェクト情報のコピーとインストール
COPY package*.json ./
RUN npm install

# アプリケーションのコードをコンテナにコピー
COPY . .

# リッスンするポート番号を指定
EXPOSE 3000

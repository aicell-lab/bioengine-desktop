FROM node:20-slim
RUN  apt update
RUN  apt upgrade -y
RUN  apt install -y \
flatpak \
flatpak-builder \
libnss3 \
libdrm2 \
libgbm1 \
libx11-xcb1 \
libxcb-dri3-0 \
libxtst6 \
libnss3 \
libatk-bridge2.0-0 \
libgtk-3-0 \
libxss1 \
libasound2 \
libgl1 \
libgl1-mesa-dri

# FROM jamesdbloom/json-server
# WORKDIR /app
# COPY . .
# CMD ["json-server", "--watch", "db.json", "--port", "3000"].

# FROM node:18.15.0
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["npm", "start"]

# ตั้งค่า base image
FROM node:14-alpine

# ตั้งค่า directory ใน container ที่จะใช้เก็บโค้ดของเรา
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json ไปยัง directory ใน container
COPY package*.json ./

# ติดตั้ง dependencies โดยใช้ npm
RUN npm install
RUN npm install react-bootstrap bootstrap
RUN npm cache clean --force

# คัดลอกโค้ดทั้งหมดไปยัง directory ใน container
COPY . .

# ประกาศ port ที่จะใช้ในการเชื่อมต่อโปรเจ็ค
EXPOSE 3000

# รันคำสั่งเมื่อเปิด container ใช้งาน
CMD [ "npm", "start" ]
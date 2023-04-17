# ตั้งค่า base image
FROM node:14-alpine

# ตั้งค่า directory ใน container ที่จะใช้เก็บโค้ดของเรา
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json ไปยัง directory ใน container
COPY package*.json ./

# ติดตั้ง dependencies โดยใช้ npm
RUN npm install

# คัดลอกโค้ดทั้งหมดไปยัง directory ใน container
COPY . .

# ประกาศ port ที่จะใช้ในการเชื่อมต่อโปรเจ็ค
EXPOSE 3000

# รันคำสั่งเมื่อเปิด container ใช้งาน
CMD [ "npm", "run", "start-json:server" ]
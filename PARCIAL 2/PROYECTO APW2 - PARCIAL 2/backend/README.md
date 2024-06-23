
# Genlu

### [Demo Play Store]

1. Instalar PM2
  ```
  sudo npm install pm2 -g
  ```

2. Instalar NestJS
  > npm i -g @nestjs/cli

3. Instalar las dependencias
  > npm install

4. Levantar la base de datos
  ```
  docker-compose up -d
  ```

3. Compilar el source
  > npm run build

4. Ejecutar el main
  ```
  pm2 start dist/main.js --name Genlu
  ```


# Descripción

Test de Frontend para la empresa de GestoPago

## Correr en dev

1. Clonar el repositorio
2. Crear una copia del .env.template y env.local.template y renombrarlo a .env y env.local
3. Instalar las dependencias con `npm install`
4. Correr las migraciones de prisma `npx prisma migrate dev`
5. Ejecutar seed de prisma `npm run seed`
6. Correr el proyecto con `npm run dev`

## Correr en producción

1. Clonar el repositorio
2. Crear una copia del .env.template y renombrarlo a .env
3. Instalar las dependencias con `npm install`
4. Correr las migraciones de prisma `npx prisma migrate dev`
5. Ejecutar seed de prisma `npm run seed`
6. Correr el proyecto con `npm run build`
7. Correr el proyecto con `npm run start`

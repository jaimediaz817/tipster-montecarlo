
---------------------------------------------------
# BUG: B-01
---------------------------------------------------
- Al ejecutar NEST en el puerto 3000 con:
npm run start:dev  
- se reporto BUG con bcrypt por tema de node_modules

## SOLUCIÓN: B-01
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock
npm cache clean --force
npm install
npm install bcrypt@latest
npm run start:dev
---------------------------------------------------



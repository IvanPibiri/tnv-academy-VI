## DB Migrations con Sequelize CLI

Questo è solo un esempio di app che sfrutta i tool di migration di Sequelize. Potete approfondire facendo riferimento alla [documentazione](https://sequelize.org/docs/v6/other-topics/migrations/).

Installiamo i tool necessari

```bash
npm install --save-dev sequelize-cli
npm install sequelize
npm install mysql2
```

Inizializziamo la struttura del progetto 

```bash
sequelize init
```

Modifichiamo `config.json` con i puntamenti al DB di nostro interesse

```json
{
  "development": {
    "username": "root",
    "password": "root",
    "database": "tnv_movies_db",
    "host": "127.0.0.1",
    "port": 8889,
    "dialect": "mysql"
  }
}
```

Creiamo il database

```bash
sequelize db:create
```

Creiamo il modello per un Movie

```bash
sequelize model:generate --name Movie --attributes title:string,author:string,year:integer
```

Applichiamo la migration, verrà creata la tabella nel DB

```bash
db:migrate
```

Opzionalmente creiamo dei seed per il popolamento iniziale dei dati

```bash
sequelize seed:generate --name demo-movie
```

Aggiorniamo movie.js con i dati di esempio

```javascript
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [{
      title: 'The Birth of a Nation',
      author: 'D. W. Griffith',
      year: 1915
    },
    {
      title: 'Nosferatu',
      author: 'F. W. Murnau',
      year: 1922
    }], {});
  },
```

Applichiamo il seed

```bash
sequelize db:seed:all
```

# Hello Angular

Creare il progetto selezionando:
- Angular Routing: yes
- StyleSheet: SCSS

```bash
ng new hello-angular
```

Avviare l'app

```bash
ng serve
```

Struttura di base vista oggi

```
src
 |-- app
      |-- app.component.ts      // Componente
      |-- app.component.html    // Template
      |-- app.component.scss    // Stilesheet
      |-- app.module.ts         // Dichiara quali elementi sono disponibili nel modulo
 |-- main.ts                    // Effettua il bootsrap dell'app module
 |-- style.scss                 // Foglio di stile globale, lo usiamo per importare bootstrap
package.json                    // Metadati e dipendenze
angular.json                    // File di configurazione progetto e build
```

## Installazione Bootstrap

```bash
npm install bootstrap
```

Modificare il file `src/styles.scss` come nell'esempio.


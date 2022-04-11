## Esempi visti a lezione

### Type Inference

```typescript
let a = 5;
a = 'pippo'; // Errore!!
console.log(a)
// se l'avessi inizializzata stringa
let a = 'pluto';
a = 'pippo'; // OK!!
console.log(a)
```

### Dichiarazioni con tipizzazione

```typescript
let a: number; 
a = 5;
a = 'pippo' // Errore!;

// Anche any si può specificare esplicitamente
let a: any;
```

### Interfacce

```typescript
interface User {
	name: string;
	surname: string;
	age?: number;  // Proprietà opzionale
}

let user: User;

user = { name: 'Mario', surname: 'Rossi', age: 56};
```

Partial per dichiarare tutte le proprietà come opzionali (utile ad esempio per l'edit):

```typescript
interface User {
	name: string;
	surname: string;
	age: number;
}

function updateUser(user: Partial<User>) {
    console.log(user);
}

updateUser({nome: 'Gastone'}); // OK!
```

#### Interfacce annidate

```typescript
interface User {
	name: string;
	surname: string;
	age: number;
  address: Address;
}

interface Address {
	city: string;
	region: string;
	houseNumber: number;
}

let user = {
	name: 'Pippo',
	surname: 'Pippi',
	age: 36,
	address: {
		city: 'Milano',
		region: 'Italy',
		houseNumber: 76
	}
```


## Array e collezioni di oggetti

```typescript
let users: User[];
// oppure
let users: Array<User>;
```

## Classi

```typescript
class Player {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    moveRight(amount: number) {
        this.x = this.x + amount;
    }

    moveUp(amount: number) {
        this.y = this.y - amount;
    }

    // ...

    reset() {
        this.x = this.y = 0;
    }
}

let player: Player;

player = new Player(0,0);
console.log(player.x, player.y)
player.moveRight(10);
console.log(player.x, player.y)
player.moveUp(3);
console.log(player.x, player.y)
player.reset();
console.log(player.x, player.y)
```

### Proprietà private, getter and setter

```typescript
class Player {
    private _x: number; // Naming convention con underscore per distinguerla dall'alias pubblico
    private y: number;

    get x() {
        return this._x;
    }

	constructor(private x: number, private y: number) {}
}
```

### Funzioni e tipi di ritorno

Si possono tipizzare anche i tipi di ritorno delle funzioni

```typescript

sum(a: number, b: number) :number {
    return a + b;
}

moveRight(amount: number): void { }// nessuna return
```
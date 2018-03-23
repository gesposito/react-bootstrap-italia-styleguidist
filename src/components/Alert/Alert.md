## Esempi

Gli avvisi sono disponibili in quattro tipologie diverse e per qualsiasi lunghezza di testo. Inoltre possono prevedere un pulsante di chiusura.

```js
<div>
    <Alert color="success">
        Questo è un alert di <em>success</em>!
    </Alert>
    <Alert color="danger">
        Questo è un alert di <em>danger</em>!
    </Alert>
    <Alert color="warning">
        Questo è un alert di <em>warning</em>!
    </Alert>
</div>
```

### Link evidenziato

Usa la classe `.alert-link` per dare risalto ad un link all'interno dell'alert.

```js
<Alert color="danger">
    Questo è un alert con un esempio di{" "}
    <a href="#" className="alert-link">
    link
    </a>{" "}
    evidenziato.
</Alert>
```

### Contenuto aggiuntivo

I messaggi di avviso possono avere del contenuto HTML aggiuntivo come degli heading, paragrafi e divisori.

```js
<Alert>
    <h4 className="alert-heading">Avviso di successo!</h4>
    <p>
        Stai leggendo questo importante messaggio di avviso di successo. Questo
        testo di esempio sarà più a lungo in modo da poter vedere come funzioni
        la spaziatura all'interno di un avviso con questo tipo di contenuto.
    </p>
    <hr />
    <p className="mb-0">
        Quando necessario, assicurarti di inserire le utilità di margine per
        mantenere gli spazi equilibrati.
    </p>
</Alert>
```

### Chiusura controllata

```js
const AlertExample = require('./Alert.example').default;

<AlertExample />
```
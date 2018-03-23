Prima di descrivere il componente modale di Bootstrap, assicurati di leggere quanto segue:

- Le modali sono costruite in HTML, CSS, e JavaScript. Sono posizionate al di sopra di ogni altro elemento della pagina
e rimuove lo scroll dal `<body>` in modo che il contenuto della modale invece scorra.
- Cliccando sulla parte che oscura la pagina (il cosiddetto _backdrop_ della modale), questa verrà chiusa automativamente.

## Esempi

### Componenti della modale

In basso un esempio di una modale _statica_, dove `position` e `display` sono stati sovrascritti.
Sono inclusi l'intestazione, il corpo (obbligatorio per il `padding`), e il footer della modale (opzionale). È
richiesta l'inclusione di intestazioni o elementi con funzione di chiusura della modale stessa.

```js
const { ModalHeader, ModalBody, ModalFooter, Button } = require("reactstrap");
<div style={{ padding: "100px 300px" }}>
    <div className="modal-content">
    <ModalHeader>Titolo della modale</ModalHeader>
    <ModalBody>Il testo del corpo della modale va qui.</ModalBody>
    <ModalFooter>
        <Button color="secondary">Chiudi</Button>
        <Button color="primary">Salva modifiche</Button>
    </ModalFooter>
    </div>
</div>
```

### Bottone di chiusura

Per chiudere la modale, si può utilizzare un bottone con classe `.close`.

**Assicurati di inserire del testo per gli screen readers**, utilizzando l'attributo `aria-label`.

```js
const { Button } = require("reactstrap");
<div style={{ position: "relative", padding: 10 }}>
    <Button className="close" style={{ position: "absolute" }}>
        &times;
    </Button>
</div>
```

### Demo

Attiva o disattiva la demo di una modale facendo clic sul pulsante qui sotto. Essa scivolerà verso il basso e si
dissolverà dalla parte superiore della pagina.


```js
const ModalExample = require('./Modal.example').default;
<ModalExample />
```

### Scroll di contenuti lunghi

Quando le modali diventano troppo lunghe per il viewport o il dispositivo dell'utente, scorrono indipendentemente dalla
pagina stessa.


```js
const ModalExample = require('./Modal.example').default;
<ModalExample long />
```

### Centratura verticale

Aggiungi `.modal-dialog-centered` a `.modal-dialog` per centrare verticalmente la modale.


```js
const ModalExample = require('./Modal.example').default;
<ModalExample centered />
```

### Tooltip and popover

[Tooltip]({{ site.baseurl }}/docs/componenti/tooltips/) e [popover]({{ site.baseurl }}/docs/componenti/popovers/) possono essere inseriti all'interno delle modali. Quando le modali vengono chiuse, ogni tooltip e popover all'interno vengono automaticamente chiusi.


```js
const ModalTooltipExample = require('./ModalTooltip.example').default;
<ModalTooltipExample />
```

### Uso della griglia

Utilizza la griglia di Bootstrap all'interno di una modale  annidando `.container-fluid` all'interno di `.modal-body`. Poi, usa le normali classi della griglia come faresti in qualsiasi altro posto.


```js
const ModalGridExample = require('./ModalGrid.example').default;
<ModalGridExample centered />
```

### Rimuovere l'animazione

Per avere modali che appaiono semplicemente senza dissolvenza, rimuovi la classe `.fade` dal codice della tua modale.

```js
const ModalExample = require('./Modal.example').default;
<ModalExample fade={false} />
```

## Dimensioni opzionali

Le modali hanno due dimensioni opzionali, disponibili tramite classi da posizionare su un `.modal-dialog`. Queste dimensioni entrano in gioco in determinati breakpoint per evitare barre di scorrimento orizzontali su finestre più strette.

```js
const ModalExample = require('./Modal.example').default;
<ModalExample sizing />
```
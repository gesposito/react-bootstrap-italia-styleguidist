Il plugin Javascript per costruire dropdown è basato su una libreria di terze parti, [Popper.js](https://popper.js.org/), che si occupa del posizionamento dinamico del dropdown stesso in congiunzione con la sua posizione all'interno del viewport.

Per l'attivazione di un dropdown è sufficiente racchiudere il link per l'apertura e il menu a discesa all'interno di un elemento con classe `.dropdown`, o un altro elemento che dichiari la `position: relative;`. I dropdown possono essere attivati da elementi `<a>` o `<button>` per soddisfare al meglio le tue esigenze.

### Dropdown con bottone

Ogni singolo `.btn` può essere trasformato in un bottone per l'apertura di dropdown con del semplice markdown HTML. Eccone un esempio:

```js
const DropdownExample = require('./Dropdown.example').default;
<DropdownExample />
```

È possibile anche usare elementi di tipo `<button>` all'interno dei dropdown.

```js
const DropdownButtonExample = require('./DropdownButton.example').default;
<DropdownButtonExample />
```

Ovviamente, funzionano anche tutte le varianti già disponibili per i bottoni. Di seguito, un esempio di utilizzo con classe `btn-danger`:

```js
const DropdownButtonExample = require('./DropdownButton.example').default;
<DropdownButtonExample color="danger" />
```

Un esempio con bottoni divisi:

```js
const DropdownButtonGroupExample = require('./DropdownButtonGroup.example').default;
<DropdownButtonGroupExample />
```

Un esempio con bottoni grandi e piccoli:

```js
const DropdownSizingExample = require('./DropdownSizing.example').default;
<DropdownSizingExample />
```

### Dropdown a tutta larghezza

Aggiungendo la classe `full-width` al menù del dropdown, è possibile ottenere un dropdown che occupa tutta la larghezza disponibile. Utile per la creazione di menu:

```js
const DropdownFullSizingExample = require('./DropdownFullSizing.example').default;
<DropdownFullSizingExample />
```

### Dropup, dropright e dropleft

Aggiungendo semplicemente la class `.dropup` all'elemento contenitore, la _dropdown_ si aprirà verso l'alto. Allo stesso modo, utilizzando invece le classi `.dropright` e `.dropleft`, il menù a tendina si aprirà rispettivamente a destra e sinistra.

- TBD

### Allineamento orizzontale

Un dropdown è allineato di default lungo il lato sinistro del suo elemento contenitore; per modificare questo comportamento e allineare il dropdown a destra, è sufficiente aggiungere la classe `.dropdown-menu-right` a `.dropdown-menu`

```js
const DropdownAlignmentExample = require('./DropdownAlignment.example').default;<DropdownAlignmentExample /> 
```

### Voci di menù attive

Aggiungere la classe `.active` agli elementi del dropdown che si vogliono mostrare come **attivi**.

```js
const { DropdownToggle, DropdownMenu, DropdownItem } = require("reactstrap");
<div style={{ paddingBottom: 150 }}>
  <Dropdown isOpen toggle={() => {}}>
    <DropdownToggle caret>Dropdown</DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Azione 1</DropdownItem>
      <DropdownItem active>Azione 2</DropdownItem>
      <DropdownItem>Azione 3</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</div>
```

### Voci di menù disabilitate

Aggiungere la classe `.disabled` agli elementi del dropdown che si vogliono mostrare come **disabilitati**.

```js
const { DropdownToggle, DropdownMenu, DropdownItem } = require("reactstrap");
<div style={{ paddingBottom: 150 }}>
  <Dropdown isOpen toggle={() => {}}>
    <DropdownToggle caret>Dropdown</DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Azione 1</DropdownItem>
      <DropdownItem disabled>Azione 2</DropdownItem>
      <DropdownItem>Azione 3</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</div>
```

## Informazioni aggiuntive

Per consultare altri esempi, vedere l'utilizzo di una dropdown con interi form al suo interno, capire meglio come utilizzare attributi `data-` per l'attivazione o come estendere il funzionamento del plugin Javascript del dropdown di Bootstrap 4, si rimanda alla [documentazione](https://getbootstrap.com/docs/4.0/components/dropdowns/) sul sito di Bootstrap.
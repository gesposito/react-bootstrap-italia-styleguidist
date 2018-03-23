Cose da sapere quando si utilizza il plugin popover:

- I popover si basano sulla libreria di terze parti [Popper.js](https://popper.js.org/).
Per fare in modo che i popover funzionino è necessario includere [popper.min.js]({{ site.cdn.popper }}) prima di
bootstrap-italia.js o usare la versione _bundle_ che contiene già Popper.js.
- I popovers richiedono il [plugin tooltip]({{ site.baseurl }}/docs/componenti/tooltips/) come dipendenza.
- I popover sono opt-in per ragioni di performance, quindi **devi inizializzarli tu stesso** con il codice che trovi di seguito.
- I `title` e i `content` con valori vuoti non mostreranno mai popover.
- Specifica `container: 'body'` per evitare problemi di rendering in componenti più complessi (come nei gruppi di input, gruppi di bottoni, etc).
- Attivare i popover su elementi nascosti non funzionerà.
- I popover per gli elementi `.disabled` o `disabled` devono essere attivati da un elemento contenitore.
- Quanto attivato da ancore che si estendono su più linee, i popover verranno centrati tra la larghezza complessiva delle ancore. Usa `white-space: nowrap;` sugli elementi `<a>` per evitare questo comportamento.
- I Popover devono essere nascosti prima che i loro elementi corrispondenti siano stati rimossi dal DOM.

## Esempio

```js
const PopoverExample = require('./Popover.example').default;
<PopoverExample />
```

### Le quattro direzioni

Sono disponibili quattro opzioni: allineato in alto, a destra, in basso e a sinistra.

```js
const PopoverPositionExample = require('./PopoverPosition.example').default;
<PopoverPositionExample />
```

### Elementi disabilitati

Elementi con l'attributo `disabled` non sono interattivi, il che significa che gli utenti non possono attivare il popover (o un tooltip) con il passaggio del mouse o facendo click su di essi. Come soluzione, ti consigliamo di attivare il popover da un elemento `<div>` o `<span>` contenitore e sovrascrivere il `pointer-events` su un elemento disabilitato.

Per gli eventi dei popover disabilitati, potresti preferire `data-trigger="hover"` in modo che il popover appaia come feedback visivo immediato per gli utenti in quanto non possono aspettarsi di _cliccare_ su un elemento disabilitato.

```js
const { Button, Popover, PopoverHeader, PopoverBody } = require("reactstrap");
  <div>
    <Button color="primary" id="Example" disabled>
      Popover disabilitato
    </Button>
    <Popover placement="right" target="Example">
      <PopoverHeader>Titolo del popover</PopoverHeader>
      <PopoverBody>
        Ed ecco alcuni contenuti sorprendenti. È molto coinvolgente. Non trovi?
      </PopoverBody>
    </Popover>
  </div>

```



Cose da sapere quando usi il plugin tooltip:

- I tooltip si basano sulla libreria di terze parti [Popper.js](https://popper.js.org/).
Per fare in modo che i tooltip funzionino è quindi necessario includere [popper.min.js]({{ site.cdn.popper }}) prima di
bootstrap-italia.js o usare la versione _bundle_ che contiene già Popper.js.
- I tooltip sono opt-in per ragioni di performance, quindi **devi inizializzarli tu stesso** con il codice che trovi di seguito.
- I tooltip con titoli vuoti non saranno mai visualizzati.
- Specifica `container: 'body'` per evitare problemi di rendering in componenti più complessi (come nei gruppi di input, gruppi di bottoni, etc).
- Attivare i tooltip su elementi nascosti non funzionerà.
- I tooltip per gli elementi `.disabled` o `disabled` devono essere attivati da un elemento contenitore.
- Quando attivati da collegamenti ipertestuali che si estendono su più righe, i tooltip verranno centrati. Usa `white-space: nowrap;`sui tuoi `<a>` per evitare questo comportamento.
- I tooltip devono essere nascosti prima che i loro elementi corrispondenti siano stati rimossi dal DOM.

## Esempio: Abilita i tooltip ovunque

Un modo per inizializzare tutti i tooltip su una pagina è quello di selezionarli tramite il loro attributo `data-toggle`:

## Esempi

Passa il mouse sopra i link sottostanti per visualizzare i tooltip:

```js
const { UncontrolledTooltip } = require("reactstrap");
<div className="bd-example tooltip-demo">
    <p className="muted">
        Ecco un <a href="#" id="Example1">bianco scenario</a>
        <br />
        per tratteggiarvi l’accompagnamento
        <br />
        degli oggetti di sfondo che pur vivono.
        <br />
        Non ne sarò <a href="#" id="Example2">l’artefice</a> impaziente.
        <br />
        Berrò alle coppe della nostalgia,
        <br />
        avrò preteso d’ozio nelle lacrime...
        <br />
        perché non mi ribello alla natura:
        <br />
        la mia lentezza li esaspera...
        <br />
        La mia lentezza? No, la mia fiducia.
        <br />
        Per adesso è deserto.
        <br />
        <a href="#" id="Example3">Il mondo può rifarsi senza me</a>,
        <br />
        E intanto gli altri mi denigreranno
    </p>
    <p>
        <em>La città nuova, Alda Merini</em>
    </p>

    <UncontrolledTooltip
        placement="top"
        target="Example1"
    >
        Primo tooltip
    </UncontrolledTooltip>
    <UncontrolledTooltip
        placement="top"
        target="Example2"
    >
        Secondo tooltip
    </UncontrolledTooltip>
    <UncontrolledTooltip
        placement="top"
        target="Example3"
    >
        Terzo tooltip
    </UncontrolledTooltip>
</div>

```

Passa il mouse sopra i link sottostanti per visualizzare i tooltip:
```js
const { UncontrolledTooltip, Button } = require("reactstrap");
<div style={{ padding: 100 }}>
    <Button id="Example11" className="m-3">Tooltip in alto</Button>
    <Button id="Example12" className="m-3">Tooltip a destra</Button>
    <Button id="Example13" className="m-3">Tooltip in basso</Button>
    <Button id="Example14" className="m-3">Tooltip a sinistra</Button>
    <Button id="Example15" className="m-3">Tooltip con HTML</Button>

    <UncontrolledTooltip
        placement="top"
        target="Example11"
    >
        Tooltip on top
    </UncontrolledTooltip>
    <UncontrolledTooltip
        placement="right"
        target="Example12"
    >
        Tooltip on right
    </UncontrolledTooltip>
    <UncontrolledTooltip
        placement="bottom"
        target="Example13"
    >
        Tooltip on bottom
    </UncontrolledTooltip>
    <UncontrolledTooltip
        placement="left"
        target="Example14"
    >
        Tooltip on left
    </UncontrolledTooltip>
    <UncontrolledTooltip
        placement="top"
        target="Example15"
    >
        <em>Tooltip</em> <u>with</u> <b>HTML</b>
    </UncontrolledTooltip>
</div>
```

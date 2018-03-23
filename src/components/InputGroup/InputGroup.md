## Esempio di base

Posiziona un componente aggiuntivo o un bottone su uno o entrambi i lati di un input.  **Ogni singolo gruppo di input supporta un solo elemento input** e il `<label>` viene sostituito dall'attributo `aria-label` oppure inserito fuori da `input-group`.

```js
const { InputGroupAddon, Input, FormGroup, Label } = require("reactstrap");
<div className="p-3">
    <InputGroup className="pb-3">
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input type="text" placeholder="Username" />
    </InputGroup>

    <InputGroup className="pb-3">
        <Input type="text" placeholder="Mail utente" />
        <InputGroupAddon addonType="append">@esempio.it</InputGroupAddon>
    </InputGroup>

    <FormGroup>
        <InputGroup className="pb-3">
            <InputGroupAddon addonType="prepend">
                https://esempio.it/utente/
            </InputGroupAddon>
            <Input type="text" id="basic-url" />
        </InputGroup>
        <Label for="basic-url">La tua URL</Label>
    </FormGroup>

    <InputGroup className="pb-3">
        <InputGroupAddon addonType="prepend">€</InputGroupAddon>
        <Input type="number" />
        <InputGroupAddon addonType="append">,00</InputGroupAddon>
    </InputGroup>

    <InputGroup>
        <InputGroupAddon addonType="prepend">Textarea</InputGroupAddon>
        <Input type="textarea" />
    </InputGroup>
</div>

```

## Dimensione

Aggiungi le relative classi di dimensionamento del form in `.input-group`, il contenuto verrà ridimensionato automaticamente senza la necessità di inserirla per ogni elemento interno.

**Il dimensionamento sui singoli elementi nel gruppo di input non è supportato.**

```js
const { InputGroupAddon, Input } = require("reactstrap");
<div>
    <InputGroup size="sm" className="mb-3">
        <InputGroupAddon addonType="prepend">Testo piccolo</InputGroupAddon>
        <Input type="text" />
    </InputGroup>

    <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">Testo predefinito</InputGroupAddon>
        <Input type="text" />
    </InputGroup>

    <InputGroup size="lg">
        <InputGroupAddon addonType="prepend">Testo grande</InputGroupAddon>
        <Input type="text" />
    </InputGroup>
</div>

```

## Checkbox e radio

Posiziona qualsiasi checkbox e radio all'interno di un addon del gruppo di input anziché nel testo.

```js
const { InputGroupAddon, Input } = require("reactstrap");
<div>
    <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">
            <InputGroup>
                <Input type="checkbox" />
            </InputGroup>
        </InputGroupAddon>
        <Input type="text" />
    </InputGroup>

    <InputGroup>
        <InputGroupAddon addonType="prepend">
            <InputGroup>
                <Input type="radio" />
            </InputGroup>
        </InputGroupAddon>
        <Input type="text" />
    </InputGroup>
</div>

```

## Input multipli

Sebbene siano supportati visivamente più `<input>`, gli stili per la validazione sono disponibili solo per gruppi di input con un singolo `<input>`.

```js
const { InputGroupAddon, Input } = require("reactstrap");
<div>
    <InputGroup>
        <InputGroupAddon addonType="prepend">Nominativo</InputGroupAddon>
        <Input type="text" placeholder="Nome" />
        <Input type="text" placeholder="Cognome" />
    </InputGroup>
</div>
```

## Aggiunte multiple

Sono supportati più add-on insieme e possono essere combinati anche con checkbox e input radio.

```js
const { InputGroupAddon, InputGroupText, Input } = require("reactstrap");
<div>
    <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">
            <InputGroupText>€</InputGroupText>
            <InputGroupText>0,00</InputGroupText>
        </InputGroupAddon>
        <Input type="text" />
    </InputGroup>

    <InputGroup>
        <Input type="text" />
        <InputGroupAddon addonType="append">
            <InputGroupText>€</InputGroupText>
            <InputGroupText>0,00</InputGroupText>
        </InputGroupAddon>
    </InputGroup>
</div>
```

## Aggiunta bottoni

```js
const { InputGroupAddon, Button, Input } = require("reactstrap");
<div>
    <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">
            <Button color="primary">Bottone</Button>
        </InputGroupAddon>
        <Input type="text" placeholder="" />
    </InputGroup>

    <InputGroup className="input-group mb-3">
        <Input type="text" placeholder="Contenitore" />
        <InputGroupAddon addonType="append">
            <Button color="primary">Bottone</Button>
        </InputGroupAddon>
    </InputGroup>

    <InputGroup className="input-group mb-3">
        <InputGroupAddon addonType="prepend">
            <Button color="primary">Bottone</Button>
            <Button color="primary">Bottone</Button>
        </InputGroupAddon>
        <Input type="text" placeholder="" />
    </InputGroup>

    <InputGroup className="input-group">
        <Input type="text" placeholder="Contenitore" />
        <InputGroupAddon addonType="append">
            <Button color="primary">Bottone</Button>
            <Button color="primary">Bottone</Button>
        </InputGroupAddon>
    </InputGroup>
</div>

```

## Bottoni con dropdown

```js
const InputGroupDropdownExample = require('./InputGroupDropdown.example').default;
<InputGroupDropdownExample />
```

## Pulsanti segmentati

```js
const InputGroupDropdownExample = require('./InputGroupDropdown.example').default;
<InputGroupDropdownExample split />
```

## Accessibilità

Gli screen reader avranno problemi con i tuoi moduli se non includi un'etichetta per ogni input. Per questi gruppi di input, assicurarsi che qualsiasi etichetta o funzionalità aggiuntiva venga conformata alle tecnologie assistive.

La tecnica esatta da usare (elementi `<label>` nascosti usando la classe `.sr-only`, o l'uso degli attributi `aria-label` e `aria-labelledby`, possibilmente in combinazione con `aria-describedby`) e quali informazioni aggiuntive dovranno essere trasmesse in base alla tipologia di widget dell'interfaccia che stai implementando. Gli esempi presenti in questa sezione forniscono alcuni approcci specifici.
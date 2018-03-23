## Layout della navigazione

Il componente identificato dalla classe `.nav`, si basa su flexbox e fornisce solide fondamenta per la costruzione di ogni tipo di navigazione. Esso include alcuni stili per l'override del layout di base delle liste, aggiungendo spaziature per ottenere aree cliccabili più ampie, e gestendo lo stile per le voci disabilitate.

```js
const { NavLink, NavItem } = require("reactstrap");
<div>
    <Nav className="mb-3">
        <NavLink active href="#">Link Attivo</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">Link Disabilitato</NavLink>
    </Nav>
    <Nav pills>
        <NavItem>
            <NavLink active href="#">Active</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
            <NavLink disabled href="#">Disabled</NavLink>
        </NavItem>
    </Nav>
</div>
```

### Allineamento orizzontale

I componenti `nav` sono di norma allineati a sinistra, ma tale impostazione può essere modificata a piacimento utilizzando una delle [utility flexbox]({{ site.baseurl }}/docs/utilities/griglie/#allineamento-orizzontale) per impostare l'allineamento orizzontale.

Si può centrare il menù con `.justify-content-center`:

```js
const { NavLink } = require("reactstrap");
<div>
    <Nav className="justify-content-center mb-3">
        <NavLink active href="#">Link Attivo</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">Link Disabilitato</NavLink>
    </Nav>
    <Nav className="justify-content-end mb-3">
        <NavLink active href="#">Link Attivo</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">Link Disabilitato</NavLink>
    </Nav>
    <Nav vertical>
        <NavLink active href="#">Link Attivo</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">Link Disabilitato</NavLink>
    </Nav>
</div>

```

## Menù a tab

Aggiungendo la classe `.nav-tabs` ad un normale `.nav` viene stilizzata una interfaccia a tab. Per rendere questa interfaccia dinamica e accessibile, è necessario approfondire  alla [pagina relativa all'utilizzo delle interfacce a tab]({{ site.baseurl }}/docs/componenti/tab).

```js
const { NavLink } = require("reactstrap");
<Nav tabs>
    <NavLink active href="#">Link Attivo</NavLink>
    <NavLink href="#">Link</NavLink>
    <NavLink href="#">Link</NavLink>
    <NavLink disabled href="#">Link Disabilitato</NavLink>
</Nav>
```

## Menù a bottoni

Sempre con lo stesso markup, ma utilizzando la classe `.nav-pills`, si ottiene un menù a bottoni:

```js
const { NavLink } = require("reactstrap");
<Nav pills>
    <NavLink active href="#">Link Attivo</NavLink>
    <NavLink href="#">Link</NavLink>
    <NavLink href="#">Link</NavLink>
    <NavLink disabled href="#">Link Disabilitato</NavLink>
</Nav>
```

### Classi "fill" e "justify"

Per forzare i contenuti dell'elemento `.nav` a distribuirsi in tutto lo spazio disponibile, si possono usare alcune classi di utilità.

Per occupare proporzionalmente tutto lo spazio a disposizione, si può usare `.nav-fill`. Con questa classe, tutto lo spazio orizzontale sarà riempito, ma non tutti gli elementi `nav-item` occuperanno la stessa larghezza.

```js
const { NavLink } = require("reactstrap");
<div>
    <Nav pills fill className="mb-3">
        <NavLink active href="#">Link con molto testo Attivo</NavLink>
        <NavLink href="#">Link con molto testo</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">Link Disabilitato</NavLink>
    </Nav>
    <Nav pills justified>
        <NavLink active href="#">Link con molto testo Attivo</NavLink>
        <NavLink href="#">Link con molto testo</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">Link Disabilitato</NavLink>
    </Nav>
</div>

```
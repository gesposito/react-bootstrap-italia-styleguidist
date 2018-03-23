L'interfaccia a tab (o schede) di Bootstrap si basa sull'utilizzo del [layout di navigazione]({{ site.baseurl }}/docs/componenti/navigazione), con l'aggiunta della classe `.nav-tabs`. Per ottenere una versione con sfondo scuro e testo chiaro bisognerà aggiungere un'ulteriore classe: `.nav-dark`.

```js
const { NavItem, NavLink} = require("reactstrap");
<div>
    <Nav tabs className="mb-3">
        <NavItem>
            <NavLink href="#" active>Link Attivo</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#" disabled>Link disabilitato</NavLink>
        </NavItem>
    </Nav>

    <Nav tabs className="nav-dark">
        <NavItem>
            <NavLink href="#" active>Link Attivo</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#" disabled>Link disabilitato</NavLink>
        </NavItem>
    </Nav>
</div>

```

L'esempio sopra riportato non ha molto senso senza un contenuto che cambi al di sotto di esso; per rendere tali interfacce navigabili è necessario utilizzare Javascript, come mostrato di seguito:

```js
const TabExample = require('./Tab.example').default;
<TabExample text />
```

Oppure al posto della label usare una icona.

```js
const TabExample = require('./Tab.example').default;
<TabExample icons />
```

Oppure con label e icona insieme

```js
const TabExample = require('./Tab.example').default;
<TabExample text icons />
```

### Tab a bottoni

I tab possono ereditare dalla navigazione l'utilizzo della classe `.nav-pills` per generare tab a bottoni:

```js
const TabButtonExample = require('./TabButton.example').default;
<TabButtonExample />
```

### Allineamento Verticale

Esempio:

```js
const TabButtonExample = require('./TabButton.example').default;
<TabButtonExample vertical />
```
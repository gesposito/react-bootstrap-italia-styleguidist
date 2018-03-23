### Varianti di colore

Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap 4, con alcune personalizzazioni:

```js
<div>
    <Button color="italia" className="mr-1">Italia</Button>
    <Button color="primary" className="mr-1">Primary</Button>
    <Button color="secondary" className="mr-1">Secondary</Button>
    <Button color="tertiary" className="mr-1">Tertiary</Button>
    <Button color="quaternary" className="mr-1">Quaternary</Button>
    <Button color="success" className="mr-1">Success</Button>
    <Button color="info" className="mr-1">Info</Button>
    <Button color="danger" className="mr-1">Danger</Button>
    <Button color="warning" className="mr-1">Warning</Button>
    <Button color="link" className="mr-1">Link</Button>
</div>
```

### Varianti di dimensione

Per ottenere bottoni di dimensione più grande o più piccola, è sufficiente utilizzare rispettivamente le classi `.btn-lg` e `.btn-sm`.

```js

<section>
    <div>
        <Button color="primary" size="lg">
            Large Button
        </Button>{" "}
        <Button color="secondary" size="lg">
            Large Button
        </Button>
    <div className="mt-3" />
        <Button color="primary" size="sm">
            Small Button
        </Button>{" "}
        <Button color="secondary" size="sm">
            Small Button
        </Button>
    <div className="mt-3" />
        <Button color="primary" block>
            Block level button
        </Button>
        <Button color="secondary" block>
            Block level button
        </Button>
    </div>
</section>

```

## Stato Attivo

Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. **There's no need to add a class to `<button>`s as they use a pseudo-class**. However, you can still force the same active appearance with `.active` (and include the <code>aria-pressed="true"</code> attribute) should you need to replicate the state programmatically.

```js
<div>
    <Button color="italia" active className="mr-1">Italia</Button>
    <Button color="primary" active className="mr-1">Primary</Button>
    <Button color="secondary" active className="mr-1">Secondary</Button>
    <Button color="tertiary" active className="mr-1">Tertiary</Button>
    <Button color="quaternary" active className="mr-1">Quaternary</Button>
    <Button color="success" active className="mr-1">Success</Button>
    <Button color="info" active className="mr-1">Info</Button>
    <Button color="danger" active className="mr-1">Danger</Button>
    <Button color="warning" active className="mr-1">Warning</Button>
    <Button color="link" active className="mr-1">Link</Button>
</div>
```

## Stato Disabilitato

Lo stato disabilitato è ottenuto aggiungendo l'attributo `disabled`:

```js
<div>
    <Button color="italia" disabled className="mr-1">Italia</Button>
    <Button color="primary" disabled className="mr-1">Primary</Button>
    <Button color="secondary" disabled className="mr-1">Secondary</Button>
    <Button color="tertiary" disabled className="mr-1">Tertiary</Button>
    <Button color="quaternary" disabled className="mr-1">Quaternary</Button>
    <Button color="success" disabled className="mr-1">Success</Button>
    <Button color="info" disabled className="mr-1">Info</Button>
    <Button color="danger" disabled className="mr-1">Danger</Button>
    <Button color="warning" disabled className="mr-1">Warning</Button>
    <Button color="link" disabled className="mr-1">Link</Button>
</div>
```

Per ulteriori informazioni sui bottoni si rimanda alla sezione [buttons](https://getbootstrap.com/docs/4.0/components/buttons/) del sito di Bootstrap.
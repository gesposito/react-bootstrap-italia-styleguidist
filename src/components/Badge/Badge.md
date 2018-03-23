## Esempio

La grandezza di ogni badge si adatta come dimensione a quella del font (misurato in unità `em`) dell'elemento in cui è contenuto.

```js
<div>
    <h1>
        Titolo di esempio <Badge color="secondary">New</Badge>
    </h1>
    <h2>
        Titolo di esempio <Badge color="secondary">New</Badge>
    </h2>
    <h3>
        Titolo di esempio <Badge color="secondary">New</Badge>
    </h3>
    <h4>
        Titolo di esempio <Badge color="secondary">New</Badge>
    </h4>
    <h5>
        Titolo di esempio <Badge color="secondary">New</Badge>
    </h5>
    <h6>
        Titolo di esempio <Badge color="secondary">New</Badge>
    </h6>
</div>
```

I badge possono essere utilizzati come parte di link o pulsanti per fornire un contatore.

```js
const { Button }  = require("reactstrap");

<Button color="primary">
    Notifiche <Badge color="secondary">4</Badge>
</Button>
```

## Variazioni contestuali

Aggiungi una delle seguenti classi per modificare l'aspetto di un badge.

```js
<div>
    <Badge color="italia">Italia</Badge>
    <Badge color="primary">Primary</Badge>
    <Badge color="secondary">Secondary</Badge>
    <Badge color="tertiary">Tertiary</Badge>
    <Badge color="quaternary">Quaternary</Badge>
    <Badge color="success">Success</Badge>
    <Badge color="danger">Danger</Badge>
    <Badge color="warning">Warning</Badge>
</div>
```

## Badges arrotondati

Per rendere i badge arrotondati puoi usare la classe `.badge-pill`.

```js
<div>
    <Badge color="italia" pill>Italia</Badge>
    <Badge color="primary" pill>Primary</Badge>
    <Badge color="secondary" pill>Secondary</Badge>
    <Badge color="tertiary" pill>Tertiary</Badge>
    <Badge color="quaternary" pill>Quaternary</Badge>
    <Badge color="success" pill>Success</Badge>
    <Badge color="danger" pill>Danger</Badge>
    <Badge color="warning" pill>Warning</Badge>
</div>
```

## Link

Se hai bisogno che un badge sia anche un link, aggiungi una delle classi contestuali `.badge-*` sull'elemento `<a>`. Di conseguenza anche gli stati **hover** e **focus** saranno attivi sul badge.

```js
<div>
    <Badge href="#" color="italia">Italia</Badge>
    <Badge href="#" color="primary">Primary</Badge>
    <Badge href="#" color="secondary">Secondary</Badge>
    <Badge href="#" color="tertiary">Tertiary</Badge>
    <Badge href="#" color="quaternary">Quaternary</Badge>
    <Badge href="#" color="success">Success</Badge>
    <Badge href="#" color="danger">Danger</Badge>
    <Badge href="#" color="warning">Warning</Badge>
</div>
```
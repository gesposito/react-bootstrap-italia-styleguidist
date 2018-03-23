## Esempio di base

Il gruppo di elenchi più semplice è un elenco non ordinato.

```js
const { ListGroupItem } = require("reactstrap");
<ListGroup className="w-50">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>
```

## Elementi attivi

Aggiungi `.active` a un `.list-group-item` per indicare la selezione attiva corrente.

```js
const { ListGroupItem } = require("reactstrap");
<ListGroup className="w-50">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem active>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>
```

## Elementi disabilitati

Aggiungi `.disabled` a un `.list-group-item` per farlo _apparire_ disabilitato.
Nota che nonostante l'utilizzo della classe `.disabled`, gli elementi interattivi (ad esempio `<a>` o `<input>`)
richiederanno comunque del codice aggiuntivo per disabilitare eventuali comportamenti di default.

```js
const { ListGroupItem } = require("reactstrap");
<ListGroup className="w-50">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem disabled>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>
```

## Link e bottoni

Usa i tag `<a>` o i tag `<button>` per creare elementi di gruppi di elenchi interattivi con effetto hover, disabilitati,
e stati attivi aggiungendo `.list-group-item-action`.

Assicurati di **non usare la classe standard `.btn`**.

```js
const { ListGroupItem } = require("reactstrap");
<ListGroup className="w-50">
    <ListGroupItem action tag="a" href="#">
        Cras justo odio
    </ListGroupItem>
    <ListGroupItem action tag="a" href="#" active>
        Dapibus ac facilisis in
    </ListGroupItem>
    <ListGroupItem action tag="a" href="#">
        Morbi leo risus
    </ListGroupItem>
    <ListGroupItem action tag="a" href="#">
        Porta ac consectetur ac
    </ListGroupItem>
    <ListGroupItem action tag="a" href="#" disabled>
        Vestibulum at eros
    </ListGroupItem>
</ListGroup>
```

Con i `<button>`, puoi anche fare uso dell'attributo `disabled` invece della classe `.disabled`, contrariamente ai tag
`<a>` che non supportano l'attributo `disabled`.

```js
const { ListGroupItem } = require("reactstrap");
<ListGroup className="w-50">
    <ListGroupItem action tag="button">
        Cras justo odio
    </ListGroupItem>
    <ListGroupItem action tag="button" active>
        Dapibus ac facilisis in
    </ListGroupItem>
    <ListGroupItem action tag="button">
        Morbi leo risus
    </ListGroupItem>
    <ListGroupItem action tag="button">
        Porta ac consectetur ac
    </ListGroupItem>
    <ListGroupItem action tag="button" disabled>
        Vestibulum at eros
    </ListGroupItem>
</ListGroup>
```

## Flush

Aggiungi `.list-group-flush` per rimuovere alcuni bordi per eseguire il rendering degli elementi del gruppo da bordo a
bordo in un contenitore padre (ad esempio per il componente [Card]({{ site.baseurl }}/docs/components/card/)).

```js
const { ListGroupItem } = require("reactstrap");
<ListGroup className="w-50" flush>
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem active>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem disabled>Vestibulum at eros</ListGroupItem>
</ListGroup>

```

## Classi contestuali

Usa le classi contestuali per modellare gli elementi dell'elenco con uno sfondo e un colore.

```js
const { ListGroupItem } = require("reactstrap");
<ListGroup className="w-50" flush>
    <ListGroupItem action color="italia">
        This is a italia list group item
    </ListGroupItem>
    <ListGroupItem action color="primary">
        This is a primary list group item
    </ListGroupItem>
    <ListGroupItem action color="secondary">
        This is a secondary list group item
    </ListGroupItem>
    <ListGroupItem action color="tertiary">
        This is a tertiary list group item
    </ListGroupItem>
    <ListGroupItem action color="quaternary">
        This is a quaternary list group item
    </ListGroupItem>
    <ListGroupItem action color="success">
        This is a success list group item
    </ListGroupItem>
    <ListGroupItem action color="danger">
        This is a danger list group item
    </ListGroupItem>
    <ListGroupItem action color="warning">
        This is a warning list group item
    </ListGroupItem>
</ListGroup>

```

Le classi contestuali funzionano anche con `.list-group-item-action`. Qui puoi notare l'aggiunta degli stili hover non
presenti nell'esempio precedente. È anche supportato lo stato `.active`; applicalo per indicare una selezione attiva
su un elemento del gruppo di elenchi contestuali.


## Con i badge

Aggiungi badge a qualsiasi elemento del gruppo di elenchi per mostrare i conteggi, le attività non lette e altro ancora
con l'aiuto delle [utilità di flexbox]({{ site.baseurl }}/docs/utilities/flex/).

```js
const { ListGroupItem } = require("reactstrap");
<ListGroup className="w-50">
    <ListGroupItem className="justify-content-between">
        Cras justo odio{" "}
        <Badge color="primary" pill>14</Badge>
    </ListGroupItem>
    <ListGroupItem className="justify-content-between">
        Dapibus ac facilisis in{" "}
        <Badge color="primary" pill>2</Badge>
    </ListGroupItem>
    <ListGroupItem className="justify-content-between">
        Morbi leo risus{" "}
        <Badge color="primary" pill>1</Badge>
    </ListGroupItem>
</ListGroup>

```

## Contenuto personalizzato

Aggiungi all'interno quasi ogni tipo di HTML, anche per gruppi di elenchi collegati come quello qui sotto, con l'aiuto
delle [utilità di flexbox]({{ site.baseurl }}/docs/utilities/flex/).

```js
const { ListGroupItem } = require("reactstrap");
<ListGroup className="w-50">
    <ListGroupItem action className="flex-column align-items-start active">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Intestazione dell'elemento dell'elenco</h5>
            <small>3 days ago</small>
        </div>
        <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
        </p>
    <small>Donec id elit non mi porta.</small>
    </ListGroupItem>
    <ListGroupItem action className="flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Intestazione dell'elemento dell'elenco</h5>
            <small className="text-muted">3 giorni fa</small>
        </div>
        <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
        </p>
        <small className="text-muted">Donec id elit non mi porta.</small>
    </ListGroupItem>
    <ListGroupItem action className="flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Intestazione dell'elemento dell'elenco</h5>
            <small className="text-muted">3 giorni fa</small>
        </div>
        <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
        </p>
        <small className="text-muted">Donec id elit non mi porta.</small>
    </ListGroupItem>
</ListGroup>

```

## Informazioni aggiuntive su comportamenti dinamici con Javascript

Per questa sezione puoi fare riferimento alla [documentazione di Bootstrap](https://getbootstrap.com/docs/4.0/components/list-group/#javascript-behavior).
## Panoramica

I collegamenti della paginazione sono contenuti per praticità in un elemento `<nav>` per dare la possibilità agli screenreader, e altre tecnologie assistive, di identificarli come una sezione di navigazione.

Poichè è molto probabile che la pagina possa contenere più di un elemento `<nav>` è consigliabile inserire un attributo `aria-label` con la descrizione del suo scopo. Ad esempio, se il componente di impaginazione viene utilizzato per navigare tra una serie di risultati di ricerca, un'etichetta appropriata potrebbe essere `aria-label="Pagine dei risultati di ricerca"`.

```js
const { PaginationItem, PaginationLink } = require("reactstrap");
<Pagination>
    <PaginationItem>
        <PaginationLink previous href="#">
            <span className="it-chevron-left" />
        </PaginationLink>
    </PaginationItem>
    <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
        <PaginationLink next href="#">
            <span className="it-chevron-right" />
        </PaginationLink>
    </PaginationItem>
</Pagination>

```

## Stato disabilitato e attivo

I link della paginazione uno stato disabilitato usando la classe `.disabled` nel tag `<li>` per i collegamenti che appaiono non cliccabili e `.active` per indicare la pagina attiva corrente.

```js
const { PaginationItem, PaginationLink } = require("reactstrap");
<Pagination>
    <PaginationItem disabled>
        <PaginationLink previous href="#">
            <span className="it-chevron-left" />
        </PaginationLink>
    </PaginationItem>
    <PaginationItem active>
        <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
        <PaginationLink next href="#">
            <span className="it-chevron-right" />
        </PaginationLink>
    </PaginationItem>
</Pagination>
```

## Dimensione e allineamento

Sono previste due classi che permettono di aumentare (`.pagination-lg`) o diminuire (`.pagination-sm`) la dimensione della paginazione. Inoltre, grazie alle [utilità di Flexbox]({{ site.baseurl }}/docs/utilities/flex/), si può allineare facilmente il blocco.

```js
const { PaginationItem, PaginationLink } = require("reactstrap");
<div>
    <Pagination size="lg" className="mb-3">
        <PaginationItem disabled>
            <PaginationLink previous href="#">
                <span className="it-chevron-left" />
            </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
            <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink next href="#">
                <span className="it-chevron-right" />
            </PaginationLink>
        </PaginationItem>
    </Pagination>

    <Pagination size="sm" className="justify-content-end mb-3">
        <PaginationItem disabled>
            <PaginationLink previous href="#">
                <span className="it-chevron-left" />
            </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
            <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink next href="#">
                <span className="it-chevron-right" />
            </PaginationLink>
        </PaginationItem>
    </Pagination>
</div>

```

## Responsive

Con i dovuti accorgimenti sopraelencati e inserendo alcune classi delle [utilità display]({{ site.baseurl }}/docs/utilities/display/) si può trasformare la paginazione in base alla risoluzione del dispositivo in uso dell'utente.

```js
const { PaginationItem, PaginationLink } = require("reactstrap");
<Pagination className="mb-3">
    <PaginationItem>
        <PaginationLink previous href="#">
            <span className="it-chevron-left" />
        </PaginationLink>
    </PaginationItem>
    <PaginationItem className="d-none d-sm-block">
        <span className="p-3">...</span>
    </PaginationItem>
    <PaginationItem className="d-none d-sm-block">
        <PaginationLink href="#">9</PaginationLink>
    </PaginationItem>
    <PaginationItem className="d-none d-sm-block">
        <PaginationLink href="#">10</PaginationLink>
    </PaginationItem>
    <PaginationItem active>
        <PaginationLink href="#">11</PaginationLink>
    </PaginationItem>
    <PaginationItem className="d-none d-sm-block">
        <PaginationLink href="#">12</PaginationLink>
    </PaginationItem>
    <PaginationItem className="d-none d-sm-block">
        <PaginationLink href="#">13</PaginationLink>
    </PaginationItem>
    <PaginationItem className="d-none d-sm-block">
        <span className="p-3">...</span>
    </PaginationItem>
    <PaginationItem>
        <PaginationLink next href="#">
            <span className="it-chevron-right" />
        </PaginationLink>
    </PaginationItem>
</Pagination>
```
Il cosidetto _Hero_ è un componente leggero e flessibile che può facoltativamente estendere l'intera finestra per mostrare i messaggi in evidenza sul tuo sito.

```js
<Jumbotron className="hero w-50">
    <h1 className="hero-heading display-4">Ciao, mondo!</h1>
    <p className="lead">
        Questa è una semplice unità hero, un semplice per richiamare
        un'attenzione particolare al contenuto o alle informazioni in primo
        piano.
    </p>
    <hr className="my-4" />
    <p>
        Utilizza le classi di utilità per la tipografia e la spaziatura per
        l'ingombro del contenuto all'interno del contenitore più grande.
    </p>
    <p className="lead">
        <Button color="primary">Per saperne di più</Button>
    </p>
</Jumbotron>
```

Per rendere il hero a larghezza intera, e senza angoli arrotondati, aggiungi la classe `.hero-fluid` e aggiungi all'interno un elemento `.container` o `.container-fluid`.

```js
const { Container } = require("reactstrap");
<Jumbotron fluid className="hero m-3">
    <Container fluid>
        <h1 className="hero-heading display-4">Hero fluido</h1>
        <p className="lead">
            Questo è un hero modificato che occupa l'intero spazio orizzontale del
            suo contenitore.
        </p>
    </Container>
</Jumbotron>
```
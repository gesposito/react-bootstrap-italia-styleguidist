## Panoramica

Le **card** sono contenitori flessibili ed estendibili. Costruiti con flexbox, offrono un facile posizionamento nella griglia e si combinano bene con altri componenti. Si possono personalizzare con intestazioni e piè di pagina, contenere altri componenti e contenuti, avere colori di sfondo contestuali e varie opzioni di visualizzazione. 

Non hanno `margin` di default, se ne avrai bisogno usa le [utilità di spaziatura]({{ site.baseurl }}/docs/utilities/spacing/).

Di default le card si estendono completamente al 100% del loro elemento contenitore. Se vuoi cambiarne la larghezza puoi incorporarle in delle [griglie]({{ site.baseurl }}/docs/utilities/griglie/), usare le [utilitià di dimensionamento]({{ site.baseurl }}/docs/utilities/dimensionamento/), o un CSS personalizzato (es.: `style="width: 18rem;"`).

Puoi allineare tutto il contenuto di una card usando una delle classi delle [utilità di allineamento]({{ site.baseurl }}/docs/utilities/testo/#allineamento-del-testo) direttamente sul contenitore `.card`.

Le card possono essere personalizzate nel colore del testo e di sfondo con le [utilità di colore]({{ site.baseurl }}/docs/utilities/colori/) e nelle bordature con le relative [utilità per i bordi]({{ site.baseurl }}/docs/utilities/bordi/). 

## Struttura

Le card supportano un'ampia varietà di contenuti come immagini, testo, gruppi di elenchi, link e altro ancora. 

### Body

Per il blocco principale di contenuto l'elemento di riferimento è contrassegnato dalla classe `.card-body`.

```js
const { CardImg, CardBody, CardTitle, CardText, Button } = require("reactstrap");
<Card className="w-50">
    <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        alt="Immagine"
    />
    <CardBody>
        <CardTitle>Titolo esempio Card</CardTitle>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
        <Button color="primary">Vai avanti</Button>
    </CardBody>
</Card>
```

### Titoli, testo e link

All'interno del `.card-body` puoi inserire un titolo aggiungendo `.card-title` a un tag `<h*>`. Per un eventuale sottotitolo puoi aggiungere `.card-subtitle` a un tag `<h*>` successivo.

Per il testo è prevista la classe `.card-text` da aggiungere a un tag `<p>` oppure abbinarlo ad un altro tag HTML standard.

Allo stesso modo con la classe `.card-link` sui tag `<a>`per avere i link posizionati uno accanto all'altro.

```js
const { CardImg, CardBody, CardTitle, CardSubtitle, CardText, CardLink } = require("reactstrap");
<Card className="w-50">
    <CardBody>
        <CardTitle>Titolo card</CardTitle>
        <CardSubtitle>Sottotitolo card</CardSubtitle>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
        </CardText>
        <CardLink href="#">Card Link</CardLink>
        <CardLink href="#">Altro Link</CardLink>
    </CardBody>
</Card>
```

### Immagini

Puoi inserire delle immagini all'interno delle card: in alto, in basso, incorporato nel contenuto oppure come sfondo. Con `.card-img-top` inserito prima del `.card-body` posiziona l'immagine nella parte superiore della card. Se invece vuoi che sia posizionata in fondo l'immagine dovrà avere la classe `.card-img-bottom` e inserita dopo il body.

```js
const { CardImg, CardBody, CardText, CardImgOverlay, CardTitle } = require("reactstrap");
<Card className="w-50">
    <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        alt="Immagine"
    />
    <CardBody>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
        </CardText>
    </CardBody>
</Card>
```

Per utilizzare l'immagine come sfondo della card questa dovrà avere la classe `.card-img` mentre al posto del `.card-body` dovrà esserci `.card-img-overlay`. Così facendo il contenuto si sovrapporrà all'immagine. Fate attenzione al contrasto tra sfondo e colore del testo affinchè risulti il contenuto leggibile ai fini dell'accessibilità.

```js
const { CardImg, CardBody, CardText, CardImgOverlay, CardTitle } = require("reactstrap");
<Card inverse className="w-50 mt-5">
    <CardImg
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
        alt="Immagine"
    />
    <CardImgOverlay>
        <CardTitle>Titolo card</CardTitle>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
        </CardText>
        <CardText>
            <small className="text-muted">
                Ultimo aggiornamento 3 minuti fa
            </small>
        </CardText>
    </CardImgOverlay>
</Card>
```

### Testata e piè di pagina

Puoi aggiungere opzionalmente una testata `.card-header` e un piè di pagina `.card-footer` alla card.

```js
const { CardHeader, CardBody, CardTitle, CardText, Button, CardFooter } = require("reactstrap");
<Card className="w-50 mt-5">
    <CardHeader>Featured</CardHeader>
    <CardBody>
        <CardTitle>Titolo card</CardTitle>
        <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
        </CardText>
        <Button>Vai avanti</Button>
    </CardBody>
    <CardFooter className="text-center">2 giorni fa</CardFooter>
</Card>
```

## Card layout

Oltre alla personalizzazione grafica del contenuto, ci sono anche altre opzioni per sistemare le card. Per il momento **queste opzioni di layout non sono ancora responsive**.

### Gruppo di card

Usa i gruppi di card per dare l'idea di un singolo elemento collegato con colonne di larghezza e altezza uguali. I gruppi di card usano `display: flex;` per ottenere il loro dimensionamento uniforme.

```js
const { CardGroup, CardImg, CardBody, CardTitle, CardText, CardFooter } = require("reactstrap");
<CardGroup>
    <Card>
        <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Immagine"
        />
        <CardBody>
            <CardTitle>Titolo card</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
            <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
        </CardBody>
    </Card>
    <Card>
        <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Immagine"
        />
        <CardBody>
            <CardTitle>Titolo card</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
            <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
        </CardBody>
    </Card>
    <Card>
        <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Immagine"
        />
        <CardBody>
            <CardTitle>Titolo card</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
            <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
        </CardBody>
    </Card>
</CardGroup>
```

Quando si utilizzano gruppi di card con piè di pagina, il loro contenuto si allinea automaticamente.

### Set di card

Per usare un gruppo di card uguali per larghezza e altezza, ma che non siano attaccate si applica la classe `card-deck` al contenitore padre.

```js
const { CardDeck, CardImg, CardBody, CardTitle, CardText, CardFooter } = require("reactstrap");
<CardDeck>
    <Card>
        <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Immagine"
        />
        <CardBody>
            <CardTitle>Titolo card</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
            <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
        </CardBody>
    </Card>
    <Card>
        <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Immagine"
        />
        <CardBody>
            <CardTitle>Titolo card</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
            <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
        </CardBody>
    </Card>
    <Card>
        <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Immagine"
        />
        <CardBody>
            <CardTitle>Titolo card</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
            <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
        </CardBody>
    </Card>
</CardDeck>
```

Come con i gruppi di card anche in questo caso si allineano automaticamente.

### Colonne di card

Le card possono essere organizzate in colonne simili a [Masonry](https://masonry.desandro.com/) con la classe `.card-columns`. Le card sono costruite con proprietà CSS `column` invece che con flexbox per un allineamento più semplice. Le card sono ordinate da cima a fondo e da sinistra a destra.

**Nota** L'altezza delle colonne con card può variare. Per evitare che le card spezzino le colonne  dobbiamo impostarle su `display: inline-block;` come `column-break-inside: avoid;`: non è ancora una soluzione a prova di proiettile.

```js
const { CardColumns, CardImg, CardBody, CardTitle, CardSubtitle, CardText } = require("reactstrap");
<CardColumns>
    <Card>
        <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Immagine"
        />
        <CardBody>
            <CardTitle>Titolo card</CardTitle>
            <CardSubtitle>Sottotitolo card</CardSubtitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
        </CardBody>
    </Card>
    <Card>
        <CardBody>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
        </CardBody>
    </Card>
    <Card>
        <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Immagine"
        />
        <CardBody>
            <CardTitle>Titolo card</CardTitle>
            <CardSubtitle>Sottotitolo card</CardSubtitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
        </CardBody>
    </Card>
    <Card body inverse color="primary">
        <CardTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat.
        </CardTitle>
    </Card>
    <Card>
        <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Immagine"
        />
    </Card>
    <Card>
        <CardBody>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
        </CardBody>
    </Card>
    <Card>
        <CardBody>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
        </CardBody>
    </Card>
    <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
    >
        <CardTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat.
        </CardTitle>
    </Card>
</CardColumns>

```

Le colonne di card possono anche essere estese e personalizzate con un codice aggiuntivo. Di seguito viene mostrata un'estensione della classe `.card-columns` che utilizza lo stesso CSS che usiamo —CSS columns— per generare un insieme di livelli responsive per la modifica del numero di colonne.

{% highlight scss %}
.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}
{% endhighlight %}
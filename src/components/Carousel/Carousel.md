## Come funziona

Il carousel è una presentazione per scorrere una serie di contenuti, costruito con trasformazioni CSS 3D e un pò di JavaScript. Funziona con una serie di immagini, testo o codice personalizzato. Include anche il supporto per i controlli e gli indicatori precedente/successivo.

Nei browsers dove l' [API di visibilità della pagina](https://www.w3.org/TR/page-visibility/) è supportata, il carousel eviterà di scorrere quando la pagina web non è visibile all'utente (come ad esempio quando la scheda del browser non è attiva, la finestra del browser è ridotta a icona, ecc.).

Tieni presente che i carousel nidificati non sono supportati e che i carousel generalmente non sono conformi agli standard di accessibilità.

Infine, se stai costruendo il JavaScript dal sorgente, è [richiesto `util.js`]({{ site.baseurl }}/docs/come-iniziare/javascript/#util).

## Esempio

I carousel non normalizzano automaticamente le dimensioni della diapositiva. Pertanto, potrebbe essere necessario utilizzare utilità aggiuntive o stili personalizzati per ridimensionare il contenuto in modo appropriato. Mentre i carousel supportano i controlli e gli indicatori precedente/successivo, questi non sono esplicitamente richiesti. Aggiungi e personalizza come ritieni opportuno.

Assicurati di impostare un id univoco su `.carousel` per i controlli opzionali, specialmente se stai usando più di un carousel nella pagina.

### Solo diapositive

Questo è un carousel con sole diapositive. Nota la presenza di `.d-block` e di `.img-fluid` sulle immagini del carousel per impedire l'allineamento dell'immagine predefinito del browser.

```js
const CarouselExample = require('./Carousel.example').default;

<CarouselExample />
```

### Con i controlli

Aggiungere i controlli precedente e successivo:

```js
const CarouselExample = require('./Carousel.example').default;

<CarouselExample controls />
```

### Con gli indicatori

È possibile anche aggiungere gli indicatori al carousel, anche a fianco dei controlli.

```js
const CarouselExample = require('./Carousel.example').default;

<CarouselExample controls indicators />
```

### Con le didascalie

Aggiungi facilmente le didascalie alle diapositive con l'elemento `.carousel-caption` all'interno di ogni `.carousel-item`. Possono essere facilmente nascosti su finestre più piccole, come mostrato di seguito, con [utilità di visualizzazione]({{ site.baseurl }}/docs/utilities/display/) opzionali. Vengono nascosti inizialmente con `.d-none` e riportarti su dispositivi di medie dimensioni con `.d-md-block`.

```js
const CarouselExample = require('./Carousel.example').default;

<CarouselExample controls indicators captions />
```


I componenti di avanzamento progressivo sono costruiti con due elementi HTML, alcuni CSS per impostare la larghezza e alcuni attributi. Non è previsto l'utilizzo dell'elemento [`<progress>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) di HTML5.

- Utilizziamo `.progress` come contenitore che indica il valore massimo della barra di avanzamento.
- Utilizziamo `.progress-bar` come barra interna per indicare fin dove si è arrivati con l'avanzamento.
- La classe `.progress-bar` richiede uno stile inline, una classe di utility di dimensionamento o un CSS personalizzato per impostare la larghezza.
- Per rendere accessibile l'elemento `.progress-bar` sono necessari alcuni attributi come `role` e `aria`.

```js
<div>
    <Progress />
    <Progress value="25" className="mt-3" />
    <Progress value={50} className="mt-3" />
    <Progress value={75} className="mt-3" />
    <Progress value="100" className="mt-3" />
</div>
```

## Etichette

Aggiungi le etichette alle barre di avanzamento posizionando il testo all'interno di `.progress-bar`.

```js
<Progress value="25">25%</Progress>
```

## Altezza

Può essere impostato un solo valore `height` su `.progress`, quindi se cambi questo valore il `.progress-bar` interno verrà automaticamente ridimensionato di conseguenza.

```js
<div>
    <Progress value="25" style={{ height: 1 }} />
    <Progress value="25" style={{ height: 10 }} className="mt-3" />
    <Progress value="25" style={{ height: 20 }} className="mt-3" />
</div>
```

## Background

Puoi modificare il colore dello sfondo delle singole barre di avanzamento tramite le classi delle [utility background]({{ site.baseurl }}/docs/utilities/colors/#background-color)

```js
<div>
    <Progress color="success" value="25" className="mt-3" />
    <Progress color="info" value={50} className="mt-3" />
    <Progress color="warning" value={75} className="mt-3" />
    <Progress color="danger" value="100" className="mt-3" />
</div>
```

## Altre personalizzazioni

Per ulteriori personalizzazioni della barra di avanzamento si rimanda alla sezione [componente progress](https://getbootstrap.com/docs/4.0/components/progress/) del sito di Bootstrap.
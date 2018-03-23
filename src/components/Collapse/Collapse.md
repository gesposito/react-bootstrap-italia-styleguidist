Questa pagina introduce il funzionamento di singoli elementi richiudibili (in gergo definiti _collassabili_ o _collapse_) e di sistemi di elementi a fisarmonica (solitamente _accordion_), più in basso nella pagina.

## Esempio di elemento richiudibile

Puoi cliccare su uno dei bottoni di seguito per mostrare e nascondere un altro elemento cambiando la classe:

- `.collapse` nasconde il contenuto
- `.collapsing` viene applicata durante la transizione
- `.collapse.show` mostra il contenuto

Puoi usare un link con l'attributo `href`, o un bottone con l'attributo `data-target`. In entrambi i casi, l'attributo `data-toggle="collapse"` è obbligatorio.

```js
const CollapseExample = require('./Collapse.example').default;

<CollapseExample />
```

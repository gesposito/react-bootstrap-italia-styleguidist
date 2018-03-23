## Panoramica

I separatori vengono aggiunti automaticamente in CSS tramite [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) e [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content).

```js
const { BreadcrumbItem }  = require("reactstrap");
<div>
    <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb>
        <BreadcrumbItem>
            <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb>
        <BreadcrumbItem>
            <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <a href="#">Library</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>
</div>
```

## Accessibilità

Dato che i breadcrumb forniscono una navigazione, è buona idea aggiungere un'etichetta significativa come `aria-label="breadcrumb"` per descrivere il tipo di navigazione fornito nell'elemento `<nav>`, nonché applicare `aria-current="page"` all'ultimo elemento del set per indicare che rappresenta la pagina corrente.

Per maggiorni informazioni, guarda le [linee guida WAI-ARIA per la creazione di breadcrumb](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).
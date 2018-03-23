## Basic example

Wrap a series of buttons with `.btn` in `.btn-group`. Add on optional JavaScript radio and checkbox style behavior with [our buttons plugin]({{ site.baseurl }}/docs/componenti/buttons/#button-plugin).

```js
<ButtonGroup>
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
</ButtonGroup>
```

## Button toolbar

Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.

```js
const { ButtonToolbar }  = require("reactstrap");
<ButtonToolbar>
    <ButtonGroup className="mr-1">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
    </ButtonGroup>
    <ButtonGroup className="mr-1">
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
    </ButtonGroup>
    <ButtonGroup className="mr-1">
        <Button>8</Button>
    </ButtonGroup>
</ButtonToolbar>
```

## Sizing

Instead of applying button sizing classes to every button in a group, just add `.btn-group-*` to each `.btn-group`, including each one when nesting multiple groups.

```js
<section>
    <div>
    <ButtonGroup size="lg">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
    </ButtonGroup>
    </div>
    <div className="mt-3">
    <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
    </ButtonGroup>
    </div>
    <div className="mt-3">
    <ButtonGroup size="sm">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
    </ButtonGroup>
    </div>
</section>
```

## Nesting

Place a `.btn-group` within another `.btn-group` when you want dropdown menus mixed with a series of buttons.

```js
const ButtonGroupDropdownExample = require('./ButtonGroupDropdown.example').default;

<ButtonGroupDropdownExample />
```

## Vertical variation

Make a set of buttons appear vertically stacked rather than horizontally. **Split button dropdowns are not supported here.**

```js
<ButtonGroup vertical>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
    <Button>Button</Button>
</ButtonGroup>
```
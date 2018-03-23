## Esempi

Radio buttons classici

```js
const { FormGroup, Input, Label } = require("reactstrap");
<FormGroup>
    <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio1" defaultChecked />
        <Label check for="radio1">Opzione 1</Label>
    </FormGroup>

    <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio2" />
        <Label check for="radio2">Opzione 2</Label>
    </FormGroup>

    <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio3" />
        <Label check for="radio3">Opzione 3</Label>
    </FormGroup>
</FormGroup>

```

Radio buttons inline

```js
const { FormGroup, Input, Label } = require("reactstrap");
<FormGroup>
    <FormGroup check inline>
        <Input name="gruppo1" type="radio" id="radio1" defaultChecked />
        <Label check for="radio1">Opzione 1</Label>
    </FormGroup>

    <FormGroup check inline>
        <Input name="gruppo1" type="radio" id="radio2" />
        <Label check for="radio2">Opzione 2</Label>
    </FormGroup>

    <FormGroup check inline>
        <Input name="gruppo1" type="radio" id="radio3" />
        <Label check for="radio3">Opzione 3</Label>
    </FormGroup>
</FormGroup>

```

Radio button disabilitati

```js
const { FormGroup, Input, Label } = require("reactstrap");
<FormGroup>
    <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio1" defaultChecked disabled />
        <Label check for="radio1">Opzione 1</Label>
    </FormGroup>

    <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio2" disabled />
        <Label check for="radio2">Opzione 2</Label>
    </FormGroup>

    <FormGroup check>
        <Input name="gruppo1" type="radio" id="radio3" disabled />
        <Label check for="radio3">Opzione 3</Label>
    </FormGroup>
</FormGroup>
```

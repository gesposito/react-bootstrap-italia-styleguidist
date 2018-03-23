## How it works

Here's what you need to know before getting started with the navbar:

- Navbars require a wrapping `.navbar` with `.navbar-expand{-sm|-md|-lg|-xl}` for responsive collapsing and [color scheme](#color-schemes) classes.
- Navbars and their contents are fluid by default. Use [optional containers](#containers) to limit their horizontal width.
- Use our [spacing]({{ site.baseurl }}/docs/utilities/spaziature/) and [flex]({{ site.baseurl }}/docs/utilities/flex/) utility classes for controlling spacing and alignment within navbars.
- Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
- Navbars are hidden by default when printing. Force them to be printed by adding `.d-print` to the `.navbar`. See the [display]({{ site.baseurl }}/docs/utilities/display/) utility class.
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every navbar to explicitly identify it as a landmark region for users of assistive technologies.

Read on for an example and list of supported sub-components.

## Supported content

Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

- `.navbar-brand` for your company, product, or project name.
- `.navbar-nav` for a full-height and lightweight navigation (including support for dropdowns).
- `.navbar-toggler` for use with our collapse plugin and other [navigation toggling](#responsive-behaviors) behaviors.
- `.form-inline` for any form controls and actions.
- `.navbar-text` for adding vertically centered strings of text.
- `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.

Here's an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the `lg` (large) breakpoint.

```js
const NavbarExample = require('./Navbar.example').default;
<NavbarExample />
```

This example uses [color]({{ site.baseurl }}/docs/utilities/colors/) (`bg-light`) and [spacing]({{ site.baseurl }}/docs/utilities/spacing/) (`my-2`, `my-lg-0`, `mr-sm-0`, `my-sm-0`) utility classes.

### Brand

The `.navbar-brand` can be applied to most elements, but an anchor works best as some elements might require utility classes or custom styles.

```js
const { NavbarBrand } = require("reactstrap");
<div>
    <Navbar light className="bg-light mb-3">
        <NavbarBrand href="#">Navbar</NavbarBrand>
    </Navbar>
    <Navbar light className="bg-light">
        <NavbarBrand href="#" tag="h1">
            Navbar
        </NavbarBrand>
    </Navbar>
</div>
```


### Nav

Navbar navigation links build on our `.nav` options with their own modifier class and require the use of [toggler classes](#toggler) for proper responsive styling. **Navigation in navbars will also grow to occupy as much horizontal space as possible** to keep your navbar contents securely aligned.

Active states—with `.active`—to indicate the current page can be applied directly to `.nav-link`s or their immediate parent `.nav-item`s.

```js
const { NavbarBrand, Collapse, Nav, NavItem, NavLink } = require("reactstrap");
<Navbar light expand="lg" className="bg-light">
    <NavbarBrand href="#">Navbar</NavbarBrand>
    <Collapse isOpen>
        <Nav navbar>
            <NavItem active>
                <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Features</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Pricing</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" disabled>Disabled</NavLink>
            </NavItem>
        </Nav>
    </Collapse>
</Navbar>
```

### Forms

Place various form controls and components within a navbar with `.form-inline`.

```js
const { NavbarBrand, Form, Input, Button, InputGroup, InputGroupAddon } = require("reactstrap");
<div>
    <Navbar light expand="lg" className="bg-light mb-3">
        <Form inline className="my-2 my-lg-0">
            <Input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
            />
            <Button
                outline
                color="success"
                className="my-2 my-sm-0"
                type="submit"
            >
                Search
            </Button>
        </Form>
    </Navbar>

    <Navbar
        light
        expand="lg"
        className="bg-light justify-content-between mb-3"
    >
        <NavbarBrand href="#">Navbar</NavbarBrand>
        <Form inline className="my-2 my-lg-0">
            <Input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
            />
            <Button
                outline
                color="success"
                className="my-2 my-sm-0"
                type="submit"
            >
                Search
            </Button>
        </Form>
    </Navbar>

    <Navbar
        light
        expand="lg"
        className="bg-light justify-content-between mb-3"
    >
        <Form inline className="my-2 my-lg-0">
            <InputGroup>
                <InputGroupAddon InputGroupAddon addonType="prepend">
                    @
                </InputGroupAddon>
                <Input type="text" placeholder="Username" />
            </InputGroup>
        </Form>
    </Navbar>

    <Navbar
        light
        expand="lg"
        className="bg-light justify-content-between mb-3"
    >
        <Form inline className="my-2 my-lg-0">
            <Button color="success" outline>Main button</Button>
            <Button color="secondary" outline>Smaller button</Button>
        </Form>
    </Navbar>
</div>

```

### Text

Navbars may contain bits of text with the help of `.navbar-text`. This class adjusts vertical alignment and horizontal spacing for strings of text.

```js
const { NavbarBrand, Collapse, Nav, NavItem, NavLink } = require("reactstrap");
<div>
    <Navbar light expand="lg" className="bg-light mb-3">
        <span className="navbar-text">Navbar text with an inline element</span>
    </Navbar>

    <Navbar light expand="lg" className="bg-light">
        <NavbarBrand href="#">Navbar w/ text</NavbarBrand>
        <Collapse isOpen navbar>
            <Nav navbar>
                <NavItem active>
                    <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Features</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Pricing</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
        <span className="navbar-text">Navbar text with an inline element</span>
    </Navbar>
</div>
```

## Color schemes

Theming the navbar has never been easier thanks to the combination of theming classes and `background-color` utilities. Choose from `.navbar-light` for use with light background colors, or `.navbar-dark` for dark background colors. Then, customize with `.bg-*` utilities.

```js
const { NavbarBrand, Collapse, Nav, NavItem, NavLink, Form, Input } = require("reactstrap");
<div>
    <Navbar dark expand="lg" className="bg-dark mb-3">
        <NavbarBrand href="#">Navbar</NavbarBrand>
        <Collapse isOpen navbar>
            <Nav navbar>
                <NavItem active>
                    <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Features</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Pricing</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
        <Form inline className="my-2 my-lg-0">
            <Input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
            />
            <Button
                outline
                className="my-2 my-sm-0"
                color="secondary"
                type="submit"
            >
                Search
            </Button>
        </Form>
    </Navbar>

    <Navbar dark expand="lg" className="bg-primary mb-3">
        <NavbarBrand href="#">Navbar</NavbarBrand>
        <Collapse isOpen navbar>
            <Nav navbar>
                <NavItem active>
                    <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Features</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Pricing</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
        <Form inline className="my-2 my-lg-0">
            <Input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
            />
            <Button
                outline
                className="my-2 my-sm-0"
                color="secondary"
                type="submit"
            >
                Search
            </Button>
        </Form>
    </Navbar>

    <Navbar
        light
        expand="lg"
        className="mb-3"
        style={{ backgroundColor: "#e3f2fd" }}
    >
        <NavbarBrand href="#">Navbar</NavbarBrand>
        <Collapse isOpen navbar>
            <Nav navbar>
                <NavItem active>
                    <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Features</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Pricing</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
        <Form inline className="my-2 my-lg-0">
            <Input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
            />
            <Button
                outline
                className="my-2 my-sm-0"
                color="primary"
                type="submit"
            >
                Search
            </Button>
        </Form>
    </Navbar>
</div>

```

## Placement

Use our [position utilities]({{ site.baseurl }}/docs/utilities/position/) to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use `position: fixed`, meaning they're pulled from the normal flow of the DOM and may require custom CSS (e.g., `padding-top` on the `<body>`) to prevent overlap with other elements.

Also note that **`.sticky-top` uses `position: sticky`, which [isn't fully supported in every browser](https://caniuse.com/#feat=css-sticky)**.

```js
const { Container, NavbarBrand } = require("reactstrap");
<Container style={{ position: "relative" }}>
    <Navbar light expand="lg" className="bg-light mb-3">
        <NavbarBrand href="#">Default</NavbarBrand>
    </Navbar>

    <Navbar light fixed="top" expand="lg" className="bg-light mb-3" style={{ position: "relative" }}>
        <NavbarBrand href="#">Fixed top</NavbarBrand>
    </Navbar>

    <Navbar light fixed="bottom" expand="lg" className="bg-light mb-3" style={{ position: "relative" }}>
        <NavbarBrand href="#">Fixed bottom</NavbarBrand>
    </Navbar>

    <Navbar light sticky="top" expand="lg" className="bg-light mb-3">
        <NavbarBrand href="#">Sticky top</NavbarBrand>
    </Navbar>
</Container>
```

## Responsive behaviors

Navbars can utilize `.navbar-toggler`, `.navbar-collapse`, and `.navbar-expand{-sm|-md|-lg|-xl}` classes to change when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.

For navbars that never collapse, add the `.navbar-expand` class on the navbar. For navbars that always collapse, don't add any `.navbar-expand` class.


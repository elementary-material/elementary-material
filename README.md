# Simple material design

> This repository focuses only on basic components made for high performance.

## Components (TODO)
- [ ] Alerts
- [ ] Badge
- [x] Buttons
- [x] Card
- [ ] Forms
- [x] Grids
- [x] Inputs
- [x] Modals / Dialogs
- [x] Navbar
- [ ] Typography

## Grids 

> This is the simplest component, it divides the layout into 12 columns.

- **container**: all other tags must be inside it
- **row**: create a row, columns settings must be inside a row
- **col**: create a column, to defines column sizes want use **md**, **sm** or **xs** tag in same item
   - **md-**: md is for devices with width greater than 768px, **usage:** *md-{number of columns}*
   - **sm-**: sm is for devices with width greater than 576px and less than 768px, **usage:** *sm-{number of columns}
   - **xs-**: xs is for devices with width less than 576px, **usage:** *xs-{number of columns}*

### Usage: 
``` html
<div class="container">
    <div class="row">
        <div class="col md-6 sm-12 xs-12">
            Side I
        </div>
        <div class="col md-6 sm-12 xs-12">
            Side II
        </div>
    </div>
</div>
``` 
## Buttons

It's just beautiful buttons
> **important:** all buttons are colorless, you'll want define a new class and customize yourself, like this: 
``` css
/* for example you put *black* class in the button */
.black {
    color: #FFFFFF; /* font color */
    background: #000000; /* background color */
}
```

### Usage:
``` html
    <button class="btn black">Click here</button>
```

## Navbar

Navbar by default is fixed on top and has a height of 60px

### Usage: 
``` html
 <header class="header black">
    <input type="checkbox" id="btn-menu">
    <label for="btn-menu" class="hamburger-menu"></label>
    <div class="overlay" id="overlay"></div>
    <div class="menu">
        <ul class="nav-list">
            <li class="nav-link">Link 1</li>
            <li class="nav-link">Link 2</li>
            <li class="nav-link">Link 3</li>
        </ul>
    </div>
    <h1 class="nav-title">Logo</h1>
</header>
```


## Inputs

Inputs has two types, filled and outlined, by default border color is black, you can change this with this config:

``` css
.text-field:focus,
.text-field:active {    
    border-color: red
}

```

### Usage: 
``` html

/* filled */
<div class="field">
    <input id="name" class="text-field" placeholder="Type your name">
    <label for="name" class="place-holder">Name</label>
</div>

/* outlined */
<div class="field">
    <input id="name2" class="text-field outlined" placeholder="Type your name">
    <label for="name2" class="place-holder">Name</label>
</div>
```

## Cards

Cards has only outlined option

### Usage: 
``` html
 <div class="card">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et leo vitae neque eleifend maximus
    eget eu purus. Nulla facilisi. Integer eu laoreet est, a lacinia ligula. Vivamus dictum, ex in
    gravida posuere, enim ligula porta eros, iaculis vehicula erat sapien at libero. Mauris sit amet
    vestibulum magna.
</div>
```

## Modals / Dialogs

Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

> **Note:** you can define width and height implementing this code:

``` css
/* you can set any value, these values are just examples */
.modal-content {
    width: 200px;
    height: 150px;
}
```
**Always your modal stays in the center of the screen**

### Usage: 
``` html
  <div class="modal" data-status="hidden" data-modal="modalName">
    <div class="modal-content">
        <div class="modal-header">
            <h2>This is a modal</h2>
        </div>
        <div class="modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et leo vitae neque eleifend.</p>
        </div>
        <!-- to close modal after click on component use modal-close in this cimponent -->
        <button class="btn modal-close">Ok</button>
    </div>

    <!-- activate modal: use class modal-trigger and check if data-modal is the same of modal -->
    <button class="btn blue-grey modal-trigger" data-modal="modalName">Open modal</button>
</div>
```
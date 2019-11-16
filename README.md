# Simple material design

> This repository focuses only on basic components made for high performance.

## Components (TODO)
- [ ] Alerts
- [ ] Badge
- [ ] Buttons
- [ ] Card
- [ ] Forms
- [x] Grids
- [ ] Inputs
- [ ] Modals
- [ ] Navbar
- [ ] Typography

## Grids 

> This is the simplest component, it divides the layout into 12 columns.

- **container**: all other tags must be inside it
- **row**: create a row, columns settings must be inside a row
- **col**: create a column, to defines column sizes want use **md**, **sm** or **xs** tag in same item
   - **md-**: md is for devices with width greater than 768px, **usage:** *md-{number of columns}*
   - **sm-**: sm is for devices with width greater than 576px and less than 768px, **usage:** *sm-{number of columns}
   - **xs-**: xs is for devices with width less than 576px, **usage:** *xs-{number of columns}*

##### Sample: 
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

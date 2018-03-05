# react-css-grider

The simple, declarative and small but powerful and expressive React Component to smell power of CSS Grid.

* [CSS Grid](https://drafts.csswg.org/css-align-3/#propdef-gap)
* [canIuse](https://caniuse.com/#search=css%20grid)

*[SCENARIOS](https://github.com/berbecki/react-css-grider/wiki)

### Usage
Instal first:
```text
$ npm i react-css-grider
```

```text
$ yarn add react-css-grider
```
and import then

```javascript
import { Grid, GridItem, PH } from 'react-css-grider'
```
### Comunicate with by API

* Grid level
```jsx harmony
<Grid {/*grid API*/}>
    {/*some items*/}
</Grid>
```

* Grid item level
```jsx harmony
<Grid>
    <GridItem {/*grid API*/}>
        {/*item's =content*/}
    </GridItem>
</Grid>
```
* Placeholder (PH)

PH component is created to fill grid as visual marker only. You can use any HTML element or component instead PH.
```jsx harmony
<PH>placeholder</PH>
```
## examples:

#### 3 columns
```jsx harmony
<Grid columns={3}>
    <PH>placeholder</PH>
    <PH>placeholder</PH>
    <PH>placeholder</PH>
    <PH>placeholder</PH>
    <PH>placeholder</PH>
    <PH>placeholder</PH>
</Grid>
```
![3 columns](https://www.dropbox.com/s/7gay6zdkjd1eoq6/Screen%20Shot%202018-03-01%20at%2016.30.44.png?raw=1)

***

#### 3 columns and declared gap
```jsx harmony
<Grid columns={3} gap={'1px'}>
    <PH>placeholder</PH>
    <PH>placeholder</PH>
    <PH>placeholder</PH>
    <PH>placeholder</PH>
    <PH>placeholder</PH>
    <PH>placeholder</PH>
</Grid>
```
![3 columns and declared gap](https://www.dropbox.com/s/0scfpkfayzjlrzn/Screen%20Shot%202018-03-01%20at%2016.34.52.png?raw=1)

***

#### asymethic gap
```jsx harmony
<Grid columns={3} gap={'5px 25px'}>
    <PH>placeholder</PH>
    <PH>placeholder</PH>
    <PH>placeholder</PH>
    <PH>placeholder</PH>
    <PH>placeholder</PH>
    <PH>placeholder</PH>
</Grid>
```
![asymethic gap](https://www.dropbox.com/s/gof7hkl7ngwgegy/Screen%20Shot%202018-03-01%20at%2016.45.28.png?raw=1)

***

#### bigger one
```jsx harmony
<Grid columns={3} alignContent={'start'}>
    <Grid columns={1} alignContent={'start'}>
        <PH>input</PH>
        <GridItem wrapped>
            <Grid columns={2} alignContent={'start'} gap={'.25rem'}>
                <PH>selector</PH>
                <PH>rel input</PH>
            </Grid>
        </GridItem>
    </Grid>
    <Grid columns={1} alignContent={'start'}>
        <Grid columns={1} alignContent={'start'}>
            <GridItem wrapped>
                <Grid columns={'2rem 1fr'} gap={0}>
                    <PH>ch</PH>
                    <PH>input</PH>
                </Grid>
            </GridItem>
            <GridItem wrapped>
                <Grid columns={'2rem 1fr'} gap={0}>
                    <PH>ch</PH>
                    <PH>input</PH>
                </Grid>
            </GridItem>
            <GridItem wrapped>
                <Grid columns={'2rem 1fr'} gap={0}>
                     <PH>ch</PH>
                     <PH>input</PH>
                </Grid>
            </GridItem>
        </Grid>
    </Grid>
    <PH>element</PH>
</Grid>
```
![bigger one](https://www.dropbox.com/s/mcblo5odcnchz0u/Screen%20Shot%202018-03-01%20at%2016.53.16.png?raw=1)

***

#### another bigger one
```jsx harmony
<Grid columns={"1fr 4rem 1fr"} gap={'2rem'} alignContent={'start'}>
    <Grid columns={1} rows={'1rem minmax(2rem, auto) 2rem'} alignContent={'start'}>
        <PH>subheader</PH>
        <Grid columns={1}>
            <PH>selected</PH>
            <PH>selected</PH>
        </Grid>
        <GridItem>
            <PH>Add firing</PH>
        </GridItem>
    </Grid>
    <PH>and</PH>
    <Grid columns={1} rows={'1rem minmax(2rem, auto) 2rem'} alignContent={'start'}>
        <PH>subheader</PH>
        <PH>No template selected</PH>
        <GridItem>
            <PH>Add blocking</PH>
        </GridItem>
    </Grid>
</Grid>
```
![another bigger one](https://www.dropbox.com/s/1ik3zvtqhnwkqt6/Screen%20Shot%202018-03-01%20at%2017.14.27.png?raw=1)

( have a fun 🤘 more examples and options soon 😋 )
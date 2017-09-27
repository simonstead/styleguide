**Image example:**

Default onClick function is

`e => console.log(e.target)`

```js
<Image/>
```

```js
<Image alt={"Hello World"} src={"https://spee.ch/princess-bubblegum"} onClick={e => window.alert(e.target.getAttribute("src"))}/>
```

**Image example:**

Default onClick function is

`e => console.log(e.target)`

```js
<Image/>
```

**Try clicking me!**

```js
<Image alt={"Hello World"} src={"https://spee.ch/princess-bubblegum"} onClick={e => window.alert(e.target.getAttribute("src"))}/>
```

Create some react components (as classes OR functions) and then use styleguide to create interactive documentation"

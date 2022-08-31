# Things to Remember in CSS

### Selectors 
Selectors refer to the HTML the elements to which `CSS` rules apply; they're what is actually being “selected” for each rule

### Universal Selector
Select elements of any type, the symbol of use is the `*` 
#### input
```CSS
* {
	color: purple;
}
```

#### output
The `*` will select everything and do what's inside the brackets (in this case paint everything purple)


```HTML
<div class="alert-text">
	This is a test
</div>
```

### For multiple classes with the same texture
This would work on every element that has eithere `.read` or `.unread` as **selectors**

```CSS
.read,
.unread {
	color: white;
	background: black;
}
```

### Chaining Selectors

Here we have to elements with the `subsection` selector but only want to change the `subsection header` class.

```HTML
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```

To do that, we use **Chaining Selectors** as shown below.

```CSS
.subsection.header {
	color:red;
}
```


### Auto adjusting images

By using the `auto` property, you can adjust the proportions of an image to match the original. For example:

```CSS
img {
	height: auto;
	width: 500px;
}
```

If the image was h = 500px by w = 1000px then after the CSS code the height will be 250px.


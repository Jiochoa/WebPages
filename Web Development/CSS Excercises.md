## 01-css-methods
Practice adding CSS to HTML. 
- CSS internal
-  CSS external
- CSS inline

### Selfcheck
- [x] Did you use all three methods of adding CSS to an HTML file?
- [x] Did you properly link the external CSS file in the HTML file??
- [x] Does the `div` element have CSS added via the external method?
- [x] Does the `p` element have CSS added via the internal method?
- [x] Does the `button` element have CSS added via the inline method?

### My Solution
It was easy enough, I forgot a few steps, but they were in the page almost exactly as needed. 
- For the **External method,** you had to add the `link` to the header and add the `CSS` file and location. 
- For the **internal method,** you had to add the tag `</style>` to the header to add `CSS`. 
- For the **Inline method,** you had to add to the selector `class` where you wanted, in this case `<button>`, and then add the `CSS` as a string.


## 02-css-class-id-selectors
Practice adding class and ID attributes to HTML elements. It doesn't specify, but ill use the external `CSS` file.
* **All odd numbered elements**: a light red/pink background, and a list of fonts containing `Verdana` and `DejaVu Sans` with `sans-serif` as a fallback.
* **The second element** : blue text and a font size of 36px.
* **The Third element**: in addition to the styles for all odd numbered elements, ass a font size of 34px
* **The fourth element**: a light green background, a font size of 24px, and bold.


### Selfcheck
- [x] Do the numbered `p` elements share a class?
- [x] Do the even numbered `div` have unique IDs?
- [x] Does the Number 3 element have multiple classes?

### My Solution
Added a new selector for `div` since all odd numbers use it and made them pink and then followed the same rules for the different numbers.

## 03-grouping-selectors

Give two elements each a unique class name, then add rules for styles that both elements share and their own unique styles
 - **The first element**: a black background and white text.
 - **The Second element**: a yellow background list of fonts containing `Helvatica` and `Times New Roman`, with `sand-serif` as fallback.

### Selfcheck
- [x] Does each element have a unique class name?
- [x] Did you use the grouping selector for the styles that both elements share?
- [x] Did you make separate rules for the styles unique to each element?

### My Solutions
This one was pretty easy, I just gave each button a class, `do-click` and `do-not-click` and gave each their needed requirements and then used **grouping selector** to give both a larger font.

## 040-chaining-selectors
Understand how chaining different selectors work. 
- Make each element with both the `avatar` and the `proportioned` classes 300 pixels wide, then give it a height o so that it retains its original square proportions (don't hard code in a pixel value for the height).
- Make the element with both the `avatar` and `distorted` classes 200 pixels wide, then make its height twice as big as its width (here you should hard code in pixel values).

### Selfcheck
- [x] Did you properly chain class selectors for each rule?
- [x] Does the `proportioned` image retain its original square proportions?
- [x] Does the `distorted` image end up looking squished and distorted?


### My Solution
Another easy solution, I'm starting to wonder if this is needed. I just change each picture with the requirements and used chaining, `.avatar.proportioned`.


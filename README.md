# Ellipses

Ellipses add a string in the word boundary.

Generally, ellipsis was added at the end of the words in the element instead it can be added at the start of the element

## What's new in this module 

Generally, While adding an ellipsis to the word, one needs to mention how my character ellipsis needs to be added, In this ellipses will be added based on the container width and height.If the container width increases or decrease ellipses will change.Ellipses are mobile responsive.

- No dependencies

## Options

##### showChar
- How many character need to displayed.
     eg. showChar : 1 ,showChar : "auto"
#### ellipsesPosition 
- Where the ellipses need to be added (default:"start")
#### ellipsestext
- Text to be appended (default : "...")

#### tooltip
* pack 
    * Display 'tooltip' when hover over the ellipses text (default:"false").
* text 
    - To display entire text in the tooltip or only the truncated text.(default : "true")
&nbsp;&nbsp;&nbsp;true - To display entire text
&nbsp;&nbsp;&nbsp;false - To display  truncated text 

## Examples

```javascript
    var ellipses = require('ellipses');
    var otps = {
	      	showChar : 50, 
	      	ellipsesPosition : "start", 
	      	tooltip :{ 			 
	      		pack : true, 
	      		text : true  
	      	},
	      	ellipsestext : ".."	
	      };

	Ellipses(".ellipses",otps); //.ellipses is selector
```
You can provide an alternative ellipses character, or "character count" like so:

```javascript
    var ellipses = require('ellipses');
    var otps = {
	      	showChar : "auto", 
	      	ellipsesPosition : "end", 
	      	tooltip :{ 			 
	      		pack : true, 
	      		text : true  
	      	},
	      	ellipsestext : "END"	
	      };
    ellipses( '#description', opts);
```

You can install it with :

```shell
	npm install noquery --save
```

or

Clone the repo.Include this files.
```html
<script src=".static/js/app.js"></script>
```

```html
<link rel='stylesheet' href='./static/css/style.css'>
```

Include CSS for tooltip
```css
.tooltip {
    position: relative;
    display: inline-block;
}
.tooltip .tooltiptext {
    visibility: hidden;
    width: 50vw;
    background-color: rgba(0,0,0,.5);
	color: #fff;
    text-align: justify;
    border-radius: 6px;
    padding: 10px;
	position: absolute;
    z-index: 1;
}
.tooltip:hover .tooltiptext {
    visibility: visible;
}
```


# SVG Register

## Input
```HTML
<svg-register>
	<svg name="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M298.667 469.333h426.667c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667H298.667C275.103 554.667 256 535.564 256 512s19.103-42.667 42.667-42.667z"/></svg>
</svg-register>

<svg-use name="minus" class="a-class"></svg-use>
```

## Output
```HTML
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="a-class"><path d="M298.667 469.333h426.667c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667H298.667C275.103 554.667 256 535.564 256 512s19.103-42.667 42.667-42.667z"/></svg>
```

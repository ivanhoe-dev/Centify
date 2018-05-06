# Centify
## Introduction

Centify is a Jquery library for easy UI(DOM) alignment.
Align left? Align center? We handle all alignments for you!:smile_cat::clap:

## Quick Start
1. Import Jquery in your HTML
2. Import "centify.js" in your HTML
```
<script src="centify.js"></script>
```
3. Initialize centify (Center everything):
```
$(function(){
  $("#YouElementToAlign").centify();
});
```
4. Define your alignment criteria:
```
$("#YouElementToAlign).centify({
  align_element_x:"right"
});
```
5. All applications of the library can be referred to demo.html

## Documentation
Parameters:

| Parameters | Usages | Default | Values |
| ------------- | ------------- | ------------- | ------------- |
| `align_element_x`  | Align the DOM horizontally  | center | left,right,center |
| `align_element_y` | Align the DOM vertically  | center | top,center,bottom |
| `align_text_x`  | Align the text horizontally  | center | left,right,center |
| `align_text_y`  | Align the text vertically  | center | top,center,bottom |


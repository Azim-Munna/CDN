# CDN

**fontawesome**

```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
```
***bootstrap***
**css
```

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
````
**js

```
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
```

# js plugin

#AOS - animations

** css**

```
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
```
**js **
```
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```
# slick slider

**CSS**
```
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
```

**Js**
```
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
```			
# owlcarouse 10-3-19

**css**
```
https://azim-munna.github.io/CDN/assest/css/owl.carousel.min.css
```
**js**
```
https://azim-munna.github.io/CDN/assest/js/owl.carousel.min.js
```

# magnatic popup cdn 10-3-19

**css**
```
https://azim-munna.github.io/CDN/assest/css/magnific-popup.css
```
**js**
```
https://azim-munna.github.io/CDN/assest/js/jquery.magnific-popup.min.js
```
** wp_enqueue_scripts**
```
add_action('wp_enqueue_scripts','jn_cus_c_j');
function jn_cus_c_j(){
	// jn_res_css
wp_enqueue_style('jn_cus_res_css',get_template_directory_uri().'/css/jn_res_css.css')
// jn_js
wp_enqueue_script( 'nav-script', get_template_directory_uri() . '/assest/js/jquery.nav.js', array('jquery'), '', true );
}
```

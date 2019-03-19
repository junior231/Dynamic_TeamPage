(() => {
 	console.log('fired');

 	 	const clickbio  = document.querySelector('#click');
 		  clickbio1  = document.querySelector('#click1');
		  lightBox = document.querySelector('.lightbox');
		  lightBox1 = document.querySelector('.lightbox1')

	function showLightbox() {

		hideLightbox ();

 
		lightBox.classList.add('display');
 
	}

	function showLightbox1() {

		hideLightbox ();

 
		lightBox1.classList.add('display');
 
	}

 
	function hideLightbox() {

		lightBox1.classList.remove('display');
		lightBox.classList.remove('display');
 
	}

 
	clickbio.addEventListener('click', showLightbox);
	clickbio1.addEventListener('click', showLightbox1);

 })();
<template>
  <div class="row main-container">

    <div class="col s12 img-div">
      <img src="https://res.cloudinary.com/pandyarudra/image/upload/v1600182158/Profile_Photo_cropped.jpg" alt="Author Photo - Rudra Pandya" class="responsive-img circle">
    </div>

    <div class="col s12">
      <h3>Rudra Pandya - Full Stack Developer</h3>

      <p>This app was build using Vue and Materialize CSS</p>

      <p class="row social-links">
        <a href="https://www.linkedin.com/in/rudrapandya/" target="_blank">
          <img class="social-icons" src="https://res.cloudinary.com/pandyarudra/image/upload/v1600182759/3-2-linkedin-download-png-thumb.png"> LinkedIn
        </a> 
        <span>&nbsp;|&nbsp;</span>
        <a href="https://github.com/pandyarudra" target="_blank">
          <img class="social-icons" src="https://res.cloudinary.com/pandyarudra/image/upload/v1600182873/github.png"> GitHub
        </a> 
        <span>&nbsp;|&nbsp;</span>
        <a href="mailto:pandyarudra9@gmail.com">
            <img class="social-icons" src="https://res.cloudinary.com/pandyarudra/image/upload/v1600182968/gmail.jpg"> Gmail
         </a>
      </p>
      
    </div>

  </div>
</template>

<style lang="scss">

@import '../assets/styles.scss';

.social-links {
  a {
      color: $primary-color;
  }
}

.main-container {
  padding-top: 9%;
}

img.circle {
  width: 30vh;
}

img.social-icons {
  width: 2.5vh;
}

</style>

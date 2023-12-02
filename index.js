    // // Replace these image URLs with your own
    const imageUrl1 = [
        'images/bg1.png',
        'images/bg2.png',
        'images/bg3.png',
        'images/bg4.png',
        'images/bg5.png',
      ];

    const imageUrl2 = [
        'images/mbg1.png',
        'images/mbg2.png',
        'images/mbg3.png',
        'images/mbg4.png',
        'images/mbg5.png',
      ];

  
    //   // Get the body element
     
  
    //   // Function to update the background image and size
    //   function updateBackgroundImage() {
    //     const randomIndex = Math.floor(Math.random() * imageUrl1.length);
    //     const randomImageUrl1 = imageUrl1[randomIndex];
    //     document.body.style.backgroundImage = `url(${randomImageUrl1})`;
    //     document.body.style.backgroundSize = 'cover'; // Adjust the background size
    //     document.body.style.backgroundPosition = 'center';
    //   }

    //     // Function to update the background image and size 2
    //   function updateBackgroundImage2() {
    //     const randomIndex = Math.floor(Math.random() * imageUrl2.length);
    //     const randomImageUrl2 = imageUrl2[randomIndex];
    //     document.body.style.backgroundImage = `url(${randomImageUrl2})`;
    //     document.body.style.backgroundSize = 'cover'; // Adjust the background size
    //     document.body.style.backgroundPosition = 'center';
    //   }
      
  
    //   // Update the background image every 5 seconds
    //   setInterval(updateBackgroundImage, 4000);
  
    //   // Initial background image update
    //   updateBackgroundImage();



    // const imageUrl1 = 'images/bg2.png';
    // const imageUrl2 = 'images/mbg1.png';

    function setResponsiveBackground() {
      // Check if the viewport is smaller than 600 pixels
      if (window.matchMedia("(max-width: 600px)").matches) {
        document.body.style.backgroundImage = updateBackgroundImageA();
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
      } else {
        document.body.style.backgroundImage = updateBackgroundImage();
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
      }
      
    }

         // Function to update the background image and size
      function updateBackgroundImage() {
        const randomIndex = Math.floor(Math.random() * imageUrl1.length);
        const randomImageUrl1 = imageUrl1[randomIndex];
        document.body.style.backgroundImage = `url(${randomImageUrl1})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
      }

         // Function to update the background image and size
         function updateBackgroundImageA() {
          const randomIndex = Math.floor(Math.random() * imageUrl2.length);
          const randomImageUrl2 = imageUrl2[randomIndex];
          document.body.style.backgroundImage = `url(${randomImageUrl2})`;
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundPosition = "center";
        }

      // Update the background image every 5 seconds
      setInterval(updateBackgroundImage, 4000);
  
      // Initial background image update
      updateBackgroundImage();

      
    // Initial call to set the background based on the initial viewport size
    setResponsiveBackground();
  
    // Attach the function to the resize event
    window.addEventListener("resize", setResponsiveBackground);
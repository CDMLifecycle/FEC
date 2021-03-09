import React from 'react';
class Magnify extends React.Component{
  constructor(props) {
      super(props);
      this.magnify = this.magnify.bind(this);
  }
  render() {
      return(
        <div className='img-magnify'>
            <img key={this.props.photo} className='largeImage show' id='lg' src={this.props.photo} width='auto' height='600' />
        </div>
        );
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.photo !== this.props.photo) {
        this.magnify('lg', 2);
    }
  }

  magnify(imgId, zoom) {
    var img, glass, glassWidth, glassHeight, borderWidth;
    img = document.getElementById(imgId);
    //Create the magnifying glass
    glass = document.createElement('div');
    glass.setAttribute("class", "img-magnifier-glass");
    glass.setAttribute("id", "myGlass");
    //Insert the magnifying glass
    img.parentElement.insertBefore(glass, img);
    //Set background properties for the magnifying glass
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    //used to account for the padding around the image
    borderWidth = 22;
    glassWidth = glass.offsetWidth / 2;
    glassHeight = glass.offsetHeight / 2;
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    function moveMagnifier(e) {
        var pos, x, y;
        //This line stops any other actions from being done while hovering over image
        e.preventDefault;
        //get the cursor's x and y positions
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        //stop the magnifying glass from leaving the image bounds
        if (x > img.width - (glassWidth / zoom)) {
            x = img.width - (glassWidth / zoom);
        }
        if (x < glassWidth / zoom) {
            x = glassWidth / zoom;
        }
        if (y > img.height - (glassHeight / zoom)) {
            y = img.height - (glassHeight / zoom);
        }
        if (y < glassHeight / zoom) {
            y = glassHeight / zoom;
        }

        //set the magnifying glass's position wihtin the image
        glass.style.left = (x - glassWidth) + "px";
        glass.style.top = (y - glassHeight) + "px";

        //display what the magnifying glass shows
        glass.style.backgroundPosition = "-" + ((x * zoom) - glassWidth - borderWidth)
            + "px -" + ((y * zoom) - glassHeight - borderWidth) + "px";

      }
      function getCursorPos(e) {
          var a, x = 0, y = 0;
          e = e || window.event;
          //get the x and y positions for the image
          a = img.getBoundingClientRect();
          //calculate the cursor's x and y coordinates relative to the image
          x = e.pageX - a.left;
          y = e.pageY - a.top;
          //account for page scrolling
          x = x - window.pageXOffset;
          y = y - window.pageYOffset;
          return{x: x, y: y};
      }

  }
}

export default Magnify;
AFRAME.registerComponent('onhover-disappear', {
    schema: {
    },
    init() {
      let data = this.data;
      let el = this.el;

      el.object3D.visible = false;
      this.door = document.getElementById('hider-walls')
      this.disappearNow = () => {
        console.log(el.object3D.visible);
        if(el.object3D.visible){
          this.door.setAttribute('animation' , 'property: scale; delay: 1000; to: 0 0 0; easing: easeInOutQuad; loop: false; dur: 2000')
          this.door.setAttribute('animation__moveaway' , 'property: position; delay: 1000; to: 0 0 20; easing: easeInOutQuad; loop: false; dur: 2000')
        }
      }
      el.addEventListener('mouseenter', this.disappearNow)
    }
  }
);

AFRAME.registerComponent('dashboard-item', {
  schema: {
    rot: {type: 'number', default:90},
    x: {type: 'number', default:0},
    y: {type: 'number', default:4},
    z: {type: 'number', default:-10},
    autoRotate: {type: 'boolean', default: true},
  },
  init(){
    let data = this.data;
    let el = this.el;
    let interactable = false;

    let distance = 15

    this.portalOverlay = document.getElementById('portal-overlay')
    this.portalBtm = document.getElementById('portal-btm')
    this.portalReform = document.getElementById('portal-reform')
    this.infoBtn = document.getElementById('info-button')
    this.closeBtn =  document.getElementById('close-button')
    this.itemDesc = document.getElementById('item-desc')
    this.tapIcon = document.getElementById('tap-icon-container')

    this.camera = document.getElementById('camera')
    this.parent = document.getElementById('parent')
    this.camParent = document.getElementById('cam-parent')

    this.waitingForTap = false;
    this.toRadians = (angle) => {
      return angle * (Math.PI / 180);
    }

    data.x = distance*Math.cos(this.toRadians(data.rot))
    data.z = -2 + distance*Math.sin(this.toRadians(data.rot))

    el.setAttribute('rotation', '0 ' + (-1*(data.rot+90)) + ' 0');
    // console.log(el.getAttribute('position'));
    const startRot = el.getAttribute("rotation")
    const startScale = el.getAttribute("scale")
    // console.log(startRot)
    const startRotString = startRot.x + ' ' + startRot.y + ' ' + startRot.z
    const endRotString = startRot.x + ' ' + (startRot.y+360) + ' ' + startRot.z

    const startScaleString = startScale.x + ' ' + startScale.y + ' ' + startScale.z
    const endScaleString = (startScale.x*2.5) + ' ' + (startScale.y*2.5) + ' ' + (startScale.z*2.5)

    const startPosString = data.x +' ' + data.y + ' ' + data.z
    // const endPosString = 15*Math.cos(this.toRadians(data.rot)) +' ' + data.y + ' ' +  -2 + 15*Math.sin(this.toRadians(data.rot))

    el.setAttribute('position', startPosString);
    this.hoveredOn = () => {
      console.log('hovered on ' + el.object3D);
      interactable = true;
      el.setAttribute('animation__zoomin', 'property: scale; to: ' + endScaleString + '; easing: easeInOutSine; dur: 5000')

      // if(data.autoRotate){
      //   el.setAttribute('animation__zoomin', 'property: scale; to: ' + endScaleString + '; easing: easeInOutSine; dur: 5000')
      // } else {
      //   el.setAttribute('animation__zoomin', 'property: position; to: ' + endPosString + '; easing: easeInOutSine; dur: 5000')
      // }
      // el.removeAttribute('animation')
      // el.setAttribute('animation', 'property: rotation; to: ' + startRotString + '; easing: linear; dur: 1500; loop: false')

      // show portal overlay & reform button

      // this.portalOverlay.style.visibility = "visible"
      // this.portalReform.style.visibility = "visible"
    }
    this.hoveredOff = () => {
      this.infoBtn.style.visibility = "hidden"
      this.portalOverlay.style.visibility = "visible"

      this.camera.setAttribute('look-controls', 'enabled', true);

      // this.infoBtn.style.visibility = "hidden"
      this.closeBtn.style.visibility = "hidden"
      this.itemDesc.style.visibility = "hidden"
      this.portalReform.style.visibility = "visible"
      this.tapIcon.style.visibility = "hidden"

      // this.portalOverlay.style.visibility = "hidden"
      // this.portalReform.style.visibility = "hidden"
      // this.portalBtm.style.visibility = "visible"
      // console.log('portal bottom visible')

      interactable = false;
      console.log('hovered off ' + el);
      // el.removeAttribute('animation__zoomin')
      el.setAttribute('animation__zoomin', 'property: scale; to: '+ startScaleString +'; easing: easeInOutSine; dur: 1500')
      // el.setAttribute('animation', 'property: rotation; to: ' + endRotString + '; easing: linear; dur: 30000')

      // el.removeAttribute('animation__rotation')
      // el.setAttribute('animation__rotation', 'property: rotation; to: 0 360 0; easing: linear; delay: 30000; loop: true')
      // el.setAttribute('animation__reset', 'property: rotation; to: 0 0 0; easing: easeInOutSine; dur: 2000')
      // el.setAttribute('animation__rotation', 'property: rotation; to: 0 0 0; easing: easeInOutSine; dur: 1000')
    }

    this.resetRotation = () => {
      if(!interactable && data.autoRotate){
        // console.log("Resetting rotation")
        el.setAttribute('animation' , 'property: rotation; to: ' + endRotString + '; easing: linear; dur: 30000; loop: true')
      }
    }

    this.readyForMV = () => {
      console.log("tapped");
      this.tapIcon.style.visibility = "hidden"
      if(interactable && this.waitingForTap){
        this.waitingForTap = false;
        console.log("Load the model now...")
        // show reform button
        this.portalReform.style.visibility = "visible"
        // make text and ui visible
        this.infoBtn.style.visibility = "visible"
        this.closeBtn.style.visibility = "visible"
        this.itemDesc.style.visibility = "visible"
        this.portalOverlay.style.visibility = "hidden"
        this.portalBtm.style.visibility = "hidden"
        this.portalReform.style.visibility = "hidden"
        this.camera.setAttribute('look-controls', 'enabled', false);
      }
    }
    this.readyForTap = () => {
      console.log("waiting for tap");
      if(interactable){
        this.tapIcon.style.visibility = "visible"
        this.waitingForTap = true;
        this.tapIcon.addEventListener('click', this.readyForMV)
      }
    }
      // this.tapIcon.style.visibility = "visible"

      // el.removeAttribute('animation__reset');
      // el.setAttribute('animation__rotation', 'property: rotation; from: 0 0 0; to: 0 360 0; easing: linear; dur: 30000; loop: true')
    el.addEventListener('mouseenter', this.hoveredOn)
    el.addEventListener('mouseleave', this.hoveredOff)
    el.addEventListener('animationcomplete__zoomin', this.readyForTap)
    el.addEventListener('animationcomplete', this.resetRotation)
    this.closeBtn.addEventListener('click', this.hoveredOff)
    this.resetRotation();

  }, tick(){

  }
});
// <!--
// animation__mouseenter="property: scale; to: 30 30 30; easing: easeInOutSine; dur: 5000; startEvents: mouseenter";
// animation__mouseleave="property: scale; to: 10 10 10; easing: easeInOutSine; dur: 2000; startEvents: mouseleave"; -->

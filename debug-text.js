AFRAME.registerComponent('debug-custom', {
    schema: {
      text: {default: 'Console'},
      visible: {default: true},
    },
    init() {
      this.debugTextElement = document.getElementById('debug-text')
      this.debugTextElement.innerHTML = this.data.text
      if(this.data.visible){
        this.debugTextElement.style.visibility = "visible"
      } else {
        this.debugTextElement.style.visibility = "hidden"
      }
      console.log(this.debugTextElement.style.visibility);

      this.camera = document.getElementById('camera')
      this.origin = this.camera.object3D.position.clone()
      this.portalElements = document.getElementById('all-content')
      this.dashboardElements = document.getElementById('dashboard-content')
      this.portalElementsOrigin = this.portalElements.object3D.position.clone()
      this.hasEntered = false
      this.mainContent = document.getElementById('main1')
      this.camRef = this.camera.object3D.position.clone()
      this.walls = document.getElementById('hider-walls')
      // this.contents.object3D.visible = false
      this.dashboardElements.object3D.visible = false
    },
    tick() {
      if (!this.hasEntered) {
        // change this later
        // this.debugTextElement.innerHTML = this.camera.object3D.rotation.y
        const dist = Math.abs(this.mainContent.object3D.position.z - this.camera.object3D.position.z)
        // check if inside
        const isInside = (dist < 9.5)
        if (isInside) {
          // this.dashboardElements.object3D.visible = true
          // this.hasEntered = true
          // this.walls.object3D.visible = false
        }
      }
    },
  }
);

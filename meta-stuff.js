AFRAME.registerComponent('meta-stuff', {
    schema: {
    },
    init() {
      let data = this.data;
      let el = this.el;
      let textureLoader = new THREE.TextureLoader();
      // textureLoader.load('./assets/hdris/desert_4k.png', function(texture){
      //   el.object3D.environment = texture
      //   console.log(el.object3D.environment);
      // });
      this.debugTextElement = document.getElementById('debug-text')
      // this.debugTextElement.innerHTML = "Test"
      this.camera = document.getElementById('camera')
      this.hiderWalls = document.getElementById('hider-walls')
      this.envWalls = document.getElementById('wall-env')
      this.reverseWall = document.getElementById('reverse-wall')
      this.allContent = document.getElementById('all-content')
      this.parent = document.getElementById('parent')
      this.camParent = document.getElementById('cam-parent')
      this.camFinal = document.getElementById('camFinalPos')
      // this.doorplaceholder = document.getElementById('door-placeholder')
      this.cta = document.getElementById('intro-cta')
      this.overlay = document.getElementById('intro-overlay')
      this.dashboardElements = document.getElementById('dashboard-content')
      this.camWorldPosition = new THREE.Vector3();
      this.doorCollider = document.getElementById('door-container')
      this.doorHole = document.getElementById('doorset')
      this.behindDoor = document.getElementById('behind-door')
      this.doorShadow = document.getElementById('doorshadow')
      this.doorFrame = document.getElementById('doorframe')
      this.platform = document.getElementById('base')
      this.portalOverlay = document.getElementById('portal-overlay')

      this.doorCollider.object3D.visible = false
      console.log(this.doorCollider.object3D.visible);

      this.portalReform = document.getElementById('portal-reform')
      // this.hiderWalls.object3D.visible = false
      // this.allContent.object3D.visible = false
      this.positionSet = false;

      this.startExperience = () => {
        console.log("start");
        this.positionSet = true
        this.camParent.setAttribute('animation' , 'property: position; delay: 3000; to: ' + this.camWorldPosition.x + ' 0 ' + this.camWorldPosition.z + '; easing: easeInOutQuad; loop: false; delay:1000; dur: 3000')

        this.overlay.animate(
          [
            {transform:'translateY(0px)'},
            {transform:'translateY(500px)'}
          ], {
            easing: "ease-in-out",
            duration: 1000
          });
          this.allContent.object3D.visible = true
          // this.doorplaceholder.object3D.visible = false
          this.camera.object3D.rotation.y -= this.camera.object3D.rotation.y;
          this.behindDoor.setAttribute('animation' , 'property: material.opacity; to: 0; easing: easeInOutQuad; loop: false; dur: 1000')
          this.doorFrame.setAttribute('animation' , 'property: scale; to: 5 5 5; easing: easeInOutQuad; loop: false; dur: 1000')
          this.doorShadow.setAttribute('animation' , 'property: scale; to: 5 5 5; easing: easeInOutQuad; loop: false; dur: 1000')
          this.overlay.style.visibility = "hidden"
        }
      this.showPortalElements = () => {
        this.doorCollider.object3D.visible = true
        this.dashboardElements.object3D.visible = true
        this.portalReform.style.visibility = "visible"

        // change this in the end
        this.portalOverlay.style.visibility = "hidden"

        this.envWalls.object3D.visible = false;
        this.reverseWall.setAttribute('animation' , 'property: position; to: 0 0 10; easing: easeInOutQuad; loop: false; dur: 3000')
      }
      this.risePlatform = () => {
        // this.platform.setAttribute('animation' , 'property: position; to: 0 -2 -15; easing: easeInOutQuad; loop: false; dur: 3000')
        this.behindDoor.object3D.visible = false
        // this.behindDoor.object3D.children[0].material.depthTest = false
        // this.moveCameraIntoScene()
      }

      this.moveCameraIntoScene = () => {
        console.log('moving into the scene');
        // this.camParent.setAttribute('animation' , 'property: position; delay: 3000; to: ' + this.camWorldPosition.x + ' 0 ' + this.camWorldPosition.z + '; easing: easeInOutQuad; loop: false; dur: 3000')
      }
      this.doorClicked = () => {
        // console.log('doorClicked');
        // this.camParent.setAttribute('animation' , 'property: position; delay: 3000; to: ' + this.camWorldPosition.x + ' 0 ' + this.camWorldPosition.z + '; easing: easeInOutQuad; loop: false; dur: 3000')
      }

      this.cta.addEventListener('click', this.startExperience)
      this.camParent.addEventListener('animationcomplete', this.showPortalElements)
      this.behindDoor.addEventListener('animationcomplete', this.risePlatform)
      // this.doorHole.addEventListener('mouseleave', this.doorClicked)
    },
    tick() {
      if(!this.positionSet){
        this.parent.object3D.rotation.y = this.camera.object3D.rotation.y;
        this.camFinal.object3D.getWorldPosition(this.camWorldPosition)
        // this.debugTextElement.innerHTML = this.camWorldPosition.x + ' 4 ' + this.camWorldPosition.z
      }
    },
  }
);

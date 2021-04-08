AFRAME.registerComponent('main-transform', {
    schema: {
    },
    init() {
      let data = this.data;
      let el = this.el;
      this.stageArea = document.getElementById('main-stage')
      this.dashboardElements = document.getElementById('dashboard-content')
      this.portalOverlay = document.getElementById('portal-overlay')
      this.portalBtm = document.getElementById('portal-btm')
      // this.portalReform = document.getElementById('portal-reform')

      this.transition = () => {
        console.log('Main transform transition: ' + el.object3D.visible);
        if(el.object3D.visible){
          el.setAttribute('animation' , 'property: scale; delay: 1000; to: 0 0 0; easing: easeInOutQuad; loop: false; dur: 2000')
          this.dashboardElements.setAttribute('animation' , 'property: scale; delay: 1000; to: 1 1 1; easing: easeInOutQuad; loop: false; dur: 2000')
          this.portalBtm.style.visibility = 'hidden'
        }
      }
      this.createMainSculpture = () => {
        console.log('create main sculpture');
        el.setAttribute('animation' , 'property: scale; delay: 1000; to: 10 10 10; easing: easeInOutQuad; loop: false; dur: 2000')
        this.stageArea.setAttribute('animation' , 'property: scale; delay: 1000; to: 0 0 0; easing: easeInOutQuad; loop: false; dur: 2000')
        this.stageArea.visible = false;
      }
      this.mainSculptureIdle = () => {
        el.addEventListener('mouseenter', this.transition)
        console.log('main sculpture idle');
        // Show initial portal UI
        this.portalBtm.style.visibility = 'visible'
      }

      // el.setAttribute('animation' , 'property: scale; delay: 1000; to: 0 0 0; easing: easeInOutQuad; loop: false; dur: 2000')
      // this.dashboardElements.setAttribute('animation' , 'property: scale; delay: 1000; to: 1 1 1; easing: easeInOutQuad; loop: false; dur: 2000')

      // tunring this off for now
      this.stageArea.object3D.visible = false;
      // this.stageArea.addEventListener('animationcomplete', this.mainSculptureIdle)
      // this.stageArea.addEventListener('mouseenter', this.createMainSculpture)
    }
  }
);

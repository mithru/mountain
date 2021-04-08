AFRAME.registerComponent('hider-material', {
  // schema:{
  //   color:{type:'color', default:'#AAA'}
  // },
  // init: function () {
  //   console.log('Hello, World!');
  //   let basicMaterial = new THREE.MeshBasicMaterial({
  //     colorWrite: false
  //   })
  //
  //   let el = this.el;
  //   let data = this.data;
  //   el.material = basicMaterial
  //   el.material.colorWrite = false;
  //   // console.log(el.material)
  //   // el.setAttribute('material', "shader: flat; color: red; opacity: 0.5")
  // },
  init(){
      const e=new THREE.MeshStandardMaterial;
      e.colorWrite=!1;
      const n=n=>{
        n && (n.material&&(n.material=e),n.traverse(n=>
          {n.isMesh&&(n.material=e)}
        ))
      };
      n(this.el.getObject3D("mesh")),
      this.el.addEventListener("model-loaded",()=>n(this.el.getObject3D("mesh")))
    }
});

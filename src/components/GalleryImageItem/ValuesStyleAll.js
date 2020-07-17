export const defaultStyle = {
  master:{animation:"initWaitGallery 0.45s linear"},
  area:{},
  content:{},
  title:{},
  infoArea:{},
  CloseIconArea:{},
  ControlArea:{transform:"scale(0)", opacity:0},
  CLoseIcon:{color:"transparent", shadowSize:"", shadowColor:""}
 
}

export const OpenDesktop = {
  master:{
    flexDirection:"row", 
    position:'fixed',  
    top:"9.9vh",
    left:"4.5vw",
    width:'90vw',
    height:'86.4vh',
    zIndex:3,
    cursor: 'default',
    boxShadow:" 0.36vmin 0.36vmin 3.6vmin #6d6d6dea",
    borderRadius:"0.63vmin"

  },
  area:{width: '49%', height:" 100%",borderRadius:"0.63vmin 0.9vmin 0.9vmin 0.63vmin", boxShadow:"0.36vmin 0.18vmin 1.8vmin #000000c7", marginRight:"0.36vw"},
  content:{ width:"61%" },
  title:{borderRadius:'0vmin 0.63vmin 0vmin 0.9vmin', marginBottom:"0.9vh",height:"6.3vh", boxShadow:"-0.36vmin 0.18vmin 1.8vmin #000000c7" },
  titleIcon:{fontSize:"0vmin", width:0},
  infoArea:{},
  CloseIconArea:{animation:"init 1.08s linear"},
  CLoseIcon:{size:`3.6vmin`, color:"#fff", shadowSize:"", shadowColor:""}


  
}

export const OpenMobile = {
  master:{
    flexDirection:"column", 
    position:'fixed',  
    top:"7.2vh",
    left:"4.5vw",
    width:'90vw',
    height:'90vh',
    borderRadius:"0.63vmin"
  },
  area:{width: '100%', height:" 100%",},
  content:{ width:"100%" },
  title:{borderRadius:'0vmin', marginBottom:"3.6vh",height:"3.6vh" },
  titleIcon:{fontSize:"0vmin", width:0},
  infoArea:{marginBottom:"4.5vmin"},
  CloseIconArea:{position:'initial', },
  ControlArea:{animation:"init 1.08s linear",margin: "2.7vmin 3.6vmin", transform:"scale(1.26)"},
  CLoseIcon:{size:"1.8vmin", color:"#fff", shadowSize:"", shadowColor:""}
}

export const OpenImg = {
  master:{
    flexDirection:"column", 
    position:'fixed',  
    top:"0vh",
    left:"0vw",
    width:'100vw',
    height:'100vh',
    borderRadius:"0vmin",
    margin:"0vmin",
    zIndex:5
  },
  area:{width: '100%', height:" 100%",},
  content:{ width:"100%", height:"0vmin", transform:"scale(0)" },
  title:{borderRadius:'0vmin', marginBottom:"3.6vh",height:"0vh", transform:"scale(0)" },
  titleIcon:{fontSize:"0vmin", width:0},
  infoArea:{marginBottom:"0vmin"},
  CloseIconArea:{position:'initial', },
  ControlArea: window.innerWidth >= window.innerHeight ? {marginRight:"2.7vw"} : {margin:"3.6vw", transform:"scale(1.44)" } , 
  CLoseIcon:{size:"0.9vh", color:"#fff", shadowSize:"", shadowColor:""}
}
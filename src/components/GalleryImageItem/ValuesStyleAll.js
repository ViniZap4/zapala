export const defaultStyle = {
  master:{animation:"init 0.9s linear"},
  area:{},
  content:{},
  title:{},
  close:{},
}

export const OpenDesktop = {
  master:{
    flexDirection:"row", 
    position:'fixed',  
    top:"9vh",
    left:"4.5vw",
    width:'90vw',
    height:'81vh',
    zIndex:3,
    cursor: 'default',
    boxShadow:" 1.8vmin 1.8vmin 3.6vmin #6d6d6dea",

  },
  area:{width: '49%', height:" 100%",},
  content:{ width:"61%" },
  title:{borderRadius:'0vmin 0.63vmin 0vmin 0.9vmin', marginBottom:"0.9vh",height:"6.3vh" },
  titleIcon:{fontSize:"0vmin", width:0},
  infoArea:{},

  
}

export const OpenMobile = {
  master:{
    flexDirection:"column", 
    position:'fixed',  
    top:"9vh",
    left:"4.5vw",
    width:'90vw',
    height:'81vh',

  },
  area:{width: '100%', height:" 100%",},
  content:{ width:"100%" },
  title:{borderRadius:'0vmin', marginBottom:"3.6vh",height:"3.6vh" },
  titleIcon:{fontSize:"0vmin", width:0},
  close:{width: "3.6vmin",height:"3.6vmin"},
  infoArea:{},

}
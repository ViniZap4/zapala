//import image
import zapala from '../../images/zapala/zapala.png'

export const defaultStyle = {
  master:{animation:"init 0.9s linear"},
  area:{},
  img:{backgroundImage:`url(${zapala})`},
  content:{},
  title:{},
  info:{},
  underline:{height:"0vmin", overFlow:"hidden"},
  close:{},
  sizeAuthorIcon:"0vmin",
  sizeFont:{},
  sizeFontMin:{},
}

export const OpenDesktop = {
  master:{
    flexDirection:"row", 
    position:'fixed',  
    top:"9vh",
    left:"9vw",
    width:'81vw',
    height:'81vh',
    zIndex:3,
    cursor: 'default',
  },
  area:{width: '49%', height:" 100%",},
  img:{backgroundImage:`url(${zapala})`},
  content:{ width:"61%" },
  title:{borderRadius:'0vmin 0.9vmin 0vmin 0.9vmin', marginBottom:"3.6vh",height:"6.3vh" },
  titleIcon:{fontSize:"0vmin", width:0},
  info:{fontSize:'2.7vmin', textAlign: "center", lineHeight: "3.6vh", cursor: 'text',},
  sizeAuthorIcon:"3.6vmin",
  sizeFont:{fontSize:'2.7vmin'},
  sizeFontMin:{fontSize:'1.8vmin'},
}

export const OpenMobile = {
  master:{
    flexDirection:"column", 
    position:'fixed',  
    top:"9vh",
    left:"4.5vw",
    width:'90vw',
    height:'81vh',
    zIndex:3,
    cursor: 'default',
    overFlowY:'auto'
  },
  area:{width: '100%', height:" 100%",},
  img:{backgroundImage:`url(${zapala})`},
  content:{ width:"100%" },
  title:{borderRadius:'0vmin', marginBottom:"3.6vh",height:"3.6vh" },
  titleIcon:{fontSize:"0vmin", width:0},
  info:{fontSize:'3.6vmin', textAlign: "center", lineHeight: "3.6vh", cursor: 'text',},
  close:{width: "3.6vmin",height:"3.6vmin"},
  sizeAuthorIcon:"3.6vmin",
  sizeFont:{fontSize:'2.7vmin'},
  sizeFontMin:{fontSize:'2.07vmin'},
}
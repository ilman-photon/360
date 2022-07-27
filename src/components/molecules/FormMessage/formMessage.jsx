import BlockIcon from '@mui/icons-material/Block';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Box } from '@mui/material';

// import './formMessage.css'

export const FormMessage = ({...props}) => {

  const handleClick = (e) => {
    if (typeof props.onClick === 'function') {
      // do something
      props.onClick()
    }
  }
  
  return (
    <>
      <Box sx={{backgroundColor: props.success ? 'success.main' : 'error.main', width: 'auto', p: 2, borderRadius: '4px', display: 'flex', ...props.sx}}>
        { props.success
          ? <CheckCircleOutlineIcon sx={{ color: '#fff', marginRight:"12.92px", width:"1.3750em", height:"1.3750em" }} />
          : <BlockIcon sx={{ color: '#fff', marginRight:"12.92px", width:"1.3750em", height:"1.3750em" }} />
        }
        <div style={{color:"#fff", fontSize: "16px",lineHeight: "24px",letterSpacing: "0.0016em"}}>
          <div style={{fontWeight: 'bold'}}>{props.title}</div>
          <div>{props.children}</div>
        </div>
      </Box>
    </>
    
  )
}

export default FormMessage
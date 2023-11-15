const style = {
  height: '300px',
  backgroundImage: 'url(https://images.unsplash.com/photo-1532680678473-a16f2cda8e43?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
  backgroundPosition: 'top',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  marginTop: '50px',
  marginBottom: '100px'
}

function Heading () {
  return (
    <div className="heading" style={style}></div>
  )
 }

 export default Heading;
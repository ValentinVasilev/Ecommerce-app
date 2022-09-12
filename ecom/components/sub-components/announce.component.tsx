
const Announce = () => {
  return (
    <div style={announceContainer}>
      <hr style={{ borderTop: '2px solid gold', minWidth: '150px' }} />
      <p style={{ letterSpacing: '4.5px', textTransform: 'uppercase', fontSize: '35px' }}>Welcome</p>
      <p style={{ width: '600px', fontSize: '18px', textAlign: 'center' }}>
        This website is not a real active platform. This is a personal side project.
        For anyone who is reading this, do not atempt to purchase any kind of items.
        All items presented in the website are dummy products, this website <b style={{ color: 'red' }}>DO NOT BUY</b> any
        of the listed items. Please dont enter any credit cards data for your own good.
      </p>
    </div>
  )
}

export default Announce;

const announceContainer = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: 'rgb(30, 29, 27)',
  padding: '25vh 0vh',
  color: 'whitesmoke',
  fontFamily: 'Montserrat'
}
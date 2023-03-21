const spanFlex = { marginRight: '12px', verticalAlign: 'middle'}
const fontColor = {color: 'white', padding: '10px'}

export default function Footer(){
    return(
        <>
               <span style={fontColor}>
                <img src="https://asmpa.selise.cloud/1679314680_47416d5caba8a953871d5ee1df096b_phone_icon.png" alt="phone icon" style={spanFlex} />
                +975 02343233
              </span>
              <span style={fontColor}>
                <img src="https://asmpa.selise.cloud/1679314680_1ca6a7d407f1d81e24f2d2d34801c1_map_icon.png" alt="map icon" style={spanFlex} />
                Wangchutaba, Babesa, Thimphu:Bhutan
              </span>
              <span style={fontColor}>
                <img src="https://asmpa.selise.cloud/1679314680_ad44584bf803d923d0e4c6ac6e941e_email_icon.png" alt="email icon" style={spanFlex} />
                <a href="https://selise.ch" style={{ color:'white'}}>selise.ch</a>
              </span>
        </>
    )
}
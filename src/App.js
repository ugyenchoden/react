import logo from './logo.svg';
import './App.css';
import Footer from './footer';
import { SalaryDetail } from './salary_detail';

const display = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundImage:  'url("https://asmpa.selise.cloud/1679313885_9386f09e992fe14ddb9b3b2deff1d2_header_image.png")'
}

const footerFlex = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '28px 0px 28px',
  backgroundImage:  'url("https://asmpa.selise.cloud/1679313885_9386f09e992fe14ddb9b3b2deff1d2_header_image.png")'
}

const leftFlex= {display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '14px 24px', background: '#F5F5F5', margin: '6px', borderRadius: '5px'}

function getCurrentDate(separator=''){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return(
    `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  )
  }


function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
      <div style={display}>
        <span style={{display: 'inline-block', padding: '28px'}}><h1 style={{color: 'white'}}>PaySlip</h1></span>
        <img src="https://asmpa.selise.cloud/1679313884_aa741e964857aa90fe468ec8689292_selise_logo.png" alt="logo" style={{display: 'block', padding: '28px'}}/>
      </div>
      <div style={{display:'flex', alignItems: 'space-around', textAlign: 'left', padding: '28px', justifyContent: 'space-between'}}>
        <div>
          <section>
          <b>Payslip for</b>
          <h1 style={{color: '#0066B2'}}>Ugyen Choden</h1>
          <p>Designation: Backend Engineer</p>
          <p>CID/Work Permit: 10716000097</p>
          <p>Business Unit: CPQ</p>
          <b>Secure Link Service Limited</b>
          </section>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div style={leftFlex}>
            <div style={{padding: '8px'}}>
            <p>paySlip ID</p>
            <p>1234566</p>
            </div>
            <div style={{padding: '8px'}}>
              <p>Date</p>
              <p>{getCurrentDate('-')}</p>
            </div>
          </div>
          <div style={leftFlex}>
            <div style={{padding: '8px'}}>
            <p>Agency Code No.</p>
            <p>1234566</p>
            </div>
            <div style={{padding: '8px'}}>
              <p>TPN</p>
              <p>UAP123546</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{padding: '28px'}}>
        <SalaryDetail/>
        <div style={{display: 'flex', justifyContent: 'flex-end', margin: '10px' }}>
          <span style={{ color: '#0066B2'}}>Net Pay:</span>
          <span>27000</span>
        </div>
      </div>
      <div style={footerFlex}>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

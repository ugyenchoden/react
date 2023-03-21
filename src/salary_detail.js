const tableFlex = {display: 'flex', justifyContent: 'space-between', padding: '10px'}

export function SalaryDetail(){
    return(
        <>
        <table style={{borderCollapse: 'collapse', width: '100%'}}>
          <tr style={{backgroundColor: '#0066B2', color: 'white'}}>
            <td>SL</td>
            <td>
              <div style={tableFlex}>
              <p>Description</p>
              <p>Amount(NU.)</p>
            </div>
            </td>
          </tr>
          <tr>
            <td>
              <span>1.</span>
            </td>
            <td>
            <div style={tableFlex}>
              <span>Gross Pay</span>
              <span>30000</span>
            </div>
            </td>
          </tr>
          <tr>
            <td>
              <span>2.</span>
            </td>
            <td>
            <div style={tableFlex}>
              <span>PF</span>
            
            <span>1500</span>
            </div>
            </td>
          </tr>
          <tr>
            <td>
              <span>3.</span>
            </td>
            <td>
              <div style={tableFlex}>
              <span>TDS</span>
              <span>300</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span>4.</span>
            </td>
            <td>
              <div style={tableFlex}>
              <span>Health Contribution</span>
            <span>300</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span>5.</span>
            </td>
            <td>
              <div style={tableFlex}>
              <span>Laptop Loan Repayment</span>
              <span>0</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span>6.</span>
            </td>
            <td>
              <div style={tableFlex}>
              <span>Advance Rebursement</span>
              <span>0</span>
              </div>
              </td>
          </tr>
          <tr>
            <td>
              <span>7.</span>
            </td>
            <td>
              <div style={tableFlex}>
              <span>Others</span>
              <span>0</span>
              </div>
              </td>
          </tr>
          <tr>
            <td>
              <span>8.</span>
            </td>
            <td>
              <div style={tableFlex}>
              <span>GIS</span>
              <span>300</span>
              </div>
              </td>
          </tr>
        </table>
        </>
    )
}
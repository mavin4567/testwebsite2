
export default function Home() {
  return (
    <main>
      <section style={{background:'#003DA5',color:'white',padding:'80px 20px',textAlign:'center'}}>
        <h1 style={{fontSize:'56px'}}>INVESTMENT OUTLOOK 2027</h1>
        <p>งานสัมมนาการลงทุนแห่งอนาคต</p>
        <button style={{padding:'12px 24px',borderRadius:'8px',border:'none'}}>Register Now</button>
      </section>

      <section style={{padding:'60px 20px',maxWidth:'1200px',margin:'auto'}}>
        <h2>เกี่ยวกับงาน</h2>
        <p>เวทีรวมผู้เชี่ยวชาญด้านเศรษฐกิจ ตลาดทุน และการลงทุน</p>
      </section>

      <section style={{padding:'60px 20px',background:'white'}}>
        <h2 style={{textAlign:'center'}}>วิทยากร</h2>
        <div style={{display:'flex',gap:'20px',justifyContent:'center',flexWrap:'wrap'}}>
          <div>CEO</div>
          <div>Chief Economist</div>
          <div>Fund Manager</div>
        </div>
      </section>

      <section style={{padding:'60px 20px'}}>
        <h2>Agenda</h2>
        <ul>
          <li>09:00 Opening</li>
          <li>10:00 Market Outlook</li>
          <li>13:00 AI & Investment</li>
        </ul>
      </section>
    </main>
  );
}


const speakers=[
{name:'Dr. Somchai',role:'Chief Economist'},
{name:'Sarah Lee',role:'Fund Manager'},
{name:'David Chen',role:'AI Investment Strategist'},
{name:'Narin Wong',role:'CEO Listed Company'}
];
export default function Page(){
return (
<main>
<section style={{background:'linear-gradient(135deg,#001E60,#003DA5)',color:'#fff',padding:'100px 20px',textAlign:'center'}}>
<h1 style={{fontSize:'64px',margin:0}}>INVESTMENT OUTLOOK 2027</h1>
<p>Future of Wealth & Capital Markets</p>
<button style={{padding:'14px 28px',borderRadius:8,border:0}}>Register Now</button>
</section>

<section style={{padding:60,maxWidth:1200,margin:'auto'}}>
<h2>About Event</h2>
<p>งานสัมมนาการลงทุนแห่งปี รวมผู้เชี่ยวชาญด้านเศรษฐกิจ ตลาดทุน AI และการบริหารความมั่งคั่ง</p>
</section>

<section style={{padding:60,background:'#f5f9ff'}}>
<h2 style={{textAlign:'center'}}>Featured Speakers</h2>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20,maxWidth:1200,margin:'auto'}}>
{speakers.map(s=><div key={s.name} style={{background:'#fff',padding:20,borderRadius:16}}><h3>{s.name}</h3><p>{s.role}</p></div>)}
</div>
</section>

<section style={{padding:60,maxWidth:1000,margin:'auto'}}>
<h2>Agenda</h2>
<ul>
<li>09:00 Opening Remarks</li>
<li>09:30 Economic Outlook 2027</li>
<li>11:00 Thailand Market Strategy</li>
<li>13:00 AI & Future Investment</li>
<li>15:00 Global Opportunities</li>
<li>16:30 Q&A</li>
</ul>
</section>

<section style={{padding:60,background:'#001E60',color:'#fff',textAlign:'center'}}>
<h2>Venue</h2>
<p>Grand Ballroom, Bangkok</p>
</section>
</main>
)}

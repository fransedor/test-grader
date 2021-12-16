import './App.css';
import {useState} from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';


function App() {
	const mahasiswa = [1,2,3,4,5,6,7,8,9,10];
	const nilaiAwal = {
		aspek_penilaian_1: {},
		aspek_penilaian_2: {},
		aspek_penilaian_3: {},
		aspek_penilaian_4: {},
	}
	const [nilai, setNilai] = useState(nilaiAwal);
  return (
    <div className="app container mx-auto">
      <TableHead />
			{mahasiswa.map((x,i) => 
				<TableRow num={x} key={i} setNilai={setNilai} nilai={nilai} />
			)}
			<button className='bg-black text-white py-4 px-6 mt-10 float-right' onClick={() => console.log(nilai)}>Simpan</button>
    </div>
  );
}

export default App;

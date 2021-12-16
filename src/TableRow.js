import React from 'react'
import Select from 'react-select';

const TableRow = ({num, setNilai, nilai}) => {
	const aspek = [1,2,3,4];
	const opsiNilai = [
		{value: 1, label: '1'},
		{value: 2, label: '2'},
		{value: 3, label: '3'},
		{value: 4, label: '4'},
		{value: 5, label: '5'},
		{value: 6, label: '6'},
		{value: 7, label: '7'},
		{value: 8, label: '8'},
		{value: 9, label: '9'},
		{value: 10, label: '10'},
	];

	const handleOnChange = (aspek,nilaiTerpilih) => {
		 let newNilai = {...nilai};
		newNilai[`aspek_penilaian_${aspek}`][`mahasiswa_${num}`]= nilaiTerpilih.value;
		setNilai(newNilai);
	}
	return (
		<div className='flex items-center border-y-2 border-gray-200'>
			<div className="py-4 w-4/12">Mahasiwa {num}</div>
			{aspek.map((x,i) => (
				<Select className='w-2/12' options= {opsiNilai} isSearchable={true} tabIndex={x} key={i} onChange={(nilaiTerpilih) => handleOnChange(x,nilaiTerpilih)} />
			))}

		</div>
	)
}

export default TableRow

import React from 'react';

const TableHead = () => {
	const aspek = [1,2,3,4];
	return (
		<div className='flex items-center text-center'>
			<div className="w-4/12"> </div>
			{aspek.map((x,i) => 
				<div key={i} className="w-2/12 py-2 px-4">Aspek Penilaian {x}</div>
			)}
		</div>
	)
}

export default TableHead;

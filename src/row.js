import React from 'react';
import Tile from './tile.js';

var Row = ({ row, y, drop }) => (
	<div className='row'>
	{row.map((tile, x) => (
		<Tile tile={tile} y={y} x={x} drop={drop}/>
	))}
	</div>
)

export default Row;
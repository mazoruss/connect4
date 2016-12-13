import React from 'react';
import Row from './row.js';

var Board = ({ board, drop }) => (
	<div>
	{board.map( (row, y) => (
		<Row row={row} y={y} drop={drop}/>
	))}
	</div>
)

export default Board;
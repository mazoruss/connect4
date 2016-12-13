import React from 'react';

var Tile = ({ tile, y, x, drop }) => (
	<div className={tile === 0 ? 'tile' : tile === 1 ? 'redTile' : 'blueTile'} onClick={() => drop(x)}>

	</div>
)

export default Tile;
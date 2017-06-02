'use strict';

module.exports = function getSampleData (cb){

	// video frames 
	var adminVideos = [
	{
		title : 'Logan Epic Kill',
		url   : 'https://youtu.be/G1aSAQ1CibQ?t=1m26s',
		desc  : 'LOGAN Official International Red Band Trailer #1 (2017) Hugh Jackman Wolverine Marvel Movie HD',
		start : 86,
		end   : 89,
		step  : 1,
		slug  : 'G1aSAQ1CibQ',

	},
	{
		title : 'Benedict Cumberbatch Shows Off Doctor Strange\'s Hands',
		url   : 'https://youtu.be/Lt-U_t2pUHI?t=41s',
		desc  : 'Witness the power of the Sorcerer Supreme',
		start : 41,
		end   : 51,
		step  : 1,
		slug  : 'Lt-U_t2pUHI',
	
	},
	{
		title : 'Black Panther Featurette',
		url   : 'https://youtu.be/Q88JeXtKMDY?t=44s',
		desc  : 'Black Panther\'s role in a featurette for Marvel\'s "Captain America: Civil War"',
		start : 44,
		end   : 54,
		step  : 1,
		slug  : 'Q88JeXtKMDY',
		
	},
	{
		title : 'Jessica Jones Mirror Cracking',
		url   : 'https://youtu.be/nWHUjuJ8zxE?t=1m31s',
		desc  : 'She is a complex character, with problems',
		start : 91,
		end   : 97,
		step  : 1,
		slug  : 'nWHUjuJ8zxE',
	
	}
	];

	return cb(adminVideos);
};
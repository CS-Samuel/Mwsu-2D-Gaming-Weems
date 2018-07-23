var GAMETITLE = 'Odyssey of Flight'
var COLORS = ['#000000', '#0C090A', '#2C3539', '#2B1B17', '#34282C', '#25383C', '#3B3131', '#413839', '#3D3C3A', '#463E3F', '#4C4646', '#504A4B', '#565051', '#5C5858', '#625D5D', '#666362', '#6D6968', '#726E6D', '#736F6E', '#837E7C', '#848482', '#B6B6B4', '#D1D0CE', '#E5E4E2', '#BCC6CC', '#98AFC7', '#6D7B8D', '#657383', '#616D7E', '#646D7E', '#566D7E', '#737CA1', '#4863A0', '#2B547E', '#2B3856', '#151B54', '#000080', '#342D7E', '#15317E', '#151B8D', '#0000A0', '#0020C2', '#0041C2', '#2554C7', '#1569C7', '#2B60DE', '#1F45FC', '#6960EC', '#736AFF', '#357EC7', '#368BC1', '#488AC7', '#3090C7', '#659EC7', '#87AFC7', '#95B9C7', '#728FCE', '#2B65EC', '#306EFF', '#157DEC', '#1589FF', '#6495ED', '#6698FF', '#38ACEC', '#56A5EC', '#5CB3FF', '#3BB9FF', '#79BAEC', '#82CAFA', '#82CAFF', '#A0CFEC', '#B7CEEC', '#B4CFEC', '#C2DFFF', '#C6DEFF', '#AFDCEC', '#ADDFFF', '#BDEDFF', '#CFECEC', '#E0FFFF', '#EBF4FA', '#F0F8FF', '#F0FFFF', '#CCFFFF', '#93FFE8', '#9AFEFF', '#7FFFD4', '#00FFFF', '#7DFDFE', '#57FEFF', '#8EEBEC', '#50EBEC', '#4EE2EC', '#81D8D0', '#92C7C7', '#77BFC7', '#78C7C7', '#48CCCD', '#43C6DB', '#46C7C7', '#43BFC7', '#3EA99F', '#3B9C9C', '#438D80', '#348781', '#307D7E', '#5E7D7E', '#4C787E', '#008080', '#4E8975', '#78866B', '#848b79', '#617C58', '#728C00', '#667C26', '#254117', '#306754', '#347235', '#437C17', '#387C44', '#347C2C', '#347C17', '#348017', '#4E9258', '#6AA121', '#4AA02C', '#41A317', '#3EA055', '#6CBB3C', '#6CC417', '#4CC417', '#52D017', '#4CC552', '#54C571', '#99C68E', '#89C35C', '#85BB65', '#8BB381', '#9CB071', '#B2C248', '#9DC209', '#A1C935', '#7FE817', '#59E817', '#57E964', '#64E986', '#5EFB6E', '#00FF00', '#5FFB17', '#87F717', '#8AFB17', '#6AFB92', '#98FF98', '#B5EAAA', '#C3FDB8', '#CCFB5D', '#B1FB17', '#BCE954', '#EDDA74', '#EDE275', '#FFE87C', '#FFFF00', '#FFF380', '#FFFFC2', '#FFFFCC', '#FFF8C6', '#FFF8DC', '#F5F5DC', '#FBF6D9', '#FAEBD7', '#F7E7CE', '#FFEBCD', '#F3E5AB', '#ECE5B6', '#FFE5B4', '#FFDB58', '#FFD801', '#FDD017', '#EAC117', '#F2BB66', '#FBB917', '#FBB117', '#FFA62F', '#E9AB17', '#E2A76F', '#DEB887', '#FFCBA4', '#C9BE62', '#E8A317', '#EE9A4D', '#C8B560', '#D4A017', '#C2B280', '#C7A317', '#C68E17', '#B5A642', '#ADA96E', '#C19A6B', '#CD7F32', '#C88141', '#C58917', '#AF9B60', '#AF7817', '#B87333', '#966F33', '#806517', '#827839', '#827B60', '#786D5F', '#493D26', '#483C32', '#6F4E37', '#835C3B', '#7F5217', '#7F462C', '#C47451', '#C36241', '#C35817', '#C85A17', '#CC6600', '#E56717', '#E66C2C', '#F87217', '#F87431', '#E67451', '#FF8040', '#F88017', '#FF7F50', '#F88158', '#F9966B', '#E78A61', '#E18B6B', '#E77471', '#F75D59', '#E55451', '#E55B3C', '#FF0000', '#FF2400', '#F62217', '#F70D1A', '#F62817', '#E42217', '#E41B17', '#DC381F', '#C34A2C', '#C24641', '#C04000', '#C11B17', '#9F000F', '#990012', '#8C001A', '#954535', '#7E3517', '#8A4117', '#7E3817', '#800517', '#810541', '#7D0541', '#7E354D', '#7D0552', '#7F4E52', '#7F5A58', '#7F525D', '#B38481', '#C5908E', '#C48189', '#C48793', '#E8ADAA', '#EDC9AF', '#FDD7E4', '#FCDFFF', '#FFDFDD', '#FBBBB9', '#FAAFBE', '#FAAFBA', '#F9A7B0', '#E7A1B0', '#E799A3', '#E38AAE', '#F778A1', '#E56E94', '#F660AB', '#FC6C85', '#F6358A', '#F52887', '#E45E9D', '#E4287C', '#F535AA', '#FF00FF', '#E3319D', '#F433FF', '#D16587', '#C25A7C', '#CA226B', '#C12869', '#C12267', '#C25283', '#C12283', '#B93B8F', '#7E587E', '#571B7E', '#583759', '#4B0082', '#461B7E', '#4E387E', '#614051', '#5E5A80', '#6A287E', '#7D1B7E', '#A74AC7', '#B048B5', '#6C2DC7', '#842DCE', '#8D38C9', '#7A5DC7', '#7F38EC', '#8E35EF', '#893BFF', '#8467D7', '#A23BEC', '#B041FF', '#C45AEC', '#9172EC', '#9E7BFF', '#D462FF', '#E238EC', '#C38EC7', '#C8A2C8', '#E6A9EC', '#E0B0FF', '#C6AEC7', '#F9B7FF', '#D2B9D3', '#E9CFEC', '#EBDDE2', '#E3E4FA', '#FDEEF4', '#FFF5EE', '#FEFCFF', '#FFFFFF']
var COLORS_PASTEL = ['#FF4848', '#FF68DD', '#FF62B0', '#FE67EB', '#E469FE', '#D568FD', '#9669FE', '#FF7575', '#FF79E1', '#FF73B9', '#FE67EB', '#E77AFE', '#D97BFD', '#A27AFE', '#FF8A8A', '#FF86E3', '#FF86C2', '#FE8BF0', '#EA8DFE', '#DD88FD', '#AD8BFE', '#FF9797', '#FF97E8', '#FF97CB', '#FE98F1', '#ED9EFE', '#E29BFD', '#B89AFE', '#FFA8A8', '#FFACEC', '#FFA8D3', '#FEA9F3', '#EFA9FE', '#E7A9FE', '#C4ABFE', '#FFBBBB', '#FFACEC', '#FFBBDD', '#FFBBF7', '#F2BCFE', '#EDBEFE', '#D0BCFE', '#FFCECE', '#FFC8F2', '#FFC8E3', '#FFCAF9', '#F5CAFF', '#F0CBFE', '#DDCEFF', '#FFDFDF', '#FFDFF8', '#FFDFEF', '#FFDBFB', '#F9D9FF', '#F4DCFE', '#E6DBFF', '#FFECEC', '#FFEEFB', '#FFECF5', '#FFEEFD', '#FDF2FF', '#FAECFF', '#F1ECFF', '#FFF2F2', '#FFFEFB', '#FFF9FC', '#FFF9FE', '#FFFDFF', '#FDF9FF', '#FBF9FF', '#800080', '#872187', '#9A03FE', '#892EE4', '#3923D6', '#2966B8', '#23819C', '#BF00BF', '#BC2EBC', '#A827FE', '#9B4EE9', '#6755E3', '#2F74D0', '#2897B7', '#DB00DB', '#D54FD5', '#B445FE', '#A55FEB', '#8678E9', '#4985D6', '#2FAACE', '#F900F9', '#DD75DD', '#BD5CFE', '#AE70ED', '#9588EC', '#6094DB', '#44B4D5', '#FF4AFF', '#DD75DD', '#C269FE', '#AE70ED', '#A095EE', '#7BA7E1', '#57BCD9', '#FF86FF', '#E697E6', '#CD85FE', '#C79BF2', '#B0A7F1', '#8EB4E6', '#7BCAE1', '#FFA4FF', '#EAA6EA', '#D698FE', '#CEA8F4', '#BCB4F3', '#A9C5EB', '#8CD1E6', '#FFBBFF', '#EEBBEE', '#DFB0FF', '#DBBFF7', '#CBC5F5', '#BAD0EF', '#A5DBEB', '#FFCEFF', '#F0C4F0', '#E8C6FF', '#E1CAF9', '#D7D1F8', '#CEDEF4', '#B8E2EF', '#FFDFFF', '#F4D2F4', '#EFD7FF', '#EDDFFB', '#E3E0FA', '#E0EAF8', '#C9EAF3', '#FFECFF', '#F4D2F4', '#F9EEFF', '#F5EEFD', '#EFEDFC', '#EAF1FB', '#DBF0F7', '#FFF9FF', '#FDF9FD', '#FEFDFF', '#FEFDFF', '#F7F5FE', '#F8FBFE', '#EAF7FB', '#5757FF', '#62A9FF', '#62D0FF', '#06DCFB', '#01FCEF', '#03EBA6', '#01F33E', '#6A6AFF', '#75B4FF', '#75D6FF', '#24E0FB', '#1FFEF3', '#03F3AB', '#0AFE47', '#7979FF', '#86BCFF', '#8ADCFF', '#3DE4FC', '#5FFEF7', '#33FDC0', '#4BFE78', '#8C8CFF', '#99C7FF', '#99E0FF', '#63E9FC', '#74FEF8', '#62FDCE', '#72FE95', '#9999FF', '#99C7FF', '#A8E4FF', '#75ECFD', '#92FEF9', '#7DFDD7', '#8BFEA8', '#AAAAFF', '#A8CFFF', '#BBEBFF', '#8CEFFD', '#A5FEFA', '#8FFEDD', '#A3FEBA', '#BBBBFF', '#BBDAFF', '#CEF0FF', '#ACF3FD', '#B5FFFC', '#A5FEE3', '#B5FFC8', '#CACAFF', '#D0E6FF', '#D9F3FF', '#C0F7FE', '#CEFFFD', '#BEFEEB', '#CAFFD8', '#E1E1FF', '#DBEBFF', '#ECFAFF', '#C0F7FE', '#E1FFFE', '#BDFFEA', '#EAFFEF', '#EEEEFF', '#ECF4FF', '#F9FDFF', '#E6FCFF', '#F2FFFE', '#CFFEF0', '#EAFFEF', '#F9F9FF', '#F9FCFF', '#FDFEFF', '#F9FEFF', '#FDFFFF', '#F7FFFD', '#F9FFFB', '#1FCB4A', '#59955C', '#48FB0D', '#2DC800', '#59DF00', '#9D9D00', '#B6BA18', '#27DE55', '#6CA870', '#79FC4E', '#32DF00', '#61F200', '#C8C800', '#CDD11B', '#4AE371', '#80B584', '#89FC63', '#36F200', '#66FF00', '#DFDF00', '#DFE32D', '#7CEB98', '#93BF96', '#99FD77', '#52FF20', '#95FF4F', '#FFFFAA', '#EDEF85', '#93EEAA', '#A6CAA9', '#AAFD8E', '#6FFF44', '#ABFF73', '#FFFF84', '#EEF093', '#A4F0B7', '#B4D1B6', '#BAFEA3', '#8FFF6F', '#C0FF97', '#FFFF99', '#F2F4B3', '#BDF4CB', '#C9DECB', '#CAFEB8', '#A5FF8A', '#D1FFB3', '#FFFFB5', '#F5F7C4', '#D6F8DE', '#DBEADC', '#DDFED1', '#B3FF99', '#DFFFCA', '#FFFFC8', '#F7F9D0', '#E3FBE9', '#E9F1EA', '#EAFEE2', '#D2FFC4', '#E8FFD9', '#FFFFD7', '#FAFBDF', '#E3FBE9', '#F3F8F4', '#F1FEED', '#E7FFDF', '#F2FFEA', '#FFFFE3', '#FCFCE9', '#FAFEFB', '#FBFDFB', '#FDFFFD', '#F5FFF2', '#FAFFF7', '#FFFFFD', '#FDFDF0', '#BABA21', '#C8B400', '#DFA800', '#DB9900', '#FFB428', '#FF9331', '#FF800D', '#E0E04E', '#D9C400', '#F9BB00', '#EAA400', '#FFBF48', '#FFA04A', '#FF9C42', '#E6E671', '#E6CE00', '#FFCB2F', '#FFB60B', '#FFC65B', '#FFAB60', '#FFAC62', '#EAEA8A', '#F7DE00', '#FFD34F', '#FFBE28', '#FFCE73', '#FFBB7D', '#FFBD82', '#EEEEA2', '#FFE920', '#FFDD75', '#FFC848', '#FFD586', '#FFC48E', '#FFC895', '#F1F1B1', '#FFF06A', '#FFE699', '#FFD062', '#FFDEA2', '#FFCFA4', '#FFCEA2', '#F4F4BF', '#FFF284', '#FFECB0', '#FFE099', '#FFE6B5', '#FFD9B7', '#FFD7B3', '#F7F7CE', '#FFF7B7', '#FFF1C6', '#FFEAB7', '#FFEAC4', '#FFE1C6', '#FFE2C8', '#F9F9DD', '#FFF9CE', '#FFF5D7', '#FFF2D2', '#FFF2D9', '#FFEBD9', '#FFE6D0', '#FBFBE8', '#FFFBDF', '#FFFAEA', '#FFF9EA', '#FFF7E6', '#FFF4EA', '#FFF1E6', '#FEFEFA', '#FFFEF7', '#FFFDF7', '#FFFDF9', '#FFFDF9', '#FFFEFD', '#FFF9F4', '#D1D17A', '#C0A545', '#C27E3A', '#C47557', '#B05F3C', '#C17753', '#B96F6F', '#D7D78A', '#CEB86C', '#C98A4B', '#CB876D', '#C06A45', '#C98767', '#C48484', '#DBDB97', '#D6C485', '#D19C67', '#D29680', '#C87C5B', '#D0977B', '#C88E8E', '#E1E1A8', '#DECF9C', '#DAAF85', '#DAA794', '#CF8D72', '#DAAC96', '#D1A0A0', '#E9E9BE', '#E3D6AA', '#DDB791', '#DFB4A4', '#D69E87', '#E0BBA9', '#D7ACAC', '#EEEECE', '#EADFBF', '#E4C6A7', '#E6C5B9', '#DEB19E', '#E8CCBF', '#DDB9B9', '#E9E9C0', '#EDE4C9', '#E9D0B6', '#EBD0C7', '#E4C0B1', '#ECD5CA', '#E6CCCC', '#EEEECE', '#EFE7CF', '#EEDCC8', '#F0DCD5', '#EACDC1', '#F0DDD5', '#ECD9D9', '#F1F1D6', '#F5EFE0', '#F2E4D5', '#F5E7E2', '#F0DDD5', '#F5E8E2', '#F3E7E7', '#F5F5E2', '#F9F5EC', '#F9F3EC', '#F9EFEC', '#F5E8E2', '#FAF2EF', '#F8F1F1', '#FDFDF9', '#FDFCF9', '#FCF9F5', '#FDFAF9', '#FDFAF9', '#FCF7F5', '#FDFBFB', '#F70000', '#B9264F', '#990099', '#74138C', '#0000CE', '#1F88A7', '#4A9586', '#FF2626', '#D73E68', '#B300B3', '#8D18AB', '#5B5BFF', '#25A0C5', '#5EAE9E', '#FF5353', '#DD597D', '#CA00CA', '#A41CC6', '#7373FF', '#29AFD6', '#74BAAC', '#FF7373', '#E37795', '#D900D9', '#BA21E0', '#8282FF', '#4FBDDD', '#8DC7BB', '#FF8E8E', '#E994AB', '#FF2DFF', '#CB59E8', '#9191FF', '#67C7E2', '#A5D3CA', '#FFA4A4', '#EDA9BC', '#F206FF', '#CB59E8', '#A8A8FF', '#8ED6EA', '#C0E0DA', '#FFB5B5', '#F0B9C8', '#FF7DFF', '#D881ED', '#B7B7FF', '#A6DEEE', '#CFE7E2', '#FFC8C8', '#F4CAD6', '#FFA8FF', '#EFCDF8', '#C6C6FF', '#C0E7F3', '#DCEDEA', '#FFEAEA', '#F8DAE2', '#FFC4FF', '#EFCDF8', '#DBDBFF', '#D8F0F8', '#E7F3F1', '#FFEAEA', '#FAE7EC', '#FFE3FF', '#F8E9FC', '#EEEEFF', '#EFF9FC', '#F2F9F8', '#FFFDFD', '#FEFAFB', '#FFFDFF', '#FFFFFF', '#FDFDFF', '#FAFDFE', '#F7FBFA'];
var BG_COLOR = COLORS_PASTEL[Math.floor(Math.random()*(COLORS_PASTEL.length-1))]


window.onload = main()
function main()
{
	console.log("game.js")
	var game = new Phaser.Game(450, 550, Phaser.Canvas, "game")

	game.global = {
		score:0,
		best_score:0,
		obstacle_id:0
	}

	game.state.add("boot", boot)
	game.state.add("preload", preload)
	game.state.add("mainMenu", mainMenu)
	game.state.add("play", play)
	game.state.add("gameOver", gameOver)
	game.state.start("boot")
}

function random(n){ return Math.floor(Math.random()*(n+1)) }
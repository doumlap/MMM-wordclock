var langPack = [
	{
		langCode  : 'en-US',
		letterSet : [
			['I','T','E','I','S','F','T','L','V','N','E'],
			['A','C','Q','U','A','R','T','E','R','K','O'],
			['T','W','E','N','T','Y','F','I','V','E','X'],
			['H','A','L','F','C','T','E','N','E','T','O'],
			['P','A','S','T','B','S','E','V','E','N','L'],
			['O','N','E','T','W','O','T','H','R','E','E'],
			['F','O','U','R','F','I','V','E','S','I','X'],
			['N','I','N','E','K','T','W','E','L','V','E'],
			['E','I','G','H','T','E','L','E','V','E','N'],
			['T','E','N','P','Y','O','C','L','O','C','K']
		],
		timeString: function (h, m, settings = { round: false }){
			var ret = 'IT IS ';
			h %= 12;
			if(h == 0) {h = 12;}
			var hourNames = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN', 'ELEVEN', 'TWELVE']
			switch ((settings.round ? (Math.round(m / 5) * 5) : Math.floor(m / 5) * 5) % 60) {
			case 0:
				ret += hourNames[h+1] + ' OCLOCK';
				break;
			case 5:
				ret += 'FIVE PAST '+hourNames[h-1];
				break;
			case 10:
				ret += 'TEN PAST '+hourNames[h-1];
				break;
			case 15:
				ret += 'A QUARTER PAST '+hourNames[h-1];
				break;
			case 20:
				ret += 'TWENTY PAST '+hourNames[h-1];
				break;
			case 25:
				ret += 'TWENTYFIVE PAST '+hourNames[h-1];
				break;
			case 30:
				ret += 'HALF PAST '+hourNames[h-1];
				break;
			case 35:
				ret += 'TWENTYFIVE TO '+hourNames[h%12];
				break;
			case 40:
				ret += 'TWENTY TO '+hourNames[h%12];
				break;
			case 45:
				ret += 'A QUARTER TO '+hourNames[h%12];
				break;
			case 50:
				ret += 'TEN TO '+hourNames[h%12];
				break;
			case 55:
				ret += 'FIVE TO '+hourNames[h%12];
				break;
			}
			return ret;
		}
	},
	{
		langCode: 'fr-CA',
		letterSet: [
			['I', 'L', 'E', 'E', 'S', 'T', 'H', 'D', 'E', 'U', 'X'],
			['Q', 'U', 'A', 'T', 'R', 'E', 'T', 'R', 'O', 'I', 'S'],
			['N', 'E', 'U', 'F', 'U', 'N', 'E', 'S', 'E', 'P', 'T'],
			['H', 'U', 'I', 'T', 'S', 'I', 'X', 'C', 'I', 'N', 'Q'],
			['M', 'I', 'D', 'I', 'X', 'M', 'I', 'N', 'U', 'I', 'T'],
			['O', 'N', 'Z', 'E', 'R', 'H', 'E', 'U', 'R', 'E', 'S'],
			['M', 'O', 'I', 'N', 'S', 'O', 'L', 'E', 'D', 'I', 'X'],
			['E', 'T', 'R', 'Q', 'U', 'A', 'R', 'T', 'P', 'M', 'V'],
			['V', 'I', 'N', 'G', 'T', '-', 'C', 'I', 'N', 'Q', 'U'],
			['E', 'T', 'S', 'D', 'E', 'M', 'I', 'E', 'P', 'A', 'M']
		],
		timeString: function (h, m, settings = { round: false }) {
			var ret = 'IL EST ';
			h %= 12;

			if (h == 0) {
				h = 12;
			}


			var hourNames = ['UN', 'DEUX', 'TROIS', 'QUATRE', 'CINQ', 'SIX', 'SEPT', 'HUIT', 'NEUF', 'DIX', 'ONZE', 'DOUZE']
			switch ((settings.round ? (Math.round(m / 5) * 5) : Math.floor(m / 5) * 5) % 60) {
			case 0:
				ret += hourNames[h + 1] + ' HEURES';
				break;
			case 5:
				ret += hourNames[h - 1] + ' HEURES CINQ';
				break;
			case 10:
				ret += hourNames[h - 1] + ' HEURES DIX';
				break;
			case 15:
				ret += hourNames[h - 1] + ' HEURES ET QUART';
				break;
			case 20:
				ret += hourNames[h - 1] + ' HEURES ET VINGT';
				break;
			case 25:
				ret += hourNames[h - 1] + ' HEURES ET VINGT-CINQ' ;
				break;
			case 30:
				ret += hourNames[h - 1] + ' HEURES ET DEMI';
				break;
			case 35:
				ret += hourNames[h - 1] + ' HEURES TRENTE CINQ';
				break;
			case 40:
				ret += hourNames[h % 12] + ' HEURES MOINS VINGT';
				break;
			case 45:
				ret += hourNames[h % 12] + ' HEURES MOINS QUART';
				break;
			case 50:
				ret += hourNames[h % 12] + ' HEURES MOINS DIX';
				break;
			case 55:
				ret += hourNames[h % 12] + ' HEURES MOINS CINQ';
				break;
			}
			return ret;
		}
	},
	{
		langCode  : 'de-DE',
		letterSet : [
			['E','S','M','I','S','T','E','F','Ü','N','F'],
			['Z','E','H','N','Z','W','A','N','Z','I','G'],
			['N','A','C','H','V','I','E','R','T','E','L'],
			['V','O','R','N','A','C','H','H','A','L','B'],
			['E','I','N','S','I','N','K','Z','W','E','I'],
			['D','R','E','I','E','A','N','V','I','E','R'],
			['F','Ü','N','F','N','I','S','E','C','H','S'],
			['S','I','E','B','E','N','I','A','C','H','T'],
			['N','E','U','N','Z','E','H','N','E','L','F'],
			['Z','W','Ö','L','F','K','A','B','U','H','R']
		],
		timeString: function(h,m,settings = {round:false}){
			var ret = 'ES IST ';
			h %= 12;
			if(h == 0) {h = 12;}
			var hourNames = ['EINS','ZWEI','DREI','VIER','FÜNF','SECHS','SIEBEN','ACHT','NEUN','ZEHN','ELF','ZWÖLF'];
			switch ((settings.round ? (Math.round(m / 5) * 5):Math.floor(m/5)*5) % 60) {
			case 0:
				ret += ((h==1)?'EIN':hourNames[h-1]) + ' UHR';
				break;
			case 5:
				ret += 'FÜNF NACH '+hourNames[h-1];
				break;
			case 10:
				ret += 'ZEHN NACH '+hourNames[h-1];
				break;
			case 15:
				ret += 'VIERTEL NACH '+hourNames[h-1];
				break;
			case 20:
				ret += 'ZWANZIG NACH '+hourNames[h-1];
				break;
			case 25:
				ret += 'FÜNF VOR HALB '+hourNames[h%12];
				break;
			case 30:
				ret += 'HALB '+hourNames[h%12];
				break;
			case 35:
				ret += 'FÜNF NACH HALB '+hourNames[h%12];
				break;
			case 40:
				ret += 'ZWANZIG VOR '+hourNames[h%12];
				break;
			case 45:
				ret += 'VIERTEL VOR '+hourNames[h%12];
				break;
			case 50:
				ret += 'ZEHN VOR '+hourNames[h%12];
				break;
			case 55:
				ret += 'FÜNF VOR '+hourNames[h%12];
				break;
			}
			return ret;
		}
	}
];
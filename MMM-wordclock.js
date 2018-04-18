// thanks to https://github.com/Snapstromegon/wordclock

Module.register("MMM-wordclock",{
	langCode: 'fr-CA',
	intervale: 10000,

	// Override dom generator.
	getDom: function() {
		let main = document.createElement("div");
		main.classList.add('module');

		let wrapper = document.createElement('div');
		wrapper.classList.add('wc_wrapper');

		let minutes = document.createElement('div')
		let min1 = document.createElement('div');
		let min2 = document.createElement('div');
		let min3 = document.createElement('div');
		let min4 = document.createElement('div');
		min1.className = 'wc_minute wc_minute_1';
		min2.className = 'wc_minute wc_minute_2';
		min3.className = 'wc_minute wc_minute_3';
		min4.className = 'wc_minute wc_minute_4';
		minutes.appendChild(min1);
		minutes.appendChild(min2);
		minutes.appendChild(min3);
		minutes.appendChild(min4);

		minutes.classList.add('wc_minutes');

		let wc  = document.createElement('div')
		wc.classList.add('wc');

		wrapper.appendChild(minutes);
		wrapper.appendChild(wc);

		main.appendChild(wrapper);

		return main;
	},

	init: function() {

	},

	start: function () {
		setTimeout(() => {
			this.setLetters(this.langCode);
			setInterval(this.update.bind(this), 10000);
			this.update();
		}, 1500);
	},

	getStyles: function () {
		return ['MMM-wordclock.css'];
	},

	getScripts: function () {
		return ['lang.js'];
	},

	update: function () {
		var htmlWcs = document.getElementsByClassName('wc');
		var date = new Date();
		var pack = this.getLanguagePack(this.langCode);
		this.setMinuteDots(date.getMinutes() % 5, {lang: 'FR', updateInterval: this.intervale, showMinutePoints: true});
		var timestring = pack.timeString(date.getHours(), date.getMinutes(), {lang: 'FR', updateInterval: this.intervale, showMinutePoints: true});
		var timewords = timestring.split(' ');
		var displayChars = '';
		var rows = pack.letterSet;
		var allRows = [];

		for (var i = 0; i < rows.length; i++) {
			allRows = allRows.concat(rows[i]);
		}

		displayChars = allRows.join('');

		for (var i = 0; i < htmlWcs.length; i++) {
			var dcToWork = displayChars;
			var letters = htmlWcs[i].getElementsByClassName('wc_letter');
			var offset = 0;

			this.setMode(letters, 0, dcToWork.length, false);

			for (var j = 0; j < timewords.length; j++) {
				var start = dcToWork.search(timewords[j]);
				this.setMode(letters, start + offset, start + offset + timewords[j].length, true);
				offset += start + timewords[j].length;
				dcToWork = dcToWork.substr(start + timewords[j].length);
			}
		}
	},

	setMinuteDots: function (dots, settings) {
		let elms = document.getElementsByClassName('wc_minute');

		for (let i = 0; i < elms.length; i++) {
			if (settings.showMinutePoints) {
				elms[i].classList.remove("wc--hidden");
				elms[i].classList.remove("wc_minute--bright");
			}
			else {
				elms[i].classList.add("wc--hidden");
			}
		}

		for (let i = 0; i < dots; i++) {
			if (settings.showMinutePoints) {
				elms[i].classList.add("wc_minute--bright");
			}
		}
	},

	setMode: function (domElems, start, end, mode) {
		for (var i = start; i < end; i++) {
			if (mode) {
				domElems[i].classList.add('wc_letter--bright');
			}
			else {
				domElems[i].classList.remove('wc_letter--bright');
			}
		  }
	},

	setLetters: function (langCode) {
		let html = document.getElementsByClassName('wc');
		let currentLangPack = this.getLanguagePack(langCode);

		for (var i = 0; i < html.length; i++) {
			this.setHTMLLetters(html[i], currentLangPack);
		}
	},

	setHTMLLetters: function (clock, langPack) {
		let letters = langPack.letterSet;

		for (let i = 0; i < letters.length; i++) {
			let htmlRow = document.createElement('div');
			htmlRow.classList.add('wc_row');
			for (let j = 0; j < letters[i].length; j++) {
				let htmlLetter = document.createElement('span');
				htmlLetter.classList.add('wc_letter');
				htmlLetter.innerText = letters[i][j];
				htmlRow.appendChild(htmlLetter);
			}

			clock.appendChild(htmlRow);
		}
	},

	getLanguagePack: function (langCode) {
		return langPack.find(l => l.langCode == langCode);
	}
});
class BirthdayCard extends HTMLElement {
	set hass(hass) {
		
// Birthday-calendar v1.2 (10.03.2019)		


///// SETTINGS /////////////////////////////////////////////////////////////
		
		
		// Settings //
		
		var bdDeadSymbol = "&#8224;"; // (Symbol for people who have passed on - set «, d:1» in birthday list)
		var bdMarriedSymbol = "&#9829;";
		
		
		// String translations (translate these to your own language) //
		
		var bdTextToday = "Today"; // Today
		var bdTextTomorrow = "Tomorrow"; // Tomorrow
		var bdTextNone = "No birthdays in the next"; // No birthdays during next
		var bdTextDays = "days"; // days
		var bdTextYears = "years"; // years
		var bdTextIn = ""; // in
		
		
///// BIRTHDAY REGISTRY ////////////////////////////////////////////////////
	
		
		var birthdayList=[
			{name:"Ben", day:6, month:3, year:2009},
			{name:"Noah", day:7, month:3, year:2018},
			{name:"Savannah", day:8, month:3, year:1988},
			{name:"Chris", day:20, month:7, year:2006},
			{name:"Joe", day:20, month:8, year:1989},
			{name:"Michael", day:16, month:10, year:2004},
			{name:"Aniversary", day:14, month:11, year:2014, s:2},
		];
		
		
///// DO NOT EDIT BELOW THIS LINE //////////////////////////////////////////
		
		
		if (!this.content) {
			const card = document.createElement('ha-card');
			var tittel = this.config.title;
			card.header = tittel ? tittel : "Birthdays"; // Card title from ui-lovelace.yaml - Defaults to Birthdays
			this.content = document.createElement('div');
			this.content.style.padding = '0 16px 16px';
			card.appendChild(this.content);
			this.appendChild(card);
		}
		
		const entityId = this.config.entity;
		const state = hass.states[entityId];
		const stateStr = state ? state.state : 'unavailable';
		const numberOfDays = this.config.numberofdays ? this.config.numberofdays : 14; //Number of days from today upcomming birthdays will be displayed - default 14
		
		
		var current = new Date();
		var currentMonth = current.getMonth();
		var currentDay = current.getDate();
		var currentYear = current.getFullYear();
		var currentDayTS = new Date(currentYear, currentMonth, currentDay).getTime();
		var oneDay = 24*60*60*1000;
		
		
		for(var i = 0; i < birthdayList.length; i++) {
			var obj = birthdayList[i];
			
			if ( ((obj.month-1) < currentMonth) || ( ((obj.month-1) == currentMonth) && (obj.day < currentDay) ) ) {
				// Birthday passed in current year - add one year to throw date to next birthday
				obj.ts = new Date((currentYear+1), (obj.month-1), obj.day).getTime();
				obj.aPlus = 1;
			} else {
				// Birthday to come current year
				obj.ts = new Date(currentYear, (obj.month-1), obj.day).getTime();
				obj.aPlus = 0;
			}
			
			obj.diff = Math.round( Math.abs( (currentDayTS - obj.ts)/(oneDay) ) );
			
			if ( obj.diff > numberOfDays) { obj.ts = 0; }
		}
		
		var sortertListe = birthdayList.sort((a, b) => (a.ts > b.ts) ? 1 : ((b.ts > a.ts) ? -1 : 0)); 
		var birthdayToday = "";
		var birthdayNext = "";
		
		for(var i = 0; i < sortertListe.length; i++) {
			
			var obj = sortertListe[i];
			
			if (obj.year > 0) {
				var age = "(" + (currentYear - obj.year + obj.aPlus) + " " + bdTextYears + ")";
			} else {
				var age = "";
			}
			
			var bdSymbol = "";
			if (obj.s == 1) { bdSymbol = " " + bdDeadSymbol; }
			if (obj.s == 2) { bdSymbol = " " + bdMarriedSymbol; }
			
			if (((obj.month-1) == currentMonth) && (obj.day == currentDay)) {
				
				birthdayToday = birthdayToday + "<div class='bd-wrapper bd-today'><ha-icon class='ha-icon entity on' icon='mdi:crown'></ha-icon><div class='bd-name'>" + obj.name + " " + age + bdSymbol + "</div><div class='bd-when'>" + bdTextToday + "</div></div>";
				
			} else if (obj.ts != 0) {
				
				var dbExpr = obj.diff == 1 ? bdTextTomorrow : bdTextIn + " " + obj.diff + " " + bdTextDays;
				birthdayNext = birthdayNext + "<div class='bd-wrapper'><ha-icon class='ha-icon entity' icon='mdi:calendar-clock'></ha-icon><div class='bd-name'>" + obj.name + " " + age + bdSymbol + "</div><div class='bd-when'>" + dbExpr + " (" + obj.day + "." + obj.month + ")</div></div>";
				
			}
		}
		
		
		var cardHtmlStyle = `
		<style>
			.bd-wrapper {
				padding: 5px;
				margin-bottom: 5px;
			}
			.bd-wrapper:last-child {
				OFFborder-bottom: none;
			}
			.bd-divider {
				height: 1px;
				border-bottom: 1px solid rgba(127, 127, 127, 0.7);
				margin-bottom: 5px;
			}
			.bd-today {
				font-weight: bold;
				OFFborder-bottom: 1px solid;
			}
			.bd-wrapper .ha-icon {
				display: inline-block;
				height: 20px;
				width: 20px;
				margin-left: 5px;
				margin-right: 17px;
				color: var(--paper-item-icon-color);
			}
			.bd-wrapper .ha-icon.on {
				margin-left: 5px;
				margin-right: 17px;
				color: var(--paper-item-icon-active-color);
			}
			.bd-name {
				display: inline-block;
				padding-left: 10px;
				padding-top: 2px;
			}
			.bd-none {
				color: var(--paper-item-icon-color);
			}
			.bd-when {
				display: inline-block;
				float: right;
				font-size: smaller;
				padding-top: 3px;
			}
		</style>
		`;
		
		if (!birthdayToday && !birthdayNext) {
			var cardHtmlContent = "<div class='bd-none'>" + bdTextNone + " " + numberOfDays + " " + bdTextDays + "</div>";
		} else if (!birthdayToday) {
			var cardHtmlContent = birthdayNext;
		} else if (!birthdayNext) {
			var cardHtmlContent = birthdayToday;
		} else {
			var cardHtmlContent = birthdayToday + "<div class='bd-divider'></div>" + birthdayNext;
		}
		
		this.content.innerHTML = cardHtmlStyle + cardHtmlContent;
		
	}
	
	
	
	setConfig(config) {
		this.config = config;
	}
	
// The height of your card. Home Assistant uses this to automatically distribute all cards over the available columns.
	getCardSize() {
		return 3;
	}
}

customElements.define('birthday-card', BirthdayCard);
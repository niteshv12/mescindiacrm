/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Stroke-Gap-Icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-WorldWide': '&#xe600;',
		'icon-WorldGlobe': '&#xe601;',
		'icon-Underpants': '&#xe602;',
		'icon-Tshirt': '&#xe603;',
		'icon-Trousers': '&#xe604;',
		'icon-Tie': '&#xe605;',
		'icon-TennisBall': '&#xe606;',
		'icon-Telesocpe': '&#xe607;',
		'icon-Stop': '&#xe608;',
		'icon-Starship': '&#xe609;',
		'icon-Starship2': '&#xe60a;',
		'icon-Speaker': '&#xe60b;',
		'icon-Speaker2': '&#xe60c;',
		'icon-Soccer': '&#xe60d;',
		'icon-Snikers': '&#xe60e;',
		'icon-Scisors': '&#xe60f;',
		'icon-Puzzle': '&#xe610;',
		'icon-Printer': '&#xe611;',
		'icon-Pool': '&#xe612;',
		'icon-Podium': '&#xe613;',
		'icon-Play': '&#xe614;',
		'icon-Planet': '&#xe615;',
		'icon-Pause': '&#xe616;',
		'icon-Next': '&#xe617;',
		'icon-MusicNote2': '&#xe618;',
		'icon-MusicNote': '&#xe619;',
		'icon-MusicMixer': '&#xe61a;',
		'icon-Microphone': '&#xe61b;',
		'icon-Medal': '&#xe61c;',
		'icon-ManFigure': '&#xe61d;',
		'icon-Magnet': '&#xe61e;',
		'icon-Like': '&#xe61f;',
		'icon-Hanger': '&#xe620;',
		'icon-Handicap': '&#xe621;',
		'icon-Forward': '&#xe622;',
		'icon-Footbal': '&#xe623;',
		'icon-Flag': '&#xe624;',
		'icon-FemaleFigure': '&#xe625;',
		'icon-Dislike': '&#xe626;',
		'icon-DiamondRing': '&#xe627;',
		'icon-Cup': '&#xe628;',
		'icon-Crown': '&#xe629;',
		'icon-Column': '&#xe62a;',
		'icon-Click': '&#xe62b;',
		'icon-Cassette': '&#xe62c;',
		'icon-Bomb': '&#xe62d;',
		'icon-BatteryLow': '&#xe62e;',
		'icon-BatteryFull': '&#xe62f;',
		'icon-Bascketball': '&#xe630;',
		'icon-Astronaut': '&#xe631;',
		'icon-WineGlass': '&#xe632;',
		'icon-Water': '&#xe633;',
		'icon-Wallet': '&#xe634;',
		'icon-Umbrella': '&#xe635;',
		'icon-TV': '&#xe636;',
		'icon-TeaMug': '&#xe637;',
		'icon-Tablet': '&#xe638;',
		'icon-Soda': '&#xe639;',
		'icon-SodaCan': '&#xe63a;',
		'icon-SimCard': '&#xe63b;',
		'icon-Signal': '&#xe63c;',
		'icon-Shaker': '&#xe63d;',
		'icon-Radio': '&#xe63e;',
		'icon-Pizza': '&#xe63f;',
		'icon-Phone': '&#xe640;',
		'icon-Notebook': '&#xe641;',
		'icon-Mug': '&#xe642;',
		'icon-Mastercard': '&#xe643;',
		'icon-Ipod': '&#xe644;',
		'icon-Info': '&#xe645;',
		'icon-Icecream2': '&#xe646;',
		'icon-Icecream1': '&#xe647;',
		'icon-Hourglass': '&#xe648;',
		'icon-Help': '&#xe649;',
		'icon-Goto': '&#xe64a;',
		'icon-Glasses': '&#xe64b;',
		'icon-Gameboy': '&#xe64c;',
		'icon-ForkandKnife': '&#xe64d;',
		'icon-Export': '&#xe64e;',
		'icon-Exit': '&#xe64f;',
		'icon-Espresso': '&#xe650;',
		'icon-Drop': '&#xe651;',
		'icon-Download': '&#xe652;',
		'icon-Dollars': '&#xe653;',
		'icon-Dollar': '&#xe654;',
		'icon-DesktopMonitor': '&#xe655;',
		'icon-Corkscrew': '&#xe656;',
		'icon-CoffeeToGo': '&#xe657;',
		'icon-Chart': '&#xe658;',
		'icon-ChartUp': '&#xe659;',
		'icon-ChartDown': '&#xe65a;',
		'icon-Calculator': '&#xe65b;',
		'icon-Bread': '&#xe65c;',
		'icon-Bourbon': '&#xe65d;',
		'icon-BottleofWIne': '&#xe65e;',
		'icon-Bag': '&#xe65f;',
		'icon-Arrow': '&#xe660;',
		'icon-Antenna2': '&#xe661;',
		'icon-Antenna1': '&#xe662;',
		'icon-Anchor': '&#xe663;',
		'icon-Wheelbarrow': '&#xe664;',
		'icon-Webcam': '&#xe665;',
		'icon-Unlinked': '&#xe666;',
		'icon-Truck': '&#xe667;',
		'icon-Timer': '&#xe668;',
		'icon-Time': '&#xe669;',
		'icon-StorageBox': '&#xe66a;',
		'icon-Star': '&#xe66b;',
		'icon-ShoppingCart': '&#xe66c;',
		'icon-Shield': '&#xe66d;',
		'icon-Seringe': '&#xe66e;',
		'icon-Pulse': '&#xe66f;',
		'icon-Plaster': '&#xe670;',
		'icon-Plaine': '&#xe671;',
		'icon-Pill': '&#xe672;',
		'icon-PicnicBasket': '&#xe673;',
		'icon-Phone2': '&#xe674;',
		'icon-Pencil': '&#xe675;',
		'icon-Pen': '&#xe676;',
		'icon-PaperClip': '&#xe677;',
		'icon-On-Off': '&#xe678;',
		'icon-Mouse': '&#xe679;',
		'icon-Megaphone': '&#xe67a;',
		'icon-Linked': '&#xe67b;',
		'icon-Keyboard': '&#xe67c;',
		'icon-House': '&#xe67d;',
		'icon-Heart': '&#xe67e;',
		'icon-Headset': '&#xe67f;',
		'icon-FullShoppingCart': '&#xe680;',
		'icon-FullScreen': '&#xe681;',
		'icon-Folder': '&#xe682;',
		'icon-Floppy': '&#xe683;',
		'icon-Files': '&#xe684;',
		'icon-File': '&#xe685;',
		'icon-FileBox': '&#xe686;',
		'icon-ExitFullScreen': '&#xe687;',
		'icon-EmptyBox': '&#xe688;',
		'icon-Delete': '&#xe689;',
		'icon-Controller': '&#xe68a;',
		'icon-Compass': '&#xe68b;',
		'icon-CompassTool': '&#xe68c;',
		'icon-ClipboardText': '&#xe68d;',
		'icon-ClipboardChart': '&#xe68e;',
		'icon-ChemicalGlass': '&#xe68f;',
		'icon-CD': '&#xe690;',
		'icon-Carioca': '&#xe691;',
		'icon-Car': '&#xe692;',
		'icon-Book': '&#xe693;',
		'icon-BigTruck': '&#xe694;',
		'icon-Bicycle': '&#xe695;',
		'icon-Wrench': '&#xe696;',
		'icon-Web': '&#xe697;',
		'icon-Watch': '&#xe698;',
		'icon-Volume': '&#xe699;',
		'icon-Video': '&#xe69a;',
		'icon-Users': '&#xe69b;',
		'icon-User': '&#xe69c;',
		'icon-UploadCLoud': '&#xe69d;',
		'icon-Typing': '&#xe69e;',
		'icon-Tools': '&#xe69f;',
		'icon-Tag': '&#xe6a0;',
		'icon-Speedometter': '&#xe6a1;',
		'icon-Share': '&#xe6a2;',
		'icon-Settings': '&#xe6a3;',
		'icon-Search': '&#xe6a4;',
		'icon-Screwdriver': '&#xe6a5;',
		'icon-Rolodex': '&#xe6a6;',
		'icon-Ringer': '&#xe6a7;',
		'icon-Resume': '&#xe6a8;',
		'icon-Restart': '&#xe6a9;',
		'icon-PowerOff': '&#xe6aa;',
		'icon-Pointer': '&#xe6ab;',
		'icon-Picture': '&#xe6ac;',
		'icon-OpenedLock': '&#xe6ad;',
		'icon-Notes': '&#xe6ae;',
		'icon-Mute': '&#xe6af;',
		'icon-Movie': '&#xe6b0;',
		'icon-Microphone2': '&#xe6b1;',
		'icon-Message': '&#xe6b2;',
		'icon-MessageRight': '&#xe6b3;',
		'icon-MessageLeft': '&#xe6b4;',
		'icon-Menu': '&#xe6b5;',
		'icon-Media': '&#xe6b6;',
		'icon-Mail': '&#xe6b7;',
		'icon-List': '&#xe6b8;',
		'icon-Layers': '&#xe6b9;',
		'icon-Key': '&#xe6ba;',
		'icon-Imbox': '&#xe6bb;',
		'icon-Eye': '&#xe6bc;',
		'icon-Edit': '&#xe6bd;',
		'icon-DSLRCamera': '&#xe6be;',
		'icon-DownloadCloud': '&#xe6bf;',
		'icon-CompactCamera': '&#xe6c0;',
		'icon-Cloud': '&#xe6c1;',
		'icon-ClosedLock': '&#xe6c2;',
		'icon-Chart2': '&#xe6c3;',
		'icon-Bulb': '&#xe6c4;',
		'icon-Briefcase': '&#xe6c5;',
		'icon-Blog': '&#xe6c6;',
		'icon-Agenda': '&#xe6c7;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());

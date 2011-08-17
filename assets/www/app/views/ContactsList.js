app.views.ContactsList = Ext.extend(Ext.TabPanel, {
	tabBar: {
		dock: 'bottom',
		layout: {
			pack: 'center'
		}
	},
	animation:'slide',
	fullscreen:true,
	items:[
	       {
			title:'Accueil',
			iconCls:'favorites',
			cls:'tab1',
			html:'Accueil',
	       },
	       {
			title:'Info',
			cls:'tab2',
			iconCls:'info',
			html:'Info',
		 }
	    ]
});
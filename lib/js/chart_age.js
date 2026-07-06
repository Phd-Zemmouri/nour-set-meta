const ageColumnData = [
	{ name: '10 - 19', y: 1, color: '#D8F3DC' },
	{ name: '20 - 29', y: 52, color: '#B7E4C7' },
	{ name: '30 - 39', y: 158, color: '#95D5B2' },
	{ name: '40 - 49', y: 198, color: '#74C69D' },
	{ name: '50 - 59', y: 253, color: '#52B788' },
	{ name: '60 - 69', y: 239, color: '#40916C' },
	{ name: '70 - 79', y: 161, color: '#2D6A4F' },
	{ name: '80 - 89', y: 74, color: '#1B4332' },
	{ name: '90 +', y: 13, color: '#081C15' },
]

const ageSplineData = ageColumnData.map(({ name, y }) => ({ name, y }))

const agePieData = [
	{ name: 'Young', y: 224, color: '#B7E4C7' },
	{ name: 'Mature', y: 431, color: '#52B788' },
	{ name: 'Old', y: 494, color: '#2D6A4F' },
]

const ageCategories = ageColumnData.map((x) => `${x.name} Y`)

function get_Chart_Age() {
	get_Chart_Age_A()
	get_Chart_Age_B()
	get_Chart_Age_C()
}

/* =====================================
   Chart A - Column + Spline
===================================== */
function get_Chart_Age_A() {
	Highcharts.chart({
		chart: { renderTo: 'Chart_Age_A', type: 'column' },
		title: { text: null },
		accessibility: { announceNewData: { enabled: true } },
		credits: { enabled: false },

		exporting: {
			filename: 'Age_distribution_A',
			sourceWidth: 500,
			sourceHeight: 333,
		},
		xAxis: {
			categories: ageCategories,
			labels: {
				rotation: -45,
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
			title: {
				text: 'Patients Age',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
		},

		yAxis: {
			title: {
				text: 'Cases Number',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
		},

		legend: { enabled: false },

		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> cases<br/>',
		},

		plotOptions: {
			column: {
				borderWidth: 0,
				borderRadius: 4,
				dataLabels: {
					enabled: true,
					format: '{point.y:,.0f}',
					style: { fontWeight: 'bold', fontSize: '15px' },
				},
			},

			spline: {
				lineWidth: 3,
				marker: { enabled: false },
			},
		},

		series: [
			{
				name: 'Cases',
				type: 'column',
				colorByPoint: true,
				data: ageColumnData,
			},
			{
				name: 'Trend',
				type: 'spline',
				color: '#52B788',
				data: ageSplineData,
			},
		],
	})
}

/* =====================================
   Chart B - Pie
===================================== */
function get_Chart_Age_B() {
	Highcharts.chart({
		chart: { renderTo: 'Chart_Age_B', type: 'pie' },
		title: { text: null },
		accessibility: { announceNewData: { enabled: true } },
		credits: { enabled: false },

		exporting: { filename: 'Age_distribution_B' },

		legend: {
			enabled: true,
			align: 'right',
			verticalAlign: 'middle',
			layout: 'vertical',
		},

		tooltip: {
			pointFormat: '<b>{point.name}</b>: <b>{point.y}</b> cases ({point.percentage:.1f}%)<br/>',
		},

		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				showInLegend: true,

				dataLabels: {
					enabled: true,
					distance: -45,
					format: '<b>{point.percentage:.1f}%</b>',

					style: {
						fontWeight: 'bold',
						fontSize: '14px',
						color: '#000',
						textOutline: 'none',
					},
				},
			},
		},

		series: [
			{
				name: 'Age Groups',
				type: 'pie',
				legendType: 'point',

				data: agePieData.map((item) => ({
					...item,
					name: `${item.name} : ${item.y} Cases`,
				})),
			},
		],
	})
}

/* =====================================
   Chart C - Combined
===================================== */
function get_Chart_Age_C() {
	Highcharts.chart({
		chart: {
			renderTo: 'Chart_Age_C',
			type: 'column',
		},

		title: { text: null },
		accessibility: { announceNewData: { enabled: true } },
		credits: { enabled: false },

		exporting: {
			filename: 'Age_distribution_C',
			sourceWidth: 1000,
			sourceHeight: 500,
		},

		legend: {
			enabled: true,
			align: 'right',
			verticalAlign: 'top',
			layout: 'vertical',

			itemMarginTop: 8,
			itemMarginBottom: 8,

			itemStyle: {
				fontWeight: 'bold',
				fontSize: '12px',
			},
		},

		xAxis: {
			categories: ageCategories,

			labels: {
				rotation: -45,
				style: {
					fontWeight: 'bold',
				},
			},

			title: {
				text: 'Patients Age',
				style: {
					fontWeight: 'bold',
					fontSize: '15px',
				},
			},
		},

		yAxis: {
			min: 0,
			gridLineDashStyle: 'Dash',

			title: {
				text: 'Cases Number',
				style: {
					fontWeight: 'bold',
					fontSize: '15px',
				},
			},
		},

		tooltip: {
			shared: true,
			useHTML: true,

			headerFormat: '<span style="font-size:12px;font-weight:bold">{point.key}</span><br/>',

			pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
		},

		plotOptions: {
			column: {
				borderWidth: 0,
				borderRadius: 4,

				dataLabels: {
					enabled: true,
					format: '{point.y:,.0f}',
				},
			},

			spline: {
				lineWidth: 3,
				marker: {
					enabled: true,
					radius: 4,
				},
			},

			pie: {
				allowPointSelect: true,
				cursor: 'pointer',

				// center: ['85%', '20%'],
				// size: '45%',
				// innerSize: '45%',
				center: ['90%', '25%'],
				size: '50%',
				innerSize: '30%',

				showInLegend: true,

				dataLabels: {
					enabled: true,
					distance: -22,
					format: '{point.percentage:.1f}%',

					style: {
						fontWeight: 'bold',
						fontSize: '12px',
						color: '#000',
						textOutline: 'none',
					},
				},
			},
		},

		series: [
			{
				name: 'Cases',
				type: 'column',
				colorByPoint: true,
				showInLegend: false,
				data: ageColumnData,
			},

			{
				name: 'Trend',
				type: 'spline',
				color: '#52B788',
				showInLegend: false,
				data: ageSplineData,
			},

			{
				name: 'Age Groups',
				type: 'pie',
				legendType: 'point',

				data: agePieData.map((item) => ({
					...item,
					name: `${item.name} : ${item.y}`,
				})),
			},
		],
	})
}

const lesionColumnData = [
	{ name: '01 - 10 %', y: 344, color: '#ADE8F4' },
	{ name: '11 - 20 %', y: 226, color: '#90E0EF' },
	{ name: '21 - 30 %', y: 209, color: '#48CAE4' },
	{ name: '31 - 40 %', y: 28, color: '#00B4D8' },
	{ name: '41 - 50 %', y: 207, color: '#0096C7' },
	{ name: '51 - 60 %', y: 36, color: '#0077B6' },
	{ name: '61 - 70 %', y: 32, color: '#023E8A' },
	{ name: '71 - 80 %', y: 56, color: '#03045E' },
	{ name: '81 - 90 %', y: 7, color: '#030455' },
	{ name: '91 - 100 %', y: 4, color: '#03044D' },
]

const lesionSplineData = lesionColumnData.map(({ name, y }) => ({ name, y }))

const lesionPieData = [
	{ name: '01-25 %', y: 675, color: '#90E0EF' },
	{ name: '26-50 %', y: 339, color: '#00B4D8' },
	{ name: '51-75 %', y: 112, color: '#0077B6' },
	{ name: '76-100 %', y: 23, color: '#03045E' },
]

const variantLesionData = [
	{
		name: '76–100 %',
		color: '#03045E',
		data: [
			{ name: 'Alpha', y: 0 },
			{ name: 'Beta', y: 0 },
			{ name: 'Delta', y: 0 },
			{ name: 'Lambda', y: 2 },
			{ name: 'Omicron', y: 3 },
		],
	},
	{
		name: '51–75 %',
		color: '#0077B6',
		data: [
			{ name: 'Alpha', y: 43 },
			{ name: 'Beta', y: 8 },
			{ name: 'Delta', y: 8 },
			{ name: 'Lambda', y: 9 },
			{ name: 'Omicron', y: 12 },
		],
	},
	{
		name: '26–50 %',
		color: '#00B4D8',
		data: [
			{ name: 'Alpha', y: 14 },
			{ name: 'Beta', y: 8 },
			{ name: 'Delta', y: 39 },
			{ name: 'Lambda', y: 29 },
			{ name: 'Omicron', y: 29 },
		],
	},
	{
		name: '01–25 %',
		color: '#ADE8F4',
		data: [
			{ name: 'Alpha', y: 43 },
			{ name: 'Beta', y: 83 },
			{ name: 'Delta', y: 53 },
			{ name: 'Lambda', y: 60 },
			{ name: 'Omicron', y: 56 },
		],
	},
]

function get_Chart_Lesion() {
	get_Chart_Lesion_A()
	get_Chart_Lesion_B()
	get_Chart_Lesion_C()
	get_Chart_Lesion_D()
}

/* =====================================
   Chart A - Column + Spline
===================================== */
function get_Chart_Lesion_A() {
	Highcharts.chart({
		chart: { renderTo: 'Chart_Lesion_A', type: 'column' },
		title: { text: null },
		accessibility: { announceNewData: { enabled: true } },
		credits: { enabled: false },
		exporting: {
			filename: 'Lesion_distribution_A',
			sourceWidth: 500,
			sourceHeight: 333,
		},

		xAxis: {
			type: 'category',
			labels: { rotation: -45, style: { fontWeight: 'bold', fontSize: '15px' } },
			title: {
				text: 'Lesion Rate',
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
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> patients<br/>',
		},

		plotOptions: {
			column: {
				borderWidth: 0,
				borderRadius: 4,
				dataLabels: { enabled: true, format: '{point.y:,.0f}', style: { fontWeight: 'bold', fontSize: '15px' } },
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
				data: lesionColumnData,
			},
			{
				name: 'Trend',
				type: 'spline',
				color: '#0077B6',
				data: lesionSplineData,
			},
		],
	})
}

/* =====================================
   Chart B - Pie
===================================== */
function get_Chart_Lesion_B() {
	Highcharts.chart({
		chart: { renderTo: 'Chart_Lesion_B', type: 'pie' },
		title: { text: null },
		accessibility: { announceNewData: { enabled: true } },
		credits: { enabled: false },
		exporting: { filename: 'Lesion_distribution_B' },

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
					distance: -50,
					format: '<b>{point.percentage:.1f}%</b>',
					style: {
						fontWeight: 'bold',
						fontSize: '15px',
						color: '#000',
						textOutline: 'none',
					},
				},
			},
		},

		series: [
			{
				name: 'Grouped Distribution',
				type: 'pie',
				legendType: 'point',
				data: lesionPieData.map((item) => ({
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
function get_Chart_Lesion_C() {
	Highcharts.chart({
		chart: { renderTo: 'Chart_Lesion_C', type: 'column' },
		title: { text: null },
		accessibility: { announceNewData: { enabled: true } },
		credits: { enabled: false },

		exporting: {
			filename: 'Lesion_distribution_C',
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
			type: 'category',
			labels: { rotation: -45, style: { fontWeight: 'bold' } },
			title: {
				text: 'Lesion Rate',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
		},

		yAxis: {
			min: 0,
			gridLineDashStyle: 'Dash',
			title: {
				text: 'Cases Number',
				style: { fontWeight: 'bold', fontSize: '15px' },
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
				dataLabels: { enabled: true, format: '{point.y:,.0f}' },
			},

			spline: {
				lineWidth: 3,
				marker: { enabled: true, radius: 4 },
			},

			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				center: ['85%', '25%'],
				size: '60%',
				innerSize: '30%',
				showInLegend: true,

				dataLabels: {
					enabled: true,
					distance: -25,
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
				data: lesionColumnData,
			},
			{
				name: 'Trend',
				type: 'spline',
				color: '#0077B6',
				showInLegend: false,
				data: lesionSplineData,
			},
			{
				name: 'Grouped Distribution',
				type: 'pie',
				legendType: 'point',
				data: lesionPieData,
			},
		],
	})
}

/* =====================================
   Chart D - Variant × Lesion Stacked Column
===================================== */
function get_Chart_Lesion_D() {
	Highcharts.chart({
		chart: {
			renderTo: 'Chart_Lesion_D',
			type: 'column',
		},

		title: { text: null },
		accessibility: { announceNewData: { enabled: true } },
		credits: { enabled: false },

		exporting: {
			filename: 'Lesion_distribution_D',
			sourceWidth: 900,
			sourceHeight: 500,
		},

		legend: {
			enabled: true,
			layout: 'horizontal',
			align: 'center',
			verticalAlign: 'top',
			floating: false,
			reversed: true,
			symbolRadius: 50,
			itemMarginTop: 8,
			itemMarginBottom: 8,
			itemStyle: {
				fontWeight: 'bold',
				fontSize: '13px',
			},
		},

		xAxis: {
			type: 'category',
			labels: {
				style: {
					fontWeight: 'bold',
					fontSize: '14px',
				},
			},
			lineColor: '#ccc',
			tickLength: 0,
		},

		yAxis: {
			min: 0,
			max: 100,
			// gridLineDashStyle: 'Dash',
			gridLineWidth: 0, // Remove grid lines
			title: { text: null },
			labels: { enabled: false },
		},

		tooltip: {
			shared: false,
			useHTML: true,
			headerFormat: '<span style="font-size:12px;font-weight:bold">{point.key}</span><br/>',
			pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b>{point.y} %</b><br/>',
		},

		plotOptions: {
			column: {
				stacking: 'normal',
				borderWidth: 1,
				borderColor: '#fff',
				borderRadius: 0,
				dataLabels: {
					enabled: true,
					style: {
						fontWeight: 'bold',
						fontSize: '13px',
						// color: '#fff',
						textOutline: 'none',
					},
					formatter: function () {
						return this.y > 0 ? this.y + ' %' : ''
					},
				},
			},
		},

		series: variantLesionData,
	})
}

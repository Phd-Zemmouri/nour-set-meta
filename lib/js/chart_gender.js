const genderAgeCategories = ['90 + Y', '80 - 89 Y', '70 - 79 Y', '60 - 69 Y', '50 - 59 Y', '40 - 49 Y', '30 - 39 Y', '20 - 29 Y', '10 - 19 Y']

const genderFemaleData = [-6, -43, -69, -118, -107, -74, -60, -25, 0]
const genderMaleData = [7, 31, 92, 121, 146, 124, 98, 27, 1]

const genderPieData = [
	{ name: 'Female', y: 502, color: '#ff83db' },
	{ name: 'Male', y: 647, color: '#2485d2' },
]

function get_Chart_Gender() {
	get_Chart_Gender_A()
	get_Chart_Gender_B()
	// get_Chart_Gender_C()
}

/* =====================================
   CHART A - Population Pyramid (Bar)
===================================== */
function get_Chart_Gender_A() {
	Highcharts.chart({
		chart: { renderTo: 'Chart_Gender_A', type: 'bar' },
		title: { text: null },
		credits: { enabled: false },
		legend: { enabled: false },
		exporting: { filename: 'Gender_distribution_A', sourceWidth: 850, sourceHeight: 500 },

		xAxis: [
			{
				categories: genderAgeCategories,
				title: {
					text: 'Patients Age',
					style: { fontWeight: 'bold', fontSize: '15px' },
				},
			},
		],

		yAxis: {
			title: {
				text: 'Cases Number',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
			labels: {
				formatter: function () {
					return Math.abs(this.value)
				},
			},
		},

		plotOptions: {
			series: {
				stacking: 'normal',
				dataLabels: {
					enabled: true,
					formatter: function () {
						return Math.abs(this.y)
					},
					color: 'black',
				},
			},
		},

		series: [
			{
				name: 'Female',
				color: '#ff83db',
				data: genderFemaleData,
			},
			{
				name: 'Male',
				color: '#2485d2',
				data: genderMaleData,
			},
		],
	})
}

/* =====================================
   CHART B - PIE
===================================== */
function get_Chart_Gender_B() {
	Highcharts.chart({
		chart: { renderTo: 'Chart_Gender_B', type: 'pie' },
		title: { text: null },
		credits: { enabled: false },
		legend: { enabled: false },

		exporting: {
			filename: 'Gender_distribution_B',
			sourceWidth: 300,
			sourceHeight: 300,
		},

		tooltip: {
			pointFormat: '<b>{point.name}</b>: {point.y} cases ({point.percentage:.1f}%)<br/>',
		},

		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				showInLegend: true,
				// size: '60%',
				innerSize: '30%',

				dataLabels: {
					enabled: true,
					distance: -50,
					format: '<b>{point.name}<br>{point.percentage:.1f}%</b>',
					style: {
						fontWeight: 'bold',
						fontSize: '16px',
						color: '#000',
						textOutline: 'none',
					},
				},
			},
		},

		series: [
			{
				name: 'Gender',
				type: 'pie',
				legendType: 'point',
				data: genderPieData,
			},
		],
	})
}

/* =====================================
   CHART C - MERGED (BEST VIEW)
===================================== */
function get_Chart_Gender_C0() {
	Highcharts.chart({
		chart: {
			renderTo: 'Chart_Gender_C',
			type: 'bar',
			animation: false,
		},

		title: { text: null },
		credits: { enabled: false },

		exporting: {
			filename: 'Gender_distribution_C',
			sourceWidth: 1000,
			sourceHeight: 600,
		},

		legend: {
			enabled: false, // true,
			// align: 'right',
			// verticalAlign: 'top',
			// layout: 'vertical',

			// itemStyle: {
			// 	fontWeight: 'bold',
			// 	fontSize: '12px',
			// },
		},

		xAxis: [
			{
				categories: genderAgeCategories,
				title: {
					text: 'Patients Age',
					style: { fontWeight: 'bold', fontSize: '15px' },
				},
			},
		],

		yAxis: {
			max: 250,
			title: {
				text: 'Cases Number',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
			labels: {
				formatter: function () {
					return Math.abs(this.value)
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
			series: {
				stacking: 'normal',
				dataLabels: {
					enabled: true,
					formatter: function () {
						return Math.abs(this.y)
					},
				},
			},

			pie: {
				allowPointSelect: true,
				cursor: 'pointer',

				center: ['90%', '28%'],
				size: '45%',
				innerSize: '45%',

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
				name: 'Female',
				color: '#ff83db',
				data: genderFemaleData,
			},
			{
				name: 'Male',
				color: '#2485d2',
				data: genderMaleData,
			},
			{
				type: 'pie',
				name: 'Gender Distribution',
				legendType: 'point',
				data: genderPieData,
			},
		],
	})
}

function get_Chart_Gender_C() {
	Highcharts.chart({
		chart: {
			renderTo: 'Chart_Gender_C',
			type: 'bar',
			animation: false,

			// reserve room for pie
			marginRight: 260,
		},

		title: {
			text: null,
		},

		credits: {
			enabled: false,
		},

		exporting: {
			filename: 'Gender_distribution_C',
			sourceWidth: 1000,
			sourceHeight: 600,
		},

		legend: {
			enabled: false,
		},

		xAxis: [
			{
				categories: genderAgeCategories,

				title: {
					text: 'Patients Age',
					style: {
						fontWeight: 'bold',
						fontSize: '15px',
					},
				},
			},
		],

		yAxis: {
			max: 250,

			title: {
				text: 'Cases Number',
				style: {
					fontWeight: 'bold',
					fontSize: '15px',
				},
			},

			labels: {
				formatter: function () {
					return Math.abs(this.value)
				},
			},
		},

		tooltip: {
			shared: true,
			useHTML: true,

			headerFormat: '<span style="font-size:12px;font-weight:bold">{point.key}</span><br/>',

			pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{Math.abs(point.y)}</b><br/>',
		},

		plotOptions: {
			series: {
				stacking: 'normal',
				animation: false,
				turboThreshold: 0,

				dataLabels: {
					enabled: true,

					formatter: function () {
						return Math.abs(this.y)
					},
				},
			},

			pie: {
				animation: false,
				allowPointSelect: true,
				cursor: 'pointer',
				zIndex: 10,

				// move pie to reserved area
				center: ['88%', '28%'],
				size: '34%',
				innerSize: '45%',

				showInLegend: true,

				dataLabels: {
					enabled: true,
					distance: -20,
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
				name: 'Female',
				color: '#ff83db',
				data: genderFemaleData,
				zIndex: 1,
			},

			{
				name: 'Male',
				color: '#2485d2',
				data: genderMaleData,
				zIndex: 1,
			},

			{
				type: 'pie',
				name: 'Gender Distribution',
				legendType: 'point',
				zIndex: 10,

				data: genderPieData.map((item) => ({
					...item,
					name: `${item.name} : ${item.y}`,
				})),
			},
		],
	})
}

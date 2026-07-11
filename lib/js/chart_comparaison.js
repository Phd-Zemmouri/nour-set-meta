var data = []

function get_Chart_Comparaison() {
	var myData = data
	get_Chart_Comparaison_A(myData)
	get_Chart_Comparaison_B(myData)
}
function get_Chart_Comparaison_A() {
	var y_lib = ['AFRI-COVID', 'NCCID*', 'MASHHAD', 'MOSMED', 'SARI', 'ZENODO', 'MEDRXIV', 'SAO PAULO', 'COHEN*', 'RADIOPEDIA']

	//prepare data
	var categories = [
		'2020-01',
		'2020-02',
		'2020-03',
		'2020-04',
		'2020-05',
		'2020-06',
		'2020-07',
		'2020-08',
		'2020-09',
		'2020-10',
		'2020-11',
		'2020-12',
		'2021-01',
		'2021-02',
		'2021-03',
		'2021-04',
		'2021-05',
		'2021-06',
		'2021-07',
		'2021-08',
		'2021-09',
		'2021-10',
		'2021-11',
		'2021-12',
		'2022-01',
		'2022-02',
		'2022-04',
		'2022-05',
		'2022-06',
		'2022-07',
		'2022-08',
		'2022-09',
		'2022-10',
		'2022-11',
		'2022-12',
	]

	series = [
		{
			name: 'AFRI-COVID',
			color: '#386641',
			data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		},
		{
			name: 'NCCID',
			color: '#bc3908',
			dashStyle: 'ShortDashDot',
			data: [null, null, null, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		},
		{
			name: 'MASHHAD',
			color: '#6a994e',
			data: [null, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		},
		{ name: 'MOSMED', color: '#a7c957', data: [null, 4, 4, 4] },
		{ name: 'SARI', color: '#219ebc', data: [null, 5, 5, 5] },
		{ name: 'ZENODO', color: '#126782', data: [null, null, 6, 6] },
		{ name: 'MEDRXIV', color: '#023047', data: [null, null, 7, 7] },
		{ name: 'SAO PAULO', color: '#f6aa1c', data: [null, null, 8, 8] },
		{
			name: 'COHEN',
			color: '#941b0c',
			dashStyle: 'Dash',
			data: [null, null, null, null, null, null, null, null, 9, 9],
		},
		{
			name: 'RADIOPEDIA',
			color: '#220901',
			data: [null, null, null, null, null, null, null, null, null, null, null, 10, 10],
		},
	]

	//Chart options
	const MyOptions = {
		chart: {
			renderTo: 'Chart_Comparaison_A',
			type: 'line',
		},
		title: {
			text: null, //  'Datasets by Time Interval',
			// style: { fontWeight: 'bold', fontSize: '20px' },
		},
		credits: {
			text: ' ',
		},
		legend: {
			enabled: false,
		},
		// exporting: {
		// 	filename: 'Dataset_time',
		// 	sourceWidth: 700,
		// 	sourceHeight: 500,
		// },
		xAxis: {
			categories: categories,
			title: {
				text: 'Months',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
			labels: {
				enabled: true,
				rotation: -45,
				formatter: function () {
					if (this.value == '2020-05') return '<span style="font-weight:bold;font-size:10px">Beta</span><br>'
					if (this.value == '2020-10') return '<span style="font-weight:bold;font-size:10px">Delta</span><br>'
					if (this.value == '2020-12') return '<span style="font-weight:bold;font-size:10px">Lambda</span><br>'
					if (this.value == '2021-11') return '<span style="font-weight:bold;font-size:10px">Omicron</span><br>'

					var year = this.value.substring(0, 4)
					var month = this.value.substring(5, 7)
					return month == '01' ? '<span style="font-weight:bold;font-size:10px">' + year + '</span><br>' : month
				},
				//style: { fontWeight: 'bold' },
			},
		},
		yAxis: {
			title: {
				text: 'Datasets',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
			tickInterval: 1,
			// max:10,
			// categories:y_lib,
			labels: {
				formatter: function () {
					return y_lib[this.value - 1]
				},
				// style: { fontWeight: 'bold' }
			},
		},
		series: series,
		plotOptions: {
			series: {
				// label: {
				//     connectorAllowed: true
				// },
				marker: {
					enabled: false,
				},
				lineWidth: 10,
			},
		},
	}
	const chart = new Highcharts.Chart(MyOptions)
}

function get_Chart_Comparaison_B() {
	const MyOptions = {
		chart: {
			renderTo: 'Chart_Comparaison_B',
			type: 'column',
		},
		title: {
			text: null, //  'Datasets by Number of Studies/Patients',
			// style: { fontWeight: 'bold', fontSize: '20px' },
		},
		accessibility: {
			announceNewData: {
				enabled: true,
			},
		},
		xAxis: {
			type: 'category',
			labels: {
				rotation: -45,
				style: { fontWeight: 'bold', fontSize: '10px' },
			},
			// title: {
			//     text: 'Dataset',
			//     style: { fontWeight: 'bold', fontSize: '12px' }
			// }
		},
		yAxis: {
			title: {
				text: 'Studies/Patients',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
		},
		credits: {
			text: ' ',
		},
		legend: {
			enabled: false,
		},
		exporting: {
			filename: 'Dataset_patients',
			sourceWidth: 500,
			sourceHeight: 333,
		},
		plotOptions: {
			series: {
				borderWidth: 0,
				dataLabels: {
					enabled: true,
					format: '{point.y:,.0f}',
					style: { fontWeight: 'bold', fontSize: '15px' },
				},
			},
		},

		tooltip: {
			headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
			pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:f}</b> patients<br/>',
		},

		series: [
			{
				name: 'Datasets',
				colorByPoint: true,
				data: [
					{ name: 'ZENODO', y: 20, color: '#126782' },
					{ name: 'RADIOPEDIA', y: 100, color: '#220901' },
					{ name: 'SAO PAULO', y: 120, color: '#f6aa1c' },
					{ name: 'MEDRXIV', y: 216, color: '#023047' },
					{ name: 'SARI', y: 377, color: '#219ebc' },
					{ name: 'COHEN', y: 661, color: '#941b0c' },
					{ name: 'MASHHAD', y: 1000, color: '#6a994e' },
					{ name: 'MOSMED', y: 1110, color: '#a7c957' },
					{ name: 'AFRI-COVID', y: 2495, color: '#386641' },
					{ name: 'NCCID', y: 2980, color: '#bc3908' },
				],
			},
		],
	}
	const chart = new Highcharts.Chart(MyOptions)
}

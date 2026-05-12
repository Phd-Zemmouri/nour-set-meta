var data = []

function get_Chart_Age() {
	var myData = data
	get_Chart_Age_A(myData)
	get_Chart_Age_B(myData)
}
function get_Chart_Age_A() {
	var data = [
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
	var categories = ['10 - 19 Year', '20 - 29 Year', '30 - 39 Year', '40 - 49 Year', '50 - 59 Year', '60 - 69 Year', '70 - 79 Year', '80 - 89 Year', '90 + Year']
	const MyOptions = {
		chart: {
			renderTo: 'Chart_Age_A',
			type: 'column',
		},
		title: {
			text: null, //'Age distribution (A)',
			//   style: { fontWeight: 'bold', fontSize: '20px' },
		},
		accessibility: {
			announceNewData: {
				enabled: true,
			},
		},
		xAxis: {
			title: {
				text: 'Patients Age',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
			categories: categories,
		},
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
		credits: {
			text: ' ',
		},
		legend: {
			enabled: false,
		},
		exporting: {
			filename: 'Age_distribution_A',
		},
		plotOptions: {
			series: {
				borderWidth: 0,
				dataLabels: {
					enabled: true,
					format: '{point.y:,.0f}',
				},
			},
		},
		series: [
			{
				name: 'Age',
				type: 'column',
				colorByPoint: true,
				data: data,
			},
			{
				name: 'Age',
				type: 'spline',
				color: '#52B788',
				data: data,
			},
		],
	}
	const chart = new Highcharts.Chart(MyOptions)
}

function get_Chart_Age_B() {
	const MyOptions = {
		chart: {
			renderTo: 'Chart_Age_B',
			type: 'pie',
		},
		title: {
			text: null, //'Age distribution (B)',
			//   style: { fontWeight: 'bold', fontSize: '20px' },
		},
		accessibility: {
			announceNewData: {
				enabled: true,
			},
		},
		// xAxis: {
		//     type: 'category',
		//     labels: { style: { fontWeight: 'bold' } }
		//     // title: {
		//     //     text: 'Dataset',
		//     //     style: { fontWeight: 'bold', fontSize: '12px' }
		//     // }
		// },
		// yAxis: [{
		//     // Slice yAxis
		//     title: {
		//         text: 'Slice Number',
		//         // style: {
		//         //     color: Highcharts.getOptions().colors[2]
		//         // }
		//     },

		// },
		// {
		//     // Size yAxis
		//     labels: {
		//         format: '{value:,.0f} Gb',
		//     },
		//     title: {
		//         text: 'Size of Storage',
		//         // style: {
		//         //     color: Highcharts.getOptions().colors[0]
		//         // }
		//     },
		//     opposite: true
		//     // labels: {
		//     //     format: '{value} mm',
		//     //     style: {
		//     //         color: Highcharts.getOptions().colors[0]
		//     //     }
		//     // }

		// },],
		credits: {
			text: ' ',
		},
		legend: {
			enabled: true,
		},
		exporting: {
			filename: 'Age_distribution_B',
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					distance: -60,
					enabled: true,
					format: '<b>{point.name} :<br>{point.y} cases<br>{point.percentage:.1f} %</b>',
					style: { fontWeight: 'bold', fontSize: '15px' },
					color: 'black',
				},
			},
		},

		// tooltip: {
		//     headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		//     pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:f}</b><br/>'
		// },

		series: [
			{
				name: 'Age Stage',
				colorByPoint: true,
				data: [
					{ name: 'Young', y: 224, color: '#B7E4C7' },
					{ name: 'Mature', y: 431, color: '#52B788' },
					{ name: 'Old', y: 494, color: '#2D6A4F' },
				],
			},
		],
	}

	const chart = new Highcharts.Chart(MyOptions)
}

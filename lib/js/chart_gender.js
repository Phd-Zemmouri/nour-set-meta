function get_Chart_Gender() {
	var myData = data
	get_Chart_Gender_A(myData)
	get_Chart_Gender_B(myData)
}
function get_Chart_Gender_A() {
	const MyOptions = {
		chart: {
			renderTo: 'Chart_Gender_A',
			type: 'bar',
		},
		title: {
			text: null, // 'Gender distribution (A)',
			//   style: { fontWeight: 'bold', fontSize: '20px' },
		},
		// accessibility: {
		//     announceNewData: {
		//         enabled: true
		//     }
		// },

		xAxis: [
			{
				title: {
					text: 'Patients Age',
					style: { fontWeight: 'bold', fontSize: '15px' },
				},
				categories: ['90 + Year', '80 - 90 Year', '70 - 80 Year', '60 - 70 Year', '50 - 60 Year', '40 - 50 Year', '30 - 40 Year', '20 - 30 Year', '10 - 20 Year'],
				// reversed: false,
				// labels: {
				//     step: 1
				// },
				// accessibility: {
				//     description: 'Slice Number'
				// }
			},
			// , { // mirror axis on right side
			//     opposite: true,
			//     reversed: false,
			//     // categories: categories,
			//     linkedTo: 0,
			//     labels: {
			//         step: 1
			//     },
			//     accessibility: {
			//         description: 'Size Storage'
			//     }
			// }
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
			// accessibility: {
			//     description: 'Cases Number',
			//     rangeDescription: 'Range: 0 to 5%'
			// }
		},
		credits: {
			text: ' ',
		},
		// legend: {
		//     enabled: false
		// },
		exporting: {
			filename: 'Sexe_distribution_A',
		},
		plotOptions: {
			series: {
				stacking: 'normal',
				dataLabels: {
					enabled: true,
					// format: '{point.y:,.0f}',
					formatter: function () {
						return Math.abs(this.y)
					},
					color: 'black',
				},
			},
		},

		// tooltip: {
		//     formatter: function () {
		//         return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
		//             'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
		//     }
		// },

		series: [
			{
				name: 'Female',
				color: '#ff83db',
				data: [
					{ name: '90 +', y: -6 },
					{ name: '80 - 89', y: -43 },
					{ name: '70 - 79', y: -69 },
					{ name: '60 - 69', y: -118 },
					{ name: '50 - 59', y: -107 },
					{ name: '40 - 49', y: -74 },
					{ name: '30 - 39', y: -60 },
					{ name: '20 - 29', y: -25 },
					{ name: '10 - 19', y: 0 },
				],
			},
			{
				name: 'Male',
				color: '#2485d2',
				data: [
					{ name: '90 +', y: 7 },
					{ name: '80 - 89', y: 31 },
					{ name: '70 - 79', y: 92 },
					{ name: '60 - 69', y: 121 },
					{ name: '50 - 59', y: 146 },
					{ name: '40 - 49', y: 124 },
					{ name: '30 - 39', y: 98 },
					{ name: '20 - 29', y: 27 },
					{ name: '10 - 19', y: 1 },
				],
			},
		],
	}
	const chart = new Highcharts.Chart(MyOptions)
}

function get_Chart_Gender_B() {
	const MyOptions = {
		chart: {
			renderTo: 'Chart_Gender_B',
			type: 'pie',
		},
		title: {
			text: null, // 'Gender distribution (B)',
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
			filename: 'Sexe_distribution_B',
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
				name: 'Gender',
				colorByPoint: true,
				data: [
					{ name: 'Female', color: '#ff83db', y: 502 },
					{ name: 'Male', color: '#2485d2', y: 647 },
				],
			},
		],
	}
	const chart = new Highcharts.Chart(MyOptions)
}

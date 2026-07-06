function get_Chart_Descriptive() {
	const MyOptions = {
		chart: { renderTo: 'Descriptive_Statistics', type: 'boxplot' },
		title: {
			text: null, // 'Descriptive Statistics',
			//   style: { fontWeight: 'bold', fontSize: '20px' },
		},
		accessibility: {
			announceNewData: {
				enabled: true,
			},
		},

		credits: {
			text: ' ',
		},
		legend: {
			enabled: false,
		},
		exporting: {
			filename: 'Descriptive_statistics',
			sourceWidth: 500,
			sourceHeight: 333,
		},
		xAxis: {
			categories: ['Lesion', 'Age'],
			labels: { style: { fontWeight: 'bold', fontSize: '15px' } },
		},

		yAxis: [
			{
				title: {
					text: 'Lesion Rate',
					style: { fontWeight: 'bold', fontSize: '15px' },
				},
				labels: {
					formatter: function () {
						return this.value + ' %'
					},
				},
				max: 105,
				min: 0,
				startOnTick: false,
				endOnTick: false,
			},
			{
				title: {
					text: 'Age (Year)',
					style: { fontWeight: 'bold', fontSize: '15px' },
				},
				labels: {
					formatter: function () {
						return this.value + ' Y'
					},
				},
				max: 105,
				min: 0,
				startOnTick: false,
				endOnTick: false,
				opposite: true,
			},
		],
		plotOptions: {
			boxplot: {
				lineWidth: 2,
				stemDashStyle: 'dot',
				stemWidth: 2,
				/*    fillColor: '#F0F0E0',
							 medianColor: '#0C5DA5',
							  medianWidth: 3,
							  stemColor: '#A63400',
							  whiskerColor: '#3D9200',
							  whiskerLength: '20%',
							  whiskerWidth: 3 */
			},
		},

		// tooltip: {
		//     headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		//     pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:f}</b><br/>'
		// },

		series: [
			{
				data: [
					{
						name: 'Lesion',
						low: 1,
						high: 99,
						median: 25,
						q1: 10,
						q3: 40,
						color: '#0077B6',
						fillColor: '#00B4D8',
					},
					{
						name: 'Age',
						low: 19,
						high: 100,
						median: 57,
						q1: 44,
						q3: 69,
						color: '#1B4332',
						fillColor: '#95D5B2',
					},
				],
			},
		],
	}

	const chart = new Highcharts.Chart(MyOptions)
}

const data_Variant = [
	{ month: '2020-01', cases: 0, variant: 'SARS-CoV-2' },
	{ month: '2020-02', cases: 1, variant: 'SARS-CoV-2' },
	{ month: '2020-03', cases: 715, variant: 'SARS-CoV-2' },
	{ month: '2020-04', cases: 3290, variant: 'SARS-CoV-2|Alpha' },
	{ month: '2020-05', cases: 5388, variant: 'Alpha' },
	{ month: '2020-06', cases: 4513, variant: 'Alpha|Beta' },
	{ month: '2020-07', cases: 16487, variant: 'Beta' },
	{ month: '2020-08', cases: 14100, variant: 'Beta' },
	{ month: '2020-09', cases: 7036, variant: 'Beta' },
	{ month: '2020-10', cases: 6412, variant: 'Beta|Delta' },
	{ month: '2020-11', cases: 25257, variant: 'Delta' },
	{ month: '2020-12', cases: 16411, variant: 'Delta' },
	{ month: '2021-01', cases: 7729, variant: 'Delta' },
	{ month: '2021-02', cases: 5753, variant: 'Delta' },
	{ month: '2021-03', cases: 4100, variant: 'Delta|Lambda' },
	{ month: '2021-04', cases: 4916, variant: 'Lambda' },
	{ month: '2021-05', cases: 6805, variant: 'Lambda' },
	{ month: '2021-06', cases: 10713, variant: 'Lambda' },
	{ month: '2021-07', cases: 31766, variant: 'Lambda' },
	{ month: '2021-08', cases: 24688, variant: 'Lambda' },
	{ month: '2021-09', cases: 7279, variant: 'Lambda' },
	{ month: '2021-10', cases: 3093, variant: 'Lambda' },
	{ month: '2021-11', cases: 4079, variant: 'Lambda|Omicron' },
	{ month: '2021-12', cases: 7901, variant: 'Omicron' },
	{ month: '2022-01', cases: 33685, variant: 'Omicron' },
	{ month: '2022-02', cases: 12819, variant: 'Omicron' },
	{ month: '2022-03', cases: 735, variant: 'Omicron' },
	{ month: '2022-04', cases: 109, variant: 'Omicron' },
	{ month: '2022-05', cases: 104, variant: 'Omicron' },
	{ month: '2022-06', cases: 203, variant: 'Omicron' },
	{ month: '2022-07', cases: 1367, variant: 'Omicron' },
	{ month: '2022-08', cases: 2850, variant: 'Omicron' },
	{ month: '2022-09', cases: 369, variant: 'Omicron' },
	{ month: '2022-10', cases: 165, variant: 'Omicron' },
	{ month: '2022-11', cases: 252, variant: 'Omicron' },
	{ month: '2022-12', cases: 138, variant: 'Omicron' },
	{ month: '2023-01', cases: 150, variant: 'Omicron' },
	{ month: '2023-02', cases: 63, variant: 'Omicron' },
]

const variants = [
	{ name: 'SARS-CoV-2', month: '2020-01', color: '#8F0000' },
	{ name: 'Alpha', month: '2020-04', color: '#B80000' },
	{ name: 'Beta', month: '2020-06', color: '#E00000' },
	{ name: 'Gamma', month: '2020-00', color: '#FF0000' },
	{ name: 'Delta', month: '2020-10', color: '#FF3333' },
	{ name: 'Lambda', month: '2021-03', color: '#FF5C5C' },
	{ name: 'Omicron', month: '2021-11', color: '#FF8585' },
]

function get_Chart_Variant() {
	get_Chart_Variant_A(data_Variant)
	get_Chart_Variant_B(data_Variant)
	get_Chart_Variant_C(data_Variant)
}

function get_Chart_Variant_A(data) {
	let categories = data.map((ele) => ele.month).sort()
	let series = variants.map((variant) => {
		// Methode 1
		const { month, ...new_element } = variant // exlures month
		new_element.data = data.map(function (item) {
			return item.variant.includes(variant.name) ? item.cases : null
		})

		// // Methode 2
		// const { month, ...new_element } = {
		//   ...variant,
		//   ...{
		//     data: data.map(function (item) {
		//       return item.variant.includes(variant.name) ? item.cases : null;
		//     }),
		//   },
		// };
		return new_element
		// // Methode 3
		// return {
		//   name: variant.name,
		//   color: variant.color,
		//   data: data.map(function (item) {
		//     return item.variant.includes(variant.name) ? item.cases : null;
		//   }),
		// };
	})

	const MyOptions = {
		chart: {
			renderTo: 'Chart_Variant_A',
			type: 'areaspline',
		},
		// title: {
		//   text: 'Monthly confirmed cases per Variant',
		//   style: { fontWeight: 'bold', fontSize: '20px' },
		// },
		title: {
			text: '',
			style: { fontSize: '0px' },
		},
		xAxis: {
			categories: categories,
			labels: {
				enabled: true,
				rotation: -90,
				formatter: function () {
					let month = this.value
					let variant = variants.find((ele) => ele.month == month)

					if (variant && variant.name) return `<span style="color:${variant.color};font-weight:bold;font-size:12px">${variant.name}</span><br>`

					let year
					;[year, month] = month.split('-')

					if (month == '01') return `<span style="font-weight:bold;font-size:11px">${year}</span><br>`

					return `<span style="font-size:10px">${month}</span><br>`
				},
				style: { fontWeight: 'bold' },
			},
		},
		yAxis: {
			title: {
				text: 'New Cases',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
		},
		credits: {
			text: ' ',
		},
		legend: {
			enabled: true,
			//   itemWidth: 130,
		},
		exporting: {
			enabled: true,
			filename: 'Variant_distribution_A',
			sourceWidth: 700,
			//   sourceHeight: 500,
		},
		plotOptions: {
			series: {
				borderWidth: 0,
				marker: false,
				dataLabels: {
					enabled: true,
					formatter: function () {
						const pinnacles = ['2020-05', '2020-07', '2020-11', '2021-07', '2022-01', '2022-08']
						if (pinnacles.includes(this.key)) return this.y.toLocaleString('en-US').replace(',', ' ')
						return ''
					},
				},
			},
		},
		series: series,
	}
	const chart = new Highcharts.Chart(MyOptions)
}

function get_Chart_Variant_B(data) {
	const chart_data = variants.map((variant) => {
		const { month, ...new_element } = variant // exlures month
		new_element['y'] = data.filter((ele) => ele.variant.endsWith(variant.name)).reduce((sum, ele) => sum + ele.cases, 0)

		return new_element
	})
	const MyOptions = {
		chart: {
			renderTo: 'Chart_Variant_B',
			type: 'pie',
		},
		// title: {
		//   text: 'Variants Cases distribution',
		//   style: { fontWeight: 'bold', fontSize: '20px' },
		// },
		title: {
			text: '',
			style: { fontSize: '0px' },
		},
		credits: {
			text: ' ',
		},
		legend: {
			enabled: true,
			//   labelFormat: '{name} {percentage:.0f} %',
		},
		exporting: {
			enabled: true,
			filename: 'Variant_distribution_B',
			sourceWidth: 600,
			sourceHeight: 500,
		},
		plotOptions: {
			pie: {
				data: chart_data,
				colorByPoint: true,
				shadow: false,
				// borderWidth: 0,
				size: '80%',
			},
		},
		series: [
			{
				dataLabels: {
					color: 'black',
					style: {
						fontWeight: 'bold',
						fontSize: '18px',
						textOutline: false,
					},
					distance: -50,

					formatter: function () {
						if (this.percentage > 10) return `${this.key}<br>${Math.round(this.percentage)} %`
					},
				},
			},
			{
				dataLabels: {
					softConnector: false,
					connectorWidth: 1,
					distance: 20,
					formatter: function () {
						if (this.percentage <= 10) return `<span style='font-weight:bold; fontSize:15px; color:${this.color}'>${this.key} : ${Math.round(this.percentage)} %</span>`
					},
				},
			},
		],
	}

	const chart = new Highcharts.Chart(MyOptions)
}

function get_Chart_Variant_C(data) {
	let categories = data.map((ele) => ele.month).sort()
	let series = variants.map((variant) => {
		// Methode 1
		const { month, ...new_element } = variant // exlures month
		new_element.data = data.map(function (item) {
			return item.variant.includes(variant.name) ? item.cases : null
		})

		// // Methode 2
		// const { month, ...new_element } = {
		//   ...variant,
		//   ...{
		//     data: data.map(function (item) {
		//       return item.variant.includes(variant.name) ? item.cases : null;
		//     }),
		//   },
		// };
		return new_element
		// // Methode 3
		// return {
		//   name: variant.name,
		//   color: variant.color,
		//   data: data.map(function (item) {
		//     return item.variant.includes(variant.name) ? item.cases : null;
		//   }),
		// };
	})

	const MyOptions = {
		chart: {
			renderTo: 'Chart_Variant_C',
			type: 'areaspline',
		},
		// title: {
		//   text: 'Monthly confirmed cases per Variant',
		//   style: { fontWeight: 'bold', fontSize: '20px' },
		// },
		title: {
			text: '',
			style: { fontSize: '0px' },
		},
		xAxis: {
			categories: categories,
			labels: {
				enabled: true,
				rotation: -90,
				formatter: function () {
					let month = this.value
					let variant = variants.find((ele) => ele.month == month)

					if (variant && variant.name) return `<span style="color:${variant.color};font-weight:bold;font-size:12px">${variant.name}</span><br>`

					let year
					;[year, month] = month.split('-')

					if (month == '01') return `<span style="font-weight:bold;font-size:11px">${year}</span><br>`

					return `<span style="font-size:10px">${month}</span><br>`
				},
				style: { fontWeight: 'bold' },
			},
		},
		yAxis: {
			title: {
				text: 'New Cases',
				style: { fontWeight: 'bold', fontSize: '15px' },
			},
		},
		credits: {
			text: ' ',
		},
		legend: {
			enabled: true,
			//   itemWidth: 130,
		},
		exporting: {
			enabled: true,
			filename: 'Variant_distribution_A',
			sourceWidth: 700,
			//   sourceHeight: 500,
		},
		plotOptions: {
			series: {
				borderWidth: 0,
				marker: false,
				dataLabels: {
					enabled: true,
					formatter: function () {
						const pinnacles = ['2020-05', '2020-07', '2020-11', '2021-07', '2022-01', '2022-08']
						if (pinnacles.includes(this.key)) return this.y.toLocaleString('en-US').replace(',', ' ')
						return ''
					},
				},
			},
		},
		series: series,
	}
	const chart = new Highcharts.Chart(MyOptions)
}

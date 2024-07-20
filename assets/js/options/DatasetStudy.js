import { Datasets as colors } from '../colors'
import { Datasets } from '../categories'

const data = {
	ZENODO: 20,
	RADIOPEDIA: 100,
	'SAO PAULO': 120,
	MEDRXIV: 216,
	SARI: 377,
	COHEN: 661,
	MASHHAD: 1000,
	MOSMED: 1110,
	'AFRI-COVID': 2495,
	NCCID: 2980,
}

const seriesData = Datasets.map((dataset) => ({
	name: dataset,
	color: colors[dataset],
	y: data[dataset] || null,
})).sort((a, b) => a.y - b.y)

const DatasetStudy = {
	chart: {
		type: 'column',
	},
	title: {
		text: 'Datasets by Number of Studies/Patients',
		style: { fontWeight: 'bold', fontSize: '20px' },
	},
	accessibility: {
		announceNewData: {
			enabled: true,
		},
	},
	xAxis: {
		type: 'category',
		labels: { style: { fontWeight: 'bold' } },
	},
	yAxis: {
		title: {
			text: 'Studies/Patients',
			style: { fontWeight: 'bold', fontSize: '15px' },
		},
	},
	credits: {
		text: '',
		href: 'https://github.com/m-zemmouri/nour-set-meta',
	},
	legend: {
		enabled: false,
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
	tooltip: {
		headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:f}</b> patients<br/>',
	},
	series: [
		{
			name: 'Datasets',
			colorByPoint: true,
			data: seriesData,
		},
	],
}

export default DatasetStudy

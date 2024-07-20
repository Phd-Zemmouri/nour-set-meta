import { Datasets as colors } from '../colors'
import { Months, Datasets } from '../categories'

const data = {
	'AFRI-COVID': '2020-01 → 2022-12',
	NCCID: '2020-05 → 2022-10',
	MASHHAD: '2020-03 → 2021-01',
	MOSMED: '2020-03 → 2020-05',
	SARI: '2020-03 → 2020-05',
	ZENODO: '2020-04 → 2020-05',
	MEDRXIV: '2020-04 → 2020-05',
	'SAO PAULO': '2020-04 → 2020-05',
	COHEN: '2020-10 → 2020-11',
	RADIOPEDIA: '2021-01 → 2021-02',
}

function getElementData(dataset, index) {
	const [start, end] = data[dataset].split(' → ')

	return {
		name: dataset,
		color: colors[dataset],
		data: Months.map((month) => (month < start || month > end ? null : index + 1)),
	}
}
const seriesData = Datasets.map((dataset, index) => getElementData(dataset, index))

const DatasetTime = {
	chart: {
		type: 'line',
	},
	title: {
		text: 'Datasets by Time Interval',
		style: { fontWeight: 'bold', fontSize: '20px' },
	},
	credits: {
		text: '',
		href: 'https://github.com/m-zemmouri/nour-set-meta',
	},
	xAxis: {
		categories: Months,
		title: {
			text: 'Months',
			style: { fontWeight: 'bold', fontSize: '15px' },
		},
		labels: {
			enabled: true,
			rotation: -90,
			formatter: function () {
				if (this.value === '2020-05') return '<span style="font-weight:bold;font-size:12px">Beta</span><br>'
				if (this.value === '2020-10') return '<span style="font-weight:bold;font-size:12px">Delta</span><br>'
				if (this.value === '2020-12') return '<span style="font-weight:bold;font-size:12px">Lambda</span><br>'
				if (this.value === '2021-11') return '<span style="font-weight:bold;font-size:12px">Omicron</span><br>'

				const [year, month] = this.value.split('-')
				return month === '01' ? `<span style="font-weight:bold;font-size:12px">${year}</span><br>` : month
			},
			// style: { fontWeight: 'bold' },
		},
	},
	yAxis: {
		title: {
			text: 'Datasets',
			style: { fontWeight: 'bold', fontSize: '15px' },
		},
		tickInterval: 1,
		labels: {
			formatter: function () {
				return Datasets[this.value - 1]
			},
		},
	},
	legend: {
		enabled: false,
	},
	series: seriesData,
	plotOptions: {
		series: {
			marker: {
				enabled: false,
			},
			lineWidth: 10,
		},
	},
}

export default DatasetTime

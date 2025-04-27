const countryData = [
  {
    value: '2',
    label: 'United States',
    image: {uri: 'https://flagcdn.com/w320/us.png'},
  },
  {value: '3', label: 'Japan', image: {uri: 'https://flagcdn.com/w320/jp.png'}},
  {
    value: '4',
    label: 'Germany',
    image: {uri: 'https://flagcdn.com/w320/de.png'},
  },
  {
    value: '5',
    label: 'Australia',
    image: {uri: 'https://flagcdn.com/w320/au.png'},
  },
  {
    value: '6',
    label: 'United Kingdom',
    image: {uri: 'https://flagcdn.com/w320/gb.png'},
  },
  {
    value: '7',
    label: 'Canada',
    image: {uri: 'https://flagcdn.com/w320/ca.png'},
  },
  {
    value: '8',
    label: 'South Korea',
    image: {uri: 'https://flagcdn.com/w320/kr.png'},
  },
  {
    value: '9',
    label: 'France',
    image: {uri: 'https://flagcdn.com/w320/fr.png'},
  },
  {
    value: '10',
    label: 'India',
    image: {uri: 'https://flagcdn.com/w320/in.png'},
  },
  {
    value: '11',
    label: 'China',
    image: {uri: 'https://flagcdn.com/w320/cn.png'},
  },
  {
    value: '12',
    label: 'Brazil',
    image: {uri: 'https://flagcdn.com/w320/br.png'},
  },
  {
    value: '13',
    label: 'Russia',
    image: {uri: 'https://flagcdn.com/w320/ru.png'},
  },
  {
    value: '14',
    label: 'Mexico',
    image: {uri: 'https://flagcdn.com/w320/mx.png'},
  },
  {
    value: '15',
    label: 'Italy',
    image: {uri: 'https://flagcdn.com/w320/it.png'},
  },
  {
    value: '16',
    label: 'Spain',
    image: {uri: 'https://flagcdn.com/w320/es.png'},
  },
  {
    value: '17',
    label: 'Netherlands',
    image: {uri: 'https://flagcdn.com/w320/nl.png'},
  },
  {
    value: '18',
    label: 'Sweden',
    image: {uri: 'https://flagcdn.com/w320/se.png'},
  },
  {
    value: '19',
    label: 'Switzerland',
    image: {uri: 'https://flagcdn.com/w320/ch.png'},
  },
  {
    value: '20',
    label: 'Norway',
    image: {uri: 'https://flagcdn.com/w320/no.png'},
  },
  {
    value: '21',
    label: 'Denmark',
    image: {uri: 'https://flagcdn.com/w320/dk.png'},
  },
  {
    value: '22',
    label: 'Finland',
    image: {uri: 'https://flagcdn.com/w320/fi.png'},
  },
  {
    value: '23',
    label: 'New Zealand',
    image: {uri: 'https://flagcdn.com/w320/nz.png'},
  },
  {
    value: '24',
    label: 'Argentina',
    image: {uri: 'https://flagcdn.com/w320/ar.png'},
  },
  {
    value: '25',
    label: 'South Africa',
    image: {uri: 'https://flagcdn.com/w320/za.png'},
  },
  {
    value: '26',
    label: 'Thailand',
    image: {uri: 'https://flagcdn.com/w320/th.png'},
  },
  {
    value: '27',
    label: 'Malaysia',
    image: {uri: 'https://flagcdn.com/w320/my.png'},
  },
  {
    value: '28',
    label: 'Philippines',
    image: {uri: 'https://flagcdn.com/w320/ph.png'},
  },
  {
    value: '29',
    label: 'Vietnam',
    image: {uri: 'https://flagcdn.com/w320/vn.png'},
  },
  {
    value: '30',
    label: 'Turkey',
    image: {uri: 'https://flagcdn.com/w320/tr.png'},
  },
  {
    value: '31',
    label: 'Saudi Arabia',
    image: {uri: 'https://flagcdn.com/w320/sa.png'},
  },
  {
    value: '32',
    label: 'United Arab Emirates',
    image: {uri: 'https://flagcdn.com/w320/ae.png'},
  },
  {
    value: '33',
    label: 'Qatar',
    image: {uri: 'https://flagcdn.com/w320/qa.png'},
  },
  {
    value: '34',
    label: 'Egypt',
    image: {uri: 'https://flagcdn.com/w320/eg.png'},
  },
  {
    value: '35',
    label: 'Pakistan',
    image: {uri: 'https://flagcdn.com/w320/pk.png'},
  },
  {
    value: '36',
    label: 'Bangladesh',
    image: {uri: 'https://flagcdn.com/w320/bd.png'},
  },
  {
    value: '37',
    label: 'Nepal',
    image: {uri: 'https://flagcdn.com/w320/np.png'},
  },
  {
    value: '38',
    label: 'Sri Lanka',
    image: {uri: 'https://flagcdn.com/w320/lk.png'},
  },
  {value: '39', label: 'Iraq', image: {uri: 'https://flagcdn.com/w320/iq.png'}},
  {value: '40', label: 'Iran', image: {uri: 'https://flagcdn.com/w320/ir.png'}},
  {
    value: '41',
    label: 'Greece',
    image: {uri: 'https://flagcdn.com/w320/gr.png'},
  },
  {
    value: '42',
    label: 'Portugal',
    image: {uri: 'https://flagcdn.com/w320/pt.png'},
  },
  {
    value: '43',
    label: 'Poland',
    image: {uri: 'https://flagcdn.com/w320/pl.png'},
  },
  {
    value: '44',
    label: 'Czech Republic',
    image: {uri: 'https://flagcdn.com/w320/cz.png'},
  },
  {
    value: '45',
    label: 'Ukraine',
    image: {uri: 'https://flagcdn.com/w320/ua.png'},
  },
  {
    value: '46',
    label: 'Hungary',
    image: {uri: 'https://flagcdn.com/w320/hu.png'},
  },
  {
    value: '47',
    label: 'Austria',
    image: {uri: 'https://flagcdn.com/w320/at.png'},
  },
  {
    value: '48',
    label: 'Belgium',
    image: {uri: 'https://flagcdn.com/w320/be.png'},
  },
  {
    value: '49',
    label: 'Chile',
    image: {uri: 'https://flagcdn.com/w320/cl.png'},
  },
  {
    value: '50',
    label: 'Colombia',
    image: {uri: 'https://flagcdn.com/w320/co.png'},
  },
  {value: '51', label: 'Peru', image: {uri: 'https://flagcdn.com/w320/pe.png'}},
  {
    value: '52',
    label: 'Nigeria',
    image: {uri: 'https://flagcdn.com/w320/ng.png'},
  },
  {
    value: '53',
    label: 'Kenya',
    image: {uri: 'https://flagcdn.com/w320/ke.png'},
  },
];

export default countryData;

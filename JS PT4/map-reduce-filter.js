const companies = [
{name: 'samsung', marketvalue: 500000, CEO: 'kim', founded: 1938},
{name: 'apple', marketvalue: 2000000, CEO: 'tim', founded: 1976},
{name: 'tesla', marketvalue: 800000, CEO: 'elon', founded: 2003},
{name: 'microsoft', marketvalue: 1800000, CEO: 'satya', founded: 1975},
{name: 'amazon', marketvalue: 1600000, CEO: 'jeff', founded: 1994},
{name: 'google', marketvalue: 1400000, CEO: 'sundar', founded: 1998},
];



const sub10marktvalue = (company) => {
    company.marketvalue = company.marketvalue - company.marketvalue * 0,1 
    return company
}

const newCompanies = companies.map(sub10marktvalue)
const filtercompanies = (company) => company.founded < 2000
const calculetotalmarktvalue = (total, company) => total + company.marketvalue

const marktvalueoldcompanies = companies
.map(sub10marktvalue)
.filter(filtercompanies)
.reduce(calculetotalmarktvalue, 0)




console.log (marktvalueoldcompanies)


//map, filter, reduce
//map - to transform each element of an array and create a new array
//filter - to filter elements of an array based on a condition and create a new array
//reduce - to reduce the array to a single value based on a function
/*
    FILTER FUNCTIONS
    ----------------

const list [20, 3, 234, 54, 23, 45, 67, 89, 90, 12, 11, 10, 9, 8, 7, 6, 5, 4, 2, 1];

const newlist = list.filter( number => {
if (number > 10 || number % 2 === 0) {
    return true; 
} else {
    return false;
}
})

const newlist2 = list.filter( number => number > 10 || number % 2 === 0 );

console.log(newlist);
console.log(newlist2);
*/

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
]

const newcompanies = companies.filter(companies => {
    if (companies.start >= 1990 && companies.end <= 2010) {
        return true;
    } else {
        return false;
    }
})
const newcompanies2 = companies.filter(companies => companies.start >= 1990 && companies.end <= 2010);

console.log(newcompanies);
console.log(newcompanies2);
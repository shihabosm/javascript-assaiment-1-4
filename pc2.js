
const numbers = [1, 4, 9, 16]

function subtractTwo(numbers) {
	 const result= numbers.map(x => x * 2);
    return result;
  
}
console.log(subtractTwo(numbers))


// /
const years = [1763, 1972, 1925, 1916, 1984, 1124, 1950, 2020]

function getYears(years) {
  const result=years.filter(word => word >1950)
  return result;
}
console.log(getYears(years))
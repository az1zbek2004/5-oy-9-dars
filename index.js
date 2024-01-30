const element = document.getElementById("element");
const form = document.getElementById("form");
const search = document.getElementById("inputSearch");
const tbody = document.getElementById("tbody");
const button = document.getElementById("button");

function isValidate(search) {
  
  if (!search.value) {
    alert("Enter the city name in English!");
    search.setAttribute("class", "form-control border border-danger border-2");
    search.focus();
    return false;
  }

  return true;
}

async function getAPI() {
  const url = `https://foreca-weather.p.rapidapi.com/location/search/${search.value}?lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5bc93db8a0msh60cb7fc3dfbb2aap1167aajsn8722ee16f144',
      'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
    }
  };

try {

	const response = await fetch(url, options);
	const result = JSON.parse(await response.text());
  if (search.value) {
	let tr = `
  <tr>
      <td class="text-center">${result.locations[0].name}</td>
      <td class="text-center">${result.locations[0].country}</td>
      <td class="text-center">${result.locations[0].timezone.substring(0, result.locations[0].timezone.search('/'))}</td>
  </tr>
`;
 tbody.innerHTML += tr; 
 }

} catch (error) {
	console.error(error);
}
};



button && button.addEventListener("click", function(e) {
    e.preventDefault();

    if (isValidate(search)) {
      search.setAttribute("class", "form-control border border-primary border-2");

      getAPI();
      
    } else {
      
    }

});

















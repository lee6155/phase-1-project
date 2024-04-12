
function fetchData () {
    fetch('http://localhost:3000/data')
    .then(resp => resp.json())
    .then(function getData(data){
        let cancerDropdown = document.getElementById('select-type')
        cancerDropdown.addEventListener('change', function(e) {
            let cancerType = e.target.value

            let stateDropdown = document.getElementById('select-state')
            stateDropdown.addEventListener('change', function(e) {
                let state = e.target.value

                data.find(function (element) {
                    if(element.type === cancerType) {
                        document.getElementById('death-count').textContent = `Death Count: ${element[state].deathCount}`

                        document.getElementById('incidence-count').textContent = `Incidence Count: ${element[state].incidenceCount}`

                        document.getElementById('mortality-rate').textContent = `Mortality Rate: ${element[state].mortalityRate}`
                    }
                })
            })
        })
    })
}

fetchData()


function fetchData () {
    fetch('http://localhost:3000/data')
    .then(resp => resp.json())
    .then(function getData(data){
        let cancerDropdown = document.getElementById('select-type')
        //Event listener
        cancerDropdown.addEventListener('change', function(e) {
            let cancerType = e.target.value

            let stateDropdown = document.getElementById('select-state')
            stateDropdown.addEventListener('change', function(e) {
                let state = e.target.value

                //array iteration
                data.find(function (element) {
                    if(element.type === cancerType) {
                        document.getElementById('death-count').textContent = `Death Count: ${element[state].deathCount}`

                        document.getElementById('incidence-count').textContent = `Incidence Count: ${element[state].incidenceCount}`

                        document.getElementById('mortality-rate').textContent = `Mortality Rate: ${element[state].mortalityRate}%`
                    
                        //Event listener
                        document.getElementById('comparison-button').addEventListener('click', function() {
                            let newTR = document.createElement('tr')
                            document.getElementById('comparison-table').append(newTR)
        
                            let newTD1 = document.createElement('td')
                            newTD1.setAttribute('class','comparison-data')
                            newTR.append(newTD1)
                            newTD1.textContent = cancerType
        
                            let newTD2 = document.createElement('td')
                            newTD2.setAttribute('class','comparison-data')
                            newTR.append(newTD2)
                            newTD2.textContent = state
                            
                            let newTD3 = document.createElement('td')
                            newTD3.setAttribute('class','comparison-data')
                            newTR.append(newTD3)
                            newTD3.textContent = `${element[state].deathCount}`
                            
                            let newTD4 = document.createElement('td')
                            newTD4.setAttribute('class','comparison-data')
                            newTR.append(newTD4)
                            newTD4.textContent = `${element[state].incidenceCount}`
        
                            let newTD5 = document.createElement('td')
                            newTD5.setAttribute('class','comparison-data')
                            newTR.append(newTD5)
                            newTD5.textContent = `${element[state].mortalityRate}%`
                        })
                    
                    }
                })
            })
        })
    })
}

fetchData()

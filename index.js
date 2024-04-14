
function fetchData () {
    fetch('http://localhost:3000/data')
    .then(resp => resp.json())
    .then(function getTypes (data) {
        let cancerDropdown = document.getElementById('select-type')
        //Event listener
        let cancerArray = []
        cancerDropdown.addEventListener('change', function getCancerType(e) {
            let cancerType = e.target.value
            cancerArray.push(cancerType)
        })

        let stateDropdown = document.getElementById('select-state')
        let stateArray = []
        stateDropdown.addEventListener('change', function(e) {
            let state = e.target.value
            stateArray.push(state)

            //array iteration
            data.find(function (element) {
                if(element.type === cancerArray[cancerArray.length - 1]) {
                    document.getElementById('death-count').textContent = `Death Count: ${element[state].deathCount}`

                    document.getElementById('incidence-count').textContent = `Incidence Count: ${element[state].incidenceCount}`

                    document.getElementById('mortality-rate').textContent = `Mortality Rate: ${element[state].mortalityRate}%`
                }
            })
        })
        
                    //Event listener
                    document.getElementById('comparison-button').addEventListener('click', function() {
                        let deathCountStr = document.getElementById('death-count').textContent
                        deathCountStr = deathCountStr.substring(13)

                        let incidenceCountStr = document.getElementById('incidence-count').textContent
                        incidenceCountStr = incidenceCountStr.substring(17)

                        let mortalityRateStr = document.getElementById('mortality-rate').textContent
                        mortalityRateStr = mortalityRateStr.substring(16)

                        let newTR = document.createElement('tr')
                        newTR.innerHTML =
                            `<td class='comparison-data'>${cancerArray[cancerArray.length - 1]}</td>
                            <td class='comparison-data'>${stateArray[stateArray.length - 1]}</td>
                            <td class='comparison-data'>${deathCountStr}</td>
                            <td class='comparison-data'>${incidenceCountStr}</td>
                            <td class='comparison-data'>${mortalityRateStr}</td>`
                        document.getElementById('comparison-table').append(newTR)
                    })   
                }
            )
        }

        
fetchData()


// let newTD1 = document.createElement('td')
                            // newTD1.setAttribute('class','comparison-data')
                            // newTR.append(newTD1)
                            // newTD1.textContent = cancerType
        
                            // let newTD2 = document.createElement('td')
                            // newTD2.setAttribute('class','comparison-data')
                            // newTR.append(newTD2)
                            // newTD2.textContent = state
                            
                            // let newTD3 = document.createElement('td')
                            // newTD3.setAttribute('class','comparison-data')
                            // newTR.append(newTD3)
                            // newTD3.textContent = `${element[state].deathCount}`
                            
                            // let newTD4 = document.createElement('td')
                            // newTD4.setAttribute('class','comparison-data')
                            // newTR.append(newTD4)
                            // newTD4.textContent = `${element[state].incidenceCount}`
        
                            // let newTD5 = document.createElement('td')
                            // newTD5.setAttribute('class','comparison-data')
                            // newTR.append(newTD5)
                            // newTD5.textContent = `${element[state].mortalityRate}%`


function fetchData () {
    fetch('http://localhost:3000/data')
    .then(resp => resp.json())
    .then(function (data) {
        let cancerDropdown = document.getElementById('select-type')
        //Event listener
        let cancerArray = []
        cancerDropdown.addEventListener('change', function getCancerType(e) {
            let cancerType = e.target.value
            cancerArray.push(cancerType)
        })

        let stateDropdown = document.getElementById('select-state')
        let stateArray = []
        stateDropdown.addEventListener('change', function getState(e) {
            let state = e.target.value
            stateArray.push(state)

            //Array iteration
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
            newTR.setAttribute('class','table-row')
            newTR.innerHTML =
                `<td class='comparison-data'>${cancerArray[cancerArray.length - 1]}</td>
                <td class='comparison-data'>${stateArray[stateArray.length - 1]}</td>
                <td class='comparison-data'>${deathCountStr}</td>
                <td class='comparison-data'>${incidenceCountStr}</td>
                <td class='comparison-data'>${mortalityRateStr}</td>`

            document.getElementById('comparison-table').append(newTR)

            //Event listener
            newTR.addEventListener('dblclick', function() {
                newTR.remove()
            })
        })
    })
}
       
document.getElementById('clear-table').addEventListener('click', function() {
    let tableData = document.getElementsByClassName('table-row')
    let tableData2 = [...tableData]
    tableData2.forEach(function(item){
        item.remove()
    })
})

fetchData()



//let stateArray = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


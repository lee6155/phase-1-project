
let cancerType
let state

function getData () {
    fetch('http://localhost:3000/data')
    .then(resp => resp.json())
    .then(function (data) {
        let cancerDropdown = document.getElementById('select-type')
        //Event listener
        cancerDropdown.addEventListener('change', function (e) {
            cancerType = e.target.value
        })

        let stateDropdown = document.getElementById('select-state')
        stateDropdown.addEventListener('change', function (e) {
            state = e.target.value

            //Array iteration
            let dataFound = data.find(function (element) {
                return element.type === cancerType
            })
                document.getElementById('death-count').textContent = `Death Count: ${dataFound[state].deathCount}`

                document.getElementById('incidence-count').textContent = `Incidence Count: ${dataFound[state].incidenceCount}`

                document.getElementById('mortality-rate').textContent = `Mortality Rate: ${dataFound[state].mortalityRate}%`
        })
    })
}

getData()


function addToTable () {
    //Event listener
    document.getElementById('comparison-button').addEventListener('click', function() {
        let deathCountStr = document.getElementById('death-count').textContent
        deathCountStr = deathCountStr.substring(13)

        let incidenceCountStr = document.getElementById('incidence-count').textContent
        incidenceCountStr = incidenceCountStr.substring(17)

        let mortalityRateStr = document.getElementById('mortality-rate').textContent
        mortalityRateStr = mortalityRateStr.substring(16)

        newTableRow = document.createElement('tr')
        newTableRow.setAttribute('class','table-row')
        newTableRow.innerHTML =
            `<td class="comparison-data">${cancerType}</td>
            <td class="comparison-data">${state}</td>
            <td class="comparison-data">${deathCountStr}</td>
            <td class="comparison-data">${incidenceCountStr}</td>
            <td class="comparison-data">${mortalityRateStr}</td>`

        document.getElementById('comparison-table').append(newTableRow)
    })        
}

addToTable()


function deleteTableRow () {
    //Event listener
    document.addEventListener('dblclick', function(e){
        const tableRow = e.target.closest('.table-row')
        tableRow.remove()
    })
}

deleteTableRow()
       

function deleteAllTableRows() {
    document.getElementById('clear-table').addEventListener('click', function() {
        let tableData = document.getElementsByClassName('table-row')
        let tableData2 = [...tableData]
        //Array iteration
        tableData2.forEach(function(item){
            item.remove()
        })
    })
}

deleteAllTableRows()



//let stateArray = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


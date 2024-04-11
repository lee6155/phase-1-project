
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

                let newArray = [cancerType, state]
                console.log(newArray)
            })
        })
    })
}

fetchData()


    // DOM Elements
    const tabs = document.querySelectorAll('.tab')
    const tabContents = document.querySelectorAll('.tabcontent')
      
    // Functions
    const activateTab = tabnum => {
        
        tabs.forEach( tab => {
          tab.classList.remove('active')
        })
        
        tabContents.forEach( tabContent => {
            tabContent.classList.remove('active')
        })
    
        document.querySelector('#tab' + tabnum).classList.add('active')
        document.querySelector('#tabcontent' + tabnum).classList.add('active')
        localStorage.setItem('jstabs-opentab', JSON.stringify(tabnum))
    }
    
    // Event Listeners
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            activateTab(tab.dataset.tab)
        })
    })
    
    // activateTab(opentab)
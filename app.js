document.addEventListener('DOMContentLoaded', function () {

    const catBreeds = [
        { name: 'Abyssinian', healthIssue: 2, weight: { imperial: '7 - 10', metric: '3 - 5' }, intelligence: 5.3 },
        
    ];

    /
    function showAllCatNames() {
        displayResults(catBreeds.map(cat => cat.name));
    }

    
    function showCatNamesByHealthIssue() {
        const healthIssueInput = document.getElementById('healthIssueInput');
        const selectedHealthIssue = healthIssueInput.value;
        const filteredCats = catBreeds.filter(cat => cat.healthIssue == selectedHealthIssue);
        displayResults(filteredCats.map(cat => cat.name));
    }

    
    function showWeightRanges() {
        const weightRanges = catBreeds.map(cat => `Imperial: ${cat.weight.imperial}, Metric: ${cat.weight.metric}`);
        displayResults(weightRanges);
    }

    
    function showIntelligenceFactors() {
        const intelligenceFactors = catBreeds.map(cat => `Name: ${cat.name}, Intelligence: ${cat.intelligence}`);
        displayResults(intelligenceFactors);
    }

    function showAverageIntelligence() {
        const totalIntelligence = catBreeds.reduce((sum, cat) => sum + cat.intelligence, 0);
        const averageIntelligence = totalIntelligence / catBreeds.length;
        displayResults([`Average Intelligence: ${averageIntelligence.toFixed(2)}`]);
    }

    //
    function showAverageIntelligenceForChildFriendly() {
        const childFriendlyCats = catBreeds.filter(cat => cat.childFriendly);
        const totalIntelligenceChildFriendly = childFriendlyCats.reduce((sum, cat) => sum + cat.intelligence, 0);
        const averageIntelligenceChildFriendly = totalIntelligenceChildFriendly / childFriendlyCats.length;
        displayResults([`Average Intelligence for Child Friendly: ${averageIntelligenceChildFriendly.toFixed(2)}`]);
    }

  
    function displayResults(results) {
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = results.join('<br>');
    }
});

addons.register('messageReciever', function(data) {

let bannedwords = ["ilya", "Ilya", "ILYA", "zelenevsky", "Zelenevsky", "ZELENEVSKY", "timofey", "Timofey", "TIMOFEY", "piskov", "Piskov", "PISKOV"]

function censorRealNames(text) {
    var censoredText = text;
    
    for (let word of bannedwords) {
        let regexPattern = new RegExp('\\b' + escapeRegExp(word), 'g');
        
        censoredText = censoredText.replace(regexPattern, match => Array(match.length).fill('*').join(''));
    }
    
    return censoredText;
}

function escapeRegExp(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

	data.msg = censorRealNames(data.msg)
})
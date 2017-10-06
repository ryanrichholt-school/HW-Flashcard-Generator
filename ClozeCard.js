
function ClozeCard(text, cloze){
	this.fullText = String(text);
	this.cloze = String(cloze);
	if(!this.fullText.includes(this.cloze)){
		throw 'Cloze is not found in the text'
	} else {
		this.partial = this.fullText.replace(cloze, '...');
	};
};

module.exports = ClozeCard;

class Maker {
	constructor(type, className='', id = '') {
		this.type = type;
		this.className = className;
		this.id = id;
	}
	domMaker() {
		const domElement = document.createElement(`${this.type}`);
		domElement.className = `${this.className}`;
		domElement.id = `${this.id}`;
		return domElement;
	}
}

export default Maker;
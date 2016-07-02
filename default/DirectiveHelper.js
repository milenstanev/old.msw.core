export default class DirectiveHelper {
	constructor(template) {
		this.restrict = 'EA';
		this.transclude = false;
		this.replace = false;
		this.scope = true;
		this.template = template || '';
		this.controller = () => {};
		this.controllerAs = 'ctrl';
		this.link = () => {};
	}
}
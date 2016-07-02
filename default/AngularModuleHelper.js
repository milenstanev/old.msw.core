import angular from 'angular';

class AngularModuleHelper {
	constructor(moduleName, moduleDependencies) {
		angular.extend(this, angular.module(moduleName, moduleDependencies || []));
	}
}

export default AngularModuleHelper;
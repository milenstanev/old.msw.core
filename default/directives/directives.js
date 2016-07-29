import AngularModuleHelper from '../AngularModuleHelper.js';


class CoreDirectives extends AngularModuleHelper {
	constructor(moduleName, moduleDependencies) {
		super(moduleName, moduleDependencies);

		/**
		 * Widgets Placeholder - loading directives
		 */
		this.directive('mswWidgetPlaceholder', [
			'$compile',
			($compile) => {
				return {
					scope: {
						directiveName: '='
					},
					link: (scope, element) => {
						element.append(`<div ${scope.directiveName}></div>`);
						$compile(element.contents())(scope);
					}
				}
			}
		]);

	}
}

const mswCoreDirectives = new CoreDirectives('prefix.core.directives', []);

export default mswCoreDirectives;
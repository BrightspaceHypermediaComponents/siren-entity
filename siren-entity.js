import '@polymer/polymer/polymer-legacy.js';
import 'd2l-polymer-siren-behaviors/store/entity-behavior.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
/**
 * `<siren-entity>`
 * a polymer siren entity
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SirenEntity extends mixinBehaviors([D2L.PolymerBehaviors.Siren.EntityBehavior], PolymerElement) {
	static get is() { return 'siren-entity'; }
	static get properties() {
		return {
			entity: {
				type: Object,
				notify: true
			}
		};
	}

	constructor() {
		super();
	}
}
window.customElements.define(SirenEntity.is, SirenEntity);

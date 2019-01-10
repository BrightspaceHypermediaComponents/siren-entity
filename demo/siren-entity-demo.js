import '@polymer/polymer/polymer-legacy.js';
import '../siren-entity.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
class SirenEntityDemo extends PolymerElement {
  static get template() {
	return html`
		<siren-entity href="/demo/data/demo.json" token="foo" entity="{{entity}}"></siren-entity>
		<h1>Title: [[_getTitle(entity)]]</h1>
`;
  }

  static get is() { return 'siren-entity-demo'; }
  static get properties() {
	  return {
		  entity: Object
	  };
  }

  _getTitle(entity) {
	  if (entity && entity.properties) {
		  return entity.properties.title;
	  }
	  return null;
  }
}
window.customElements.define(SirenEntityDemo.is, SirenEntityDemo);

import '@polymer/polymer/polymer-legacy.js';
import '../siren-entity.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="siren-entity-demo">
	<template strip-whitespace="">
		<siren-entity href="/demo/data/demo.json" token="foo" entity="{{entity}}"></siren-entity>
		<h1>Title: [[_getTitle(entity)]]</h1>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
class SirenEntityDemo extends PolymerElement {
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

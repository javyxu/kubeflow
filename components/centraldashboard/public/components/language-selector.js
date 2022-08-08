import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import localizationMixin from './localization-mixin.js';

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * Component to retrieve and allow language selection. Bubbles the selected
 * items up to the query string in the 'lang' parameter.
 */
export class LanguageSelector extends localizationMixin(PolymerElement) {
    static get template() {
        return html`
            <style>
                :host {
                    --icon-colors: #5f6062;
                    --primary-background-color: var(--icon-colors);
                }
                paper-menu-button {
                    --paper-menu-button: {
                        font-size: 14px;
                        color: #3c4043
                    }
                }
                iron-icon {
                    color: var(--icon-colors)
                }
                #dropdown-trigger {
                    @apply --layout-horizontal;
                    @apply --layout-center;
                    text-transform: none;
                }

                #dropdown-trigger iron-icon:first-child {
                    padding-right: 0.5em;
                    --iron-icon-fill-color: var(--primary-background-color);
                    --iron-icon-height: 20px;
                    --iron-icon-width: 20px;
                }

                #dropdown-trigger span {
                    max-width: 170px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                paper-item {
                    cursor: pointer;
                }
                #SelectedLanguage {
                    display: flex;
                    @apply --layout-center;
                }
                [owner]:not([all-languages]):after {
                    content: '(Owner)';
                    margin-left: .25em;
                    font-size: .8em;
                }
                paper-listbox {
                    --paper-listbox-background-color: white;
                    --paper-listbox-color: black;
                }
                paper-button {
                    --paper-button-ink-color: var(--accent-color);
                }
            </style>
            <paper-menu-button no-overlap horizontal-align="right">
                <paper-button id="dropdown-trigger" slot="dropdown-trigger">
                    <iron-icon icon="kubeflow:namespace"></iron-icon>
                    <article id="SelectedLanguage">
                        <span class='text'>
                            [[getLanguageText(selected, languages)]]
                        </span>
                    </article>
                    <iron-icon icon="arrow-drop-down"></iron-icon>
                </paper-button>
                <paper-listbox slot="dropdown-content" 
                    attr-for-selected="name" selected="{{selected}}">
                    <paper-item name="zh">
                        中文
                    </paper-item>
                    <paper-item name="en">
                        English
                    </paper-item>
                </paper-listbox>
            </paper-menu-button>
        `;
    }

    /**
     * Object describing property-related metadata used by Polymer features
     */
    static get properties() {
        return {
            queryParams: Object,
            languages: Array,
            selected: {
                type: String,
                observer: '_onSelected',
                value: '',
                notify: true,
            },
            selectedLanguage: {
                type: Boolean,
                readOnly: true,
                notify: true,
                value: false,
            },
        };
    }

    /**
     * Array of strings describing multi-property observer methods and their
     * dependant properties
     */
    static get observers() {
        return [
            '_queryParamChanged(queryParams.lang)',
            // '_ownedContextChanged(namespaces, selected)',
            'validate(selected, languages)',
        ];
    }

    /**
     * Convert the current state of this component to the visual text seen in
     * the selector
     * @param {string} selected
     * @param {[object]} languages
     * @return {string} Text that should show in language selector
     */
    getLanguageText(selected, languages) {
        // if (!languages || !languages.length) return 'No Languages';
        if (!selected) return 'Select language';
        switch (selected) {
        case 'zh':
            return '中文';
        case 'en':
            return 'English';
        }
    }

    /**
     * Validate internal state of the selector, and change selected state
     * if needed
     */
    validate() {
        const {languages} = this;
        if (!languages) return;
        const langsSet = new Set(languages.map((i) => i.language));
        if (langsSet.has(this.selected)) return;
    }

    /**
     * Allows setting the selected language from the initial query parameter.
     * @param {string} language
     */
    _queryParamChanged(language) {
        if (language && this.selected !== language) {
            this.selected = language;
        }
    }

    /**
     * Sets the query string language parameter to the selected value.
     * @param {string} selected
     */
    _onSelected(selected) {
        this.set('queryParams.lang', selected);
    }
}

window.customElements.define('language-selector', LanguageSelector);

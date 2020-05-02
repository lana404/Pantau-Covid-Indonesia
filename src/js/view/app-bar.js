class AppBar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({mode : 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
      <style>
        h1 {
          font-size : 260%;
          margin-left : 10px
        }
        :host > div {
          border-bottom : solid 1px #eaeaea;
          width : 100%;
          margin-bottom : -20px;
        }
      </style>
      <h1> Covid-19 Indonesia </h1>
      <div> </div>
    `;
  }
}

customElements.define('app-bar', AppBar);

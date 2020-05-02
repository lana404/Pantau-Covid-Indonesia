class AppFoot extends HTMLElement {
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
        ul {
          text-align : right;
          list-style : none;
        }

        ul > li {
          margin : 10px;
          padding : 6spx;
        }

        ul > li a {
          text-decoration : none;
          color : blue
        }
      </style>
      <ul>
        <li><a href="https://gitlab.com/lana404"> About Me </a></li>
      </ul>
    `;
  }
}

customElements.define('app-foot', AppFoot);

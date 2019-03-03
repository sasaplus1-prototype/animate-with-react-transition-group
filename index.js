(function () {
  'use strict';

  const {
    Fragment
  } = window.React;
  const {
    CSSTransition
  } = window.ReactTransitionGroup;

  function Menu(props) {
    const {
      portal,
      onClick,
      visible
    } = props;
    const child = React.createElement("div", {
      className: "menu"
    }, React.createElement(CSSTransition, {
      classNames: {
        enter: 'background-transition-enter',
        enterActive: 'background-transition-enter-active',
        exit: 'background-transition-exit',
        exitActive: 'background-transition-exit-active'
      },
      in: visible,
      timeout: 300,
      unmountOnExit: true
    }, React.createElement("button", {
      "aria-label": "close menu",
      className: "background",
      onClick: onClick,
      type: "button"
    })), React.createElement(CSSTransition, {
      classNames: {
        enter: 'navigation-transition-enter',
        enterActive: 'navigation-transition-enter-active',
        exit: 'navigation-transition-exit',
        exitActive: 'navigation-transition-exit-active'
      },
      in: visible,
      timeout: 200,
      unmountOnExit: true
    }, React.createElement("nav", {
      className: "navigation",
      role: "navigation",
      "aria-label": "menu"
    }, React.createElement("ul", {
      className: "list"
    }, React.createElement("li", {
      className: "item"
    }, "menu1"), React.createElement("li", {
      className: "item"
    }, "menu2"), React.createElement("li", {
      className: "item"
    }, "menu3"), React.createElement("li", {
      className: "item"
    }, "menu4"), React.createElement("li", {
      className: "item"
    }, "menu5"), React.createElement("li", {
      className: "item"
    }, "menu6"), React.createElement("li", {
      className: "item"
    }, "menu7"), React.createElement("li", {
      className: "item"
    }, "menu8"), React.createElement("li", {
      className: "item"
    }, "menu9")))));

    if (portal !== null) {
      return ReactDOM.createPortal(child, portal);
    }

    return child;
  }

  class App extends React.PureComponent {
    constructor(props) {
      super(props);

      this.handleClick = function () {
        this.setState({
          isShowMenu: true
        }, function () {
          document.body.style.overflow = 'hidden';
        });
      }.bind(this);

      this.handleClickClose = function () {
        this.setState({
          isShowMenu: false
        }, function () {
          document.body.style.overflow = '';
        });
      }.bind(this);

      this.state = {
        isShowMenu: false,
        portal: document.getElementById('js-react-menu')
      };
    }

    render() {
      const {
        isShowMenu,
        portal
      } = this.state;
      return React.createElement(Fragment, null, React.createElement("div", {
        className: "app"
      }, React.createElement("button", {
        className: "button",
        onClick: this.handleClick
      }, "show menu")), React.createElement(Menu, {
        portal: portal,
        visible: isShowMenu,
        onClick: this.handleClickClose
      }));
    }

  }

  ReactDOM.render(React.createElement(App, null), document.getElementById('js-react-root'));
})();

(function(){

  'use strict';

  const { Fragment } = window.React;

  const { CSSTransition } = window.ReactTransitionGroup;

  function Menu(props) {
    const {
      portal,
      onClick,
      visible
    } = props;

    const child = (
      <div className="menu">
        <CSSTransition
          classNames={{
            enter: 'background-transition-enter',
            enterActive: 'background-transition-enter-active',
            exit: 'background-transition-exit',
            exitActive: 'background-transition-exit-active'
          }}
          in={visible}
          timeout={300}
          unmountOnExit
        >
          <button
            aria-label="close menu"
            className="background"
            onClick={onClick}
            type="button"
          />
        </CSSTransition>
        <CSSTransition
          classNames={{
            enter: 'navigation-transition-enter',
            enterActive: 'navigation-transition-enter-active',
            exit: 'navigation-transition-exit',
            exitActive: 'navigation-transition-exit-active'
          }}
          in={visible}
          timeout={200}
          unmountOnExit
        >
          <nav
            className="navigation"
            role="navigation"
            aria-label="menu"
          >
            <ul className="list">
              <li className="item">menu1</li>
              <li className="item">menu2</li>
              <li className="item">menu3</li>
              <li className="item">menu4</li>
              <li className="item">menu5</li>
              <li className="item">menu6</li>
              <li className="item">menu7</li>
              <li className="item">menu8</li>
              <li className="item">menu9</li>
            </ul>
          </nav>
        </CSSTransition>
      </div>
    );

    if (portal !== null) {
      return ReactDOM.createPortal(child, portal);
    }

    return child;
  }

  class App extends React.PureComponent {
    constructor(props) {
      super(props);

      this.handleClick = function() {
        this.setState({
          isShowMenu: true
        }, function() {
          document.body.style.overflow = 'hidden';
        });
      }.bind(this);

      this.handleClickClose = function() {
        this.setState({
          isShowMenu: false
        }, function() {
          document.body.style.overflow = '';
        });
      }.bind(this);

      this.state = {
        isShowMenu: false,
        portal: document.getElementById('js-react-menu')
      };
    }

    render() {
      const { isShowMenu, portal } = this.state;

      return (
        <Fragment>
          <div className="app">
            <button
              className="button"
              onClick={this.handleClick}
            >show menu</button>
          </div>
          <Menu portal={portal} visible={isShowMenu} onClick={this.handleClickClose} />
        </Fragment>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('js-react-root'));

}());

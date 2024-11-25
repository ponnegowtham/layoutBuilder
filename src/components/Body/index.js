// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="first-container">
              <h1 className="head1">Left Navbar Menu</h1>
              <ul className="list-container">
                <li className="item">Itme 1</li>
                <li className="item">Itme 2</li>
                <li className="item">Itme 3</li>
                <li className="item">Itme 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="second-container">
              <h1 className="head2">Content</h1>
              <p className="description">Lorem ipsum dolor sit amet,</p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="third-container">
              <h1 className="head3">Right Navbar Menu</h1>

              <p className="item2">Ad 1</p>
              <p className="item2">Ad 2</p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body

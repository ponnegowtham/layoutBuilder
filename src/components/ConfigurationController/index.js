// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const changeContent = () => {
        onToggleShowContent()
      }

      const changeRight = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      const changeLeft = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      return (
        <div>
          <h1>Layout</h1>
          <div>
            <input
              type="checkbox"
              id="content"
              onChange={changeContent}
              checked={showContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="left"
              onChange={changeLeft}
              checked={showLeftNavbar}
            />
            <label htmlFor="left">Left Navbar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="right"
              onChange={changeRight}
              checked={showRightNavbar}
            />
            <label htmlFor="right">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController

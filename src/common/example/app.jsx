import React from 'react'
import ReactDom from 'react-dom'
import Styleguide from 'styleguide'

import Color from 'color'
import Button from 'button/button'
import Panel from 'panel/panel'
import Modal from 'modal/modal'
import List from 'list/list'
import ListItem from 'list/list-item'

class App extends React.Component {
  constructor() {
    super()

    this.lists = [
      Color,
      Button,
      Panel,
      Modal,
      List
    ]
  }

  render() {
    let result = this.lists.map((obj, i) => {
      return (
        <div
          key={ i }
          className="large-12 columns"
          id={ obj.styleguide.title }
        >
          <Styleguide
            title={ obj.styleguide.title }
            description={ obj.styleguide.description }
            example={ obj.styleguide.example }
            code={ obj.styleguide.code }
            className={ obj.styleguide.className }
          >
            { obj }
          </Styleguide>
        </div>
      )
    })

    let menu = this.lists.map((obj, i) => {
      return (
        <ListItem
          key={ i }
          text={ obj.styleguide.title }
          link={ `#${obj.styleguide.title}` }
        />
      )
    })

    return (
      <div className="row">
        <div className="large-3 columns">
          <Panel
            title="Style Guide"
            titleClass="secondary"
            className="shadow-3"
          >
            <List className="secondary">
              { menu }
            </List>
          </Panel>
        </div>
        <div className="large-9 columns">
          <div className="row">
            { result }
          </div>
        </div>
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('container')
)

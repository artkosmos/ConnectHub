import React from "react"
import style from './ProfileStatus.module.scss'

type StatusStateType = {
  isEdit: boolean
}

export class ProfileStatus extends React.Component<any, StatusStateType> {
  constructor(props: any) {
    super(props)
    this.state = {
      isEdit: false
    }
  }

  editStatusToggle = () => {
    this.setState({isEdit: !this.state.isEdit})
  }

  render = () => {
    return (
      <div className={style.statusWrapper}>
        {!this.state.isEdit && <span onDoubleClick={this.editStatusToggle}>Some text</span>}
        {this.state.isEdit && <input autoFocus={true} onBlur={this.editStatusToggle} type="text"/>}
      </div>
    )
  }
}
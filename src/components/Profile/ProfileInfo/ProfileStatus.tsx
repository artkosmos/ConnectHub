import React, {ChangeEvent} from "react"
import style from './ProfileStatus.module.scss'

type StatusStateType = {
  isEdit: boolean
  status: string
}

type StatusPropsType = {
  status: string
  callBack: (status: string) => void
}

export class ProfileStatus extends React.Component<StatusPropsType, StatusStateType> {
  constructor(props: any) {
    super(props)
    this.state = {
      isEdit: false,
      status: this.props.status
    }
  }

  componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<StatusStateType>) {
    let a = this.props
    let b = this.state
    if (prevProps.status !== this.props.status) {
      this.setState({status: this.props.status})
    }
  }

  editStatusOn = () => {
    this.setState({isEdit: true})
  }

  editStatusOff = () => {
    this.setState({isEdit: false})
    this.props.callBack(this.state.status)
  }

  onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({status: event.currentTarget.value})
  }

  render = () => {
    return (
      <div className={style.statusWrapper}>
        {!this.state.isEdit && <span onDoubleClick={this.editStatusOn}>{this.props.status || '-'}</span>}
        {this.state.isEdit && <input
        onChange={this.onChangeInput}
          value={this.state.status}
          autoFocus={true}
          onBlur={this.editStatusOff}
          type="text"/>}
      </div>
    )
  }
}
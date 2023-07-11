import {mapDispatchToPropsTypeUsers, mapStateToPropsTypeUsers} from "./UsersContainer";

export type UsersPropsType = mapDispatchToPropsTypeUsers & mapStateToPropsTypeUsers
export const Users = (props: UsersPropsType) => {
  return (
    props.users.map(item => {
      return (
        <div key={item.id} className={'UserContent'}>
          <div className={'avatarAndFollow'}>
            <div className={'photo'}>
              <img src={item.photo} alt="photo"/>
            </div>
            <button>{item.followed ? 'Unfollow' : 'Follow'}</button>
          </div>
          <div className={'userInfo'}>
            <div className={'nameAndLocation'}>
              <span className={'name'}>{item.name}</span>
              <span className={'location'}>{item.location.country}, {item.location.city}</span>
            </div>
            <span className={'status'}></span>
          </div>
        </div>
      )
    })
  )
}

import { Model, HTML } from 'lingo3d-react'
import roleList from '../../model/role'
function Users(props: any) {
  const { userData } = props
  const model = roleList[userData.role]
  return (
    <Model
      src={model.pose}
      key={userData.name}
      loadedX={-2}
      loadedY={-50}
      loadedZ={3}
      x={userData.x}
      y={userData.y}
      z={userData.z}
      rotationX={userData.rotationX}
      rotationY={userData.rotationY}
      rotationZ={userData.rotationZ}
      animations={roleList[userData.role]}
      animation={userData.motion}
      physics="character"
    ></Model>
  )
}
export default Users
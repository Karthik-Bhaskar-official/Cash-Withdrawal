// Write your code here
import './index.css'

const DenominationItem = props => {
  const {name, sub} = props
  const {value} = name
  //   console.log(value)
  const subs = () => {
    console.log(value)
    sub(value)
  }
  return (
    <li>
      <button type="button" onClick={subs}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

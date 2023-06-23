import Button from 'react-bootstrap/Button'

const ButtonBoostrap = ({type, content, action}) => {
  return (
    <>
      <Button variant={type} onClick={action}>{content}</Button>
    </>
  )
}

export default ButtonBoostrap;
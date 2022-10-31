const Form = ({ children }) => {
  return (
    <form>
      { children }
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Form
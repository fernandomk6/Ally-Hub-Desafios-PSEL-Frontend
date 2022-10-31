const PersonalData = () => {
  return (
    <div id="personal-data">
      <h2>Dados Pessoais</h2>
      <div>
        <label>
          <span>nome</span>
          <input name="name" type="text"></input>
        </label>
      </div>
      <div>
        <label>
          <span>Email</span>
          <input name="email" type="text"></input>
        </label>
      </div>
      <div>
        <label>
          <span>Telefone</span>
          <input name="phone" type="text"></input>
        </label>
      </div>
      <div>
        <label>
          <span>CPF</span>
          <input name="cpf" type="text"></input>
        </label>
      </div>
    </div>
  )
}

export default PersonalData
import { useForm } from "react-hook-form";

const Cliente = () => {

  // desestruturando o objeto
  const {register,setValue,setFocus} = useForm()

  // criando a função API que vai consumir os dados
  function buscarCep(e){
    const cep= e.target.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=>res.json())
    .then((dados)=>{
      setValue("rua",dados.logradouro)
      setValue("bairro",dados.bairro)
      setValue("estado",dados.estado)
      setValue("cidade",dados.localidade)
      setFocus("numero")
    })
  }


  return (
      
      <div>
        <form>
          <fieldset>
            <legend>
              Dados Cliente
            </legend>
            <div>
              <label>Cep: </label>
              <input
                type="text"
                {...register("cep")}
                onBlur={buscarCep}
              />
            </div>
            <div>
              <label>Rua: </label>
              <input
                type="text"
                {...register("rua")}
              />
            </div>
                <div>
              <label>Bairro: </label>
              <input
                type="text"
                {...register("bairro")}
              />
            </div>
            <div>
              <label>Estado: </label>
              <input
                type="text"
                {...register("estado")}
              />
            </div>
            <div>
              <label>Cidade: </label>
              <input
                type="text"
                {...register("cidade")}
              />
            </div>
            <div>
              <label>Numero: </label>
              <input
                type="text"
                {...register("numero")}
              />
            </div>
            
          </fieldset>
        </form>
        
      </div>
    
  )
}

export default Cliente

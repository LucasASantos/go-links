import { useState } from "react";


const AddLink = () => {

    const [fields, setFields] = useState({
        nameLink:'',
        url:''
    });

    const onChangeField = (event) =>{
        fields[event.target.name] = event.target.value;
        setFields(fields);
    };

    const backToHome = (event)=>{

    };

    const createLink = (event) => {

    };


    return(
        <div>
            <header>
                <nav className="main-header navbar navbar-light bg-light justify-content-center ">
                <p className="title-header navbar-brand">Go Links</p>
                </nav>
            </header>
            <section>
                <div className="row justify-content-center">
                    <div class="col-7">
                        <h1>
                            Cadastro de Link
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label for="nameLink">Nome do Link</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="nameLink"  
                            placeholder="Nome do Link"
                            onChange={onChangeField}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label for="url">Url</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="url"  
                            placeholder="Url"
                            onChange={onChangeField}
                        />
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div class="col-3">
                        <button onClick={backToHome} type="button" className="btn btn-light">Voltar</button>
                    </div>
                    <div class="col-4">
                        <button onClick={createLink} type="button" className="btn btn-light">Cadastrar</button>
                    </div>
                </div>

            </section>


        </div>
    )
}

export default AddLink;
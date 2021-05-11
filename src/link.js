

const Link = ({data}) => {
    return (
        <div className="main-box card">
          <div className="row justify-content-between">
            <div className="col-8">
              <h3 className="box-desc">{data.nameLink}</h3>
            </div>
            <div className="col-4">
              <button type="button" href={data.url} className="btn btn-outline-dark box-button">Ir</button>
            </div>
          </div>
        </div>
    );
};


export default Link;
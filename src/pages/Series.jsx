import { useEffect, useState,useRef  } from "react";
import { getData } from "../services/getData";
// import data from "../data/sample.json";

export const Series = ({type}) => {

  const yearFilter = useRef(2023);
  const amountItems = useRef(20);

  const [popupActivo, setPopupActivo] = useState(false);
  const [itemInfo, setitemInfo] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [iserror, setisError ]= useState(false);
  const [lista, setLista] = useState([]);
  const [filterAnio, setfilterAnio] = useState(null);
  const [filterAmount, setfilterAmount] = useState(20);
  const [pagination, setPagination] = useState({star:0,end:20})

  function filtroFecha() {
    setfilterAnio(yearFilter.current.value) 
  }


  function amountFilter() {
    setPagination({
      star: 0,
      end: parseInt(amountItems.current.value)
    })  

  }

  useEffect(() => {
    getData(setLista,setisLoading,type,filterAnio,pagination.star,pagination.end)
  }, [filterAnio])


  function closePopup() {
    setPopupActivo(false);
  }

  const loadInfo = (item) => {
    setitemInfo(item);
    setPopupActivo(!popupActivo);
  };

  // aumentar pagina
  function aumentarPagina() {
    setPagination({
      star: parseInt(pagination.star) + parseInt(amountItems.current.value),
      end: parseInt(pagination.end) + parseInt(amountItems.current.value)
    })  }

  // disminuir pagina
  function disminuirPagina() {
    setPagination({
      star: parseInt(pagination.star) - parseInt(amountItems.current.value),
      end: parseInt(pagination.end) - parseInt(amountItems.current.value)
    })  }

  useEffect(() => {
    getData(setLista,setisLoading,type,filterAnio,pagination.star,pagination.end)
  }, [pagination])



  return (
    <div style={{ marginTop: "50px" }}>
      <input type="number" style={{ marginBottom: "20px" }} ref={yearFilter} onChange={filtroFecha} placeholder="Filtro por año"/>
      <label>Num a mostrar</label>
      <input type="number" style={{ marginBottom: "20px" }} ref={amountItems}  defaultValue='20'  onChange={amountFilter} placeholder="Total peliculas a mostrar"/>
      <button onClick={disminuirPagina}>Anterior</button>
      <button onClick={aumentarPagina}>Siguiente</button>
      {/* si isLoading es true, mostrar mensaje de carga */}
      {isLoading && <p>Cargando...</p>}
      {/* si error es true, mostrar mensaje de error */}
      {iserror && <p>Se ha producido un error al cargar los datos</p>}
      {/* si isLoading es false y error es false, mostrar lista */}
      {!isLoading && !iserror && (
        <div>
          {popupActivo && <Popup item={itemInfo} setPopupActivo={setPopupActivo} />}
          <ul className="list">
            {lista.map((item) => (
              <li
                key={item.title}
                className="listItem"
                onClick={() => loadInfo(item)}
              >
                <h3>{item.title}</h3>
                <img src={item.images["Poster Art"].url} alt={item.title} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Popup = ({ item, setPopupActivo, popupActivo }) => {
  return (
    <div className="popup">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>{item.releaseYear}</p>
      <p>{item.programType}</p>
      <button
        className="cerrar"
        onClick={() => {
          setPopupActivo(false);
        }}
      >
        Cerrar
      </button>
    </div>
  );
};

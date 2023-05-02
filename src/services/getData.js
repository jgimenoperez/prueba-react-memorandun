export function getData(setLista,setisLoading,type,filterAnio,star,end){

    console.log(star,end)

    fetch("../data/sample.json")
    .then((res) => res.json())
    .then((data) =>
      setLista(
        data.entries
          .filter(
            (entry) =>
            {
                if (filterAnio) {
                    return entry.programType === type && entry.releaseYear.toString() === filterAnio;
                  } else {
                    return entry.programType === type && entry.releaseYear >= 2010;
                  }
            }
            // entry.programType === type  && entry.releaseYear >= 2010
          )
          .sort((a, b) => a.title.localeCompare(b.title))
          .slice(star, end)
      )
    )
    .then(() => setisLoading(false))
    .catch((error) => console.log(error));


}
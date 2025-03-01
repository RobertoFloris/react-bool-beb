import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const AddHome = () => {
  const [newHome, setNewHome] = useState({
    type: "",
    accomodation_type: "",
    city: "",
    guest_number: "",
    rooms: "",
    beds: "",
    restrooms: "",
    square_meters: "",
    address: "",
    description: "",
    host_name: "",
    host_surname: "",
    host_email: "",
    host_phone: "",
    thumbnail: "",
    wifi: false,
    tv: false,
    pool: false,
    kitchen: false,
    washing_machine: false,
    heating: false,
    air_conditioning: false,
    hairdryer: false,
    iron: false,
  });

  const { handlerNewHome } = useGlobalContext();

  const [thumb, setThumb] = useState("/img/no-image.jpg")


  //se è di tipo checkbox true o false, altrimenti se è di tipo file prendo il file fisico messo in cache in cui c'è il nome altrimenti (se è numero o text) prende direttamente il valore
  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    if (type === "file" && files.length > 0) {
      setThumb(URL.createObjectURL(files[0]));
      setNewHome((prev) => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setNewHome((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }));
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    handlerNewHome(newHome);

  };

  return (
    <form className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-lg" onSubmit={handleSubmit} encType="multipart/form-data">

      <h1 className="text-2xl font-bold mb-6">Pagina di inserimento immobili</h1>

      <label>Quale di queste opzioni descrive meglio il tuo alloggio?</label>
      <select name="type" className="w-full p-2 border rounded" onChange={handleChange}>
        <option value="">Seleziona...</option>
        <option value="Casa">Casa</option>
        <option value="Appartamento">Appartamento</option>
        <option value="Villa">Villa</option>
      </select>

      <label>A che tipo di alloggio avranno accesso gli ospiti?</label>
      <select name="accomodation_type" className="w-full p-2 border rounded" onChange={handleChange}>
        <option value="">Seleziona...</option>
        <option value="Intera proprietà">Intera proprietà</option>
        <option value="Stanza privata">Stanza privata</option>
        <option value="Stanza condivisa">Stanza condivisa</option>
      </select>

      <label>In quale città si trova il tuo alloggio?</label>
      <input type="text" name="city" className="w-full p-2 border rounded" onChange={handleChange} />

      <label>Ospiti</label>
      <input type="number" name="guest_number" className="w-full p-2 border rounded" onChange={handleChange} />

      <label>Camere da letto</label>
      <input type="number" name="rooms" className="w-full p-2 border rounded" onChange={handleChange} min="0" />

      <label>Letti</label>
      <input type="number" name="beds" className="w-full p-2 border rounded" onChange={handleChange} min="0" />

      <label>Bagni</label>
      <input type="number" name="restrooms" className="w-full p-2 border rounded" onChange={handleChange} min="0" />

      <label>Metri quadri</label>
      <input type="number" name="square_meters" className="w-full p-2 border rounded" onChange={handleChange} min="0" />

      <label>Indirizzo</label>
      <input type="text" name="address" className="w-full p-2 border rounded" onChange={handleChange} />

      <label>Immagine di copertina</label>
      <input type="file" name="thumbnail" className="w-full p-2 border rounded" onChange={handleChange} />
      <img src={thumb} alt="no-image" className="thumb" />

      <label>Descrizione</label>
      <textarea name="description" rows="4" className="w-full p-2 border rounded" onChange={handleChange}></textarea>

      {/* serve per far si che le checkbox si creino dinamicamente e ognuna abbia il name uguale all'item e quindi alla stringa dell'array */}
      <h3 className="mb-4 font-semibold text-gray-900">Servizi offerti</h3>
      {[
        "wifi",
        "tv",
        "pool",
        "kitchen",
        "washing_machine",
        "heating",
        "air_conditioning",
        "hairdryer",
        "iron",
      ].map((item) => (
        //checkbox
        <div key={item} className="flex items-center">
          <input
            type="checkbox"
            name={item}
            checked={newHome[item]}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded-sm"
          />
          {/* nome label affianco alla checkbox togliendo _ quindi air_conditioning diventa air conditioning */}
          <label className="ml-2 text-sm font-medium">{item.charAt(0).toUpperCase() + item.slice(1).replace("_", " ")}</label>
        </div>
      ))}

      <label>Nome Host</label>
      <input type="text" name="host_name" className="w-full p-2 border rounded" onChange={handleChange} />

      <label>Cognome Host</label>
      <input type="text" name="host_surname" className="w-full p-2 border rounded" onChange={handleChange} />

      <label>Email Host</label>
      <input type="email" name="host_email" className="w-full p-2 border rounded" onChange={handleChange} />

      <label>Telefono Host</label>
      <input type="text" name="host_phone" className="w-full p-2 border rounded" onChange={handleChange} />

      <button
        type="submit"
        className="mt-4 text-white bg-stone-800 hover:bg-stone-700 px-5 py-2.5 rounded-lg"
      >
        Invia
      </button>
    </form>
  );
};

export default AddHome;

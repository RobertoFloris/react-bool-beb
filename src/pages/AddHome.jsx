import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

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
    foto1: "",
    foto2: "",
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
  const [thumb, setThumb] = useState("/img/no-image.jpg");
  const [foto1, setFoto1] = useState("/img/no-image.jpg");
  const [foto2, setFoto2] = useState("/img/no-image.jpg");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    if (type === "file" && files.length > 0 && name == "thumbnail") {
      setThumb(URL.createObjectURL(files[0]));
      setNewHome((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }

    else if (type === "file" && files.length > 0 && name == "foto1") {
      setFoto1(URL.createObjectURL(files[0]));
      setNewHome((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }

    else if (type === "file" && files.length > 0 && name == "foto2") {
      setFoto2(URL.createObjectURL(files[0]));
      setNewHome((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }

    else {
      setNewHome((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newHome);

    handlerNewHome(newHome).then(() => {
      setIsSubmitted(true);
    });
  };

  const handleGoHome = () => {
    navigate(`/`);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          Casa aggiunta con successo!
        </h1>
        <button
          onClick={handleGoHome}
          className="px-4 py-2 bg-yellow-500 border-stone-400 rounded-xl cursor-pointer"
        >
          Torna alla Homepage
        </button>
      </div>
    );
  }

  return (
    <div className="py-10">
      <form
        className="max-w-4xl mx-auto p-10 bg-white shadow-lg rounded-lg border border-gray-300"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h1 className="text-4xl font-extrabold mb-8 text-center text-yellow-500">
          Inserisci le caratteristiche della tua casa
        </h1>

        <div className="mb-4">
          <label>Quale di queste opzioni descrive meglio il tuo alloggio?</label>
          <select
            name="type"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          >
            <option value="">Seleziona...</option>
            <option value="Casa">Casa</option>
            <option value="Appartamento">Appartamento</option>
            <option value="Villa">Villa</option>
          </select>
        </div>

        <div className="mb-4">
          <label>A che tipo di alloggio avranno accesso gli ospiti?</label>
          <select
            name="accomodation_type"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          >
            <option value="">Seleziona...</option>
            <option value="Intera proprietà">Intera proprietà</option>
            <option value="Stanza privata">Stanza privata</option>
            <option value="Stanza condivisa">Stanza condivisa</option>
          </select>
        </div>

        <div className="mb-4">
          <label>In quale città si trova il tuo alloggio?</label>
          <input
            type="text"
            name="city"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label>Numero massimo di ospiti</label>
          <input
            type="number"
            name="guest_number"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label>Numero di camere da letto</label>
          <input
            type="number"
            name="rooms"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            min="0"
          />
        </div>

        <div className="mb-4">
          <label>Numero di letti</label>
          <input
            type="number"
            name="beds"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            min="0"
          />
        </div>

        <div className="mb-4">
          <label>Numero di bagni</label>
          <input
            type="number"
            name="restrooms"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            min="0"
          />
        </div>

        <div className="mb-4">
          <label>Metri quadri</label>
          <input
            type="number"
            name="square_meters"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            min="0"
          />
        </div>

        <div className="mb-4">
          <label>Prezzo a notte</label>
          <input
            type="number"
            name="price"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label>Indirizzo</label>
          <input
            type="text"
            name="address"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label>Immagine di copertina</label>
          <input
            type="file"
            name="thumbnail"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <img src={thumb} alt="no-image" className="thumb mt-2" />
        </div>

        <div className="mb-4">
          <label>Immagine 1</label>
          <input
            type="file"
            name="foto1"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <img src={foto1} alt="no-image" className="thumb mt-2" />
        </div>

        <div className="mb-4">
          <label>Immagine 2</label>
          <input
            type="file"
            name="foto2"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <img src={foto2} alt="no-image" className="thumb mt-2" />
        </div>

        <div className="mb-4">
          <label>Descrizione</label>
          <textarea
            name="description"
            rows="4"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* serve per far si che le checkbox si creino dinamicamente e ognuna abbia il name uguale all'item e quindi alla stringa dell'array */}
        <h3 className="mb-4 font-semibold text-gray-900">Servizi offerti</h3>
        <div className="flex flex-wrap space-x-4 mb-4">
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
            <div key={item} className="flex items-center p-2">
              <input
                type="checkbox"
                name={item}
                checked={newHome[item]}
                onChange={handleChange}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-sm font-medium capitalize text-gray-700">
                {item === "pool"
                  ? "Piscina"
                  : item === "kitchen"
                    ? "Cucina"
                    : item === "washing_machine"
                      ? "Lavatrice"
                      : item === "heating"
                        ? "Riscaldamento"
                        : item === "air_conditioning"
                          ? "Aria condizionata"
                          : item === "hairdryer"
                            ? "Phon"
                            : item === "iron"
                              ? "Ferro da stiro"
                              : item}
              </label>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <label>Nome Host</label>
          <input
            type="text"
            name="host_name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label>Cognome Host</label>
          <input
            type="text"
            name="host_surname"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label>Email Host</label>
          <input
            type="email"
            name="host_email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label>Telefono Host</label>
          <input
            type="text"
            name="host_phone"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full text-stone-600 bg-yellow-500 border-stone-400 hover:bg-yellow-600 px-8 py-3 rounded-lg transition duration-300"
        >
          Aggiungi Casa
        </button>
      </form>
    </div>
  );
};

export default AddHome;

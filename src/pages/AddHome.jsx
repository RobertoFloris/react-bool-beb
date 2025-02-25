import { useState } from "react";
const propertyForm = () => {
  const [formState, setFormState] = useState({
    accommodationType: "",
    guestAccess: "",
    location: "",
    guests: "",
    bedrooms: "",
    beds: "",
    bathrooms: "",
    services: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logica per gestire l'invio del modulo
  };

  return (
    <form
      className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold mb-6">
        Pagina di inserimento immobili
      </h1>

      {/* quale di queste opzioni descrive meglio il tuo alloggio */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Quale di queste opzioni descrive meglio il tuo alloggio?
        </label>
        <select
          name="accommodationType"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        >
          <option value="">Seleziona...</option>
          <option value="Casa">Casa</option>
          <option value="Appartamento">Appartamento</option>
          <option value="Villa">Villa</option>
        </select>
      </div>

      {/* a che tipo di alloggio avranno accesso gli ospiti*/}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          A che tipo di alloggio avranno accesso gli ospiti?
        </label>
        <select
          name="guestAccess"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        >
          <option value="">Seleziona...</option>
          <option value="Intera proprietà">Intera proprietà</option>
          <option value="Stanza privata">Stanza privata</option>
          <option value="Stanza condivisa">Stanza condivisa</option>
        </select>
      </div>

      {/* dove si trova il tuo alloggio */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Dove si trova il tuo alloggio?
        </label>
        <input
          type="text"
          name="location"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
      </div>

      {/* ospiti */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Ospiti</label>
        <input
          type="number"
          name="guests"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
      </div>

      {/* Camere da letto */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Camere da letto
        </label>
        <input
          type="number"
          name="bedrooms"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
      </div>
      {/* Letti */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Letti</label>
        <input
          type="number"
          name="beds"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
      </div>

      {/* Bagni */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Bagni</label>
        <input
          type="number"
          name="bathrooms"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
      </div>

      {/* Servizi offerti */}

      <h3 className="mb-4 font-semibold text-gray-900 dark:text-black">
        Servizi offerti
      </h3>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-white dark:border-gray-600 dark:text-black">
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="vue-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="vue-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Wifi
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="react-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="react-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Tv
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="angular-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Piscina
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="laravel-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="laravel-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Cucina
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="laravel-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="laravel-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Lavatrice
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="laravel-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="laravel-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Riscaldamento
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="laravel-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="laravel-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Aria condizionata
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="laravel-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="laravel-checkbox"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Asciugacapelli/ferro
            </label>
          </div>
        </li>
      </ul>

      {/* titolo annuncio descrizione */}
      <div className="mb-4">
        <label
          for="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-stone-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>

      <button
        type="button"
        className="text-white bg-stone-800 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-stone-800 dark:hover:bg-stone-700 dark:focus:ring-black"
      >
        invia
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </form>
  );
};
export default propertyForm;

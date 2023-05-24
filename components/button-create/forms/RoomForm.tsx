import { useState } from 'react';
import { format } from 'date-fns';

const RoomForm = () => {
  const [roomName, setRoomName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [resources, setResources] = useState([]);
  const [photoUrl, setPhotoUrl] = useState('');

  console.log('hello word')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Obtenha a data atual
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd');

    // Crie o objeto de dados a ser exibido no console
    const formData = {
      roomName,
      capacity,
      resources,
      photoUrl,
      date: formattedDate,
    };

    // Exiba os dados do formData no console
    console.log('Dados do formulário:', formData);

   
    setRoomName('');
    setCapacity('');
    setResources([]);
    setPhotoUrl('');
  };

  const handleResourceChange = (resource: string) => {
    if (resources.includes(resource)) {
      setResources(resources.filter((r) => r !== resource));
    } else {
      setResources([...resources, resource]);
    }
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="roomName" className="block mb-2 font-bold">
          Nome da Sala:
        </label>
        <input
          type="text"
          id="roomName"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="capacity" className="block mb-2 font-bold">
          Capacidade Máxima de Pessoas:
        </label>
        <input
          type="number"
          id="capacity"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Recursos Disponíveis:</label>
        <div>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              className="form-checkbox"
              value="projetor"
              checked={resources.includes('projetor')}
              onChange={() => handleResourceChange('projetor')}
            />
            <span className="ml-2">Projetor</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              className="form-checkbox"
              value="wifi"
              checked={resources.includes('wifi')}
              onChange={() => handleResourceChange('wifi')}
            />
            <span className="ml-2">WiFi</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              className="form-checkbox"
              value="cadeiras"
              checked={resources.includes('cadeiras')}
              onChange={() => handleResourceChange('cadeiras')}
            />
            <span className="ml-2">Cadeiras</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              className="form-checkbox"
              value="notebooks"
              checked={resources.includes('notebooks')}
              onChange={() => handleResourceChange('notebooks')}
            />
            <span className="ml-2">Notebooks</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="photoUrl" className="block mb-2 font-bold">
          URL da Foto:
        </label>
        <input
          type="text"
          id="photoUrl"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 mt-4 font-bold text-white bg-blue-500 hover:bg-blue-600 rounded"
      >
        Salvar
      </button>
    </form>
  );
};

export default RoomForm;

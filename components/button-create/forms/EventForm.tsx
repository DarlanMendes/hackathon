import { useState } from 'react';
import { format } from 'date-fns';
const EventForm = () => {
  const [room, setRoom] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('hello word')
    // Obtenha a data atual
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd');

    // Crie o objeto de dados a ser exibido no console
    const formData = {
      room,
      time,
      date,
      description,
      currentDate: formattedDate,
    };

    // Exiba os dados do formData no console
    console.log('Dados do formulário:', formData);

    
    setRoom('');
    setTime('');
    setDate('');
    setDescription('');
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="room" className="block mb-2 font-bold">
          Sala:
        </label>
        <input
          type="text"
          id="room"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="block mb-2 font-bold">
          Horário:
        </label>
        <input
          type="text"
          id="time"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block mb-2 font-bold">
          Data:
        </label>
        <input
          type="text"
          id="date"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-bold">
          Descrição do Evento:
        </label>
        <textarea
          id="description"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
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

export default EventForm;

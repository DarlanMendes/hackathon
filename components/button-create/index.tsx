import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import RoomForm from './forms/RoomForm';
import EventForm from './forms/EventForm';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Dropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center items-center gap-x-1.5 rounded-[10px] bg-blue-700 px-3 py-2 w-[110px] text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">
          <AiOutlinePlus className="text-white" aria-hidden="true" />
          Criar
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                  onClick={() => handleOptionClick('Salas')}
                >
                  Salas 
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                  onClick={() => handleOptionClick('Eventos')}
                >
                  Eventos
                </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>

      {selectedOption === 'Salas' && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-4">Criar Sala</h3>
            {<RoomForm/>}
          </div>
        </div>
      )}

      {selectedOption === 'Eventos' && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-4">Criar Evento</h3>
            {<EventForm/>}
          </div>
        </div>
      )}

      
    </Menu>
  );
};

export default Dropdown;

import React from "react";

const CardsGerais: React.FC = () => {
    return (
        <div className="w-2/3 bg-slate-100 flex justify-center items-center">
            <div className="w-10/12 h-80 bg-white flex justify-between mt-10 p-4">
                
                <div className="flex">
                    <div className="w-14 h-6 rounded bg-slate-100 mt-2 ml-2 font-medium flex justify-center items-center">
                        <div className="text-xs">Todos</div>
                    </div>
                    <div className="text-xs mt-3 ml-3 text-color-gray-title">Sede aldeota</div>
                    <div className="text-xs mt-3 ml-3 text-color-gray-title">Sede sul</div>
                </div>
                
                <div className="flex ml-20">
                    <div className="w-24 h-8 bg-blue-400 ml-32 mt-2 rounded flex items-center">
                        <div className="mr-3 text-xl ml-3 m text-white">+</div><div className="text-xs text-white">Criar</div> 
                    </div>
                    <div className=""><img src="https://cdn-icons-png.flaticon.com/512/82/82122.png" alt="opcoes" className="w-3 ml-5 mt-4"/></div>
                    <div className="w-6 h-7 bg-white flex justify-center items-center mt-2 ml-7 shadow-lg">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-61pweaH_lKczpurUC1B_C1OoHirif705ugZnwlRDPb1_8Th2bPmRzXzIN48eSrB3Xg&usqp=CAU" className="w-4 h-4" alt="Vetor"/>
                    </div>
                    <div className="w-24 h-6 bg-white ml-6 mt-3 rounded shadow-lg flex justify-center items-center">
                        <div className="text-xs mr-2">Favoritos</div>
                        <div className="mr-1 w-2 ml-2"><img src="https://cdn-icons-png.flaticon.com/512/271/271210.png" alt="setaBaixo" /></div>
                    </div>
                    
                </div>
                
                
            </div>
        </div>
    );
};

export default CardsGerais;

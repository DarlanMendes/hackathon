export default function Atividades() {
    const infos = [
      {
        data: '27/05/2023',
        disponiveis: '04',
        concluidos: '05',
        remarcados: '06',
        cancelados: '02'
      },
      {
        data: '27/08/2023',
        disponiveis: '06',
        concluidos: '02',
        remarcados: '04',
        cancelados: '03'
      }
    ];
  
    return (
     <div className={`bg-slate-100 flex items-center  justify-center `}>
        <div className={` w-[50%] bg-[#FCFCFC] rounded-xl m-2`}>
        <div className={`flex  text-center justify-between items-center px-4`}>
          <div className={`flex items-center py-5`}>
            <h1 className={`bg-green-300 w-4 h-8 rounded-sm`}></h1>
            <h1 className={`px-2 font-bold`}>Atividades</h1>
          </div>
          <select className={`pe-8 h-10 font-normal shadow-inner bg-slate-50 rounded-xl`}>
            <option className={``}>Essa semana</option>
          </select>
        </div>
  
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            gap: "1rem",
            marginTop: "1rem",
            marginLeft: "1rem",
            marginBottom: "3rem"
          }}
        >
          <span>Data: <hr></hr></span>
          <span>Disponíveis: <hr></hr></span>
          <span>Concluídos: <hr></hr></span>
          <span>Remarcados: <hr></hr></span>
          <span>Cancelados: <hr></hr></span>
        </div>
  
        {infos.map((info, index) => (
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            gap: "1rem",
            marginLeft: "1rem",
            marginTop: "1rem"
          }}
                key={index}>
                <div style={{ marginBottom: "2rem"}}>{info.data}</div>
                <div className={`bg-[#B5E4CA] rounded-md w-11 h-6 text-center`}>{info.disponiveis}</div>
                <div className={`bg-[#CABDFF] rounded-md w-11 h-6 text-center`}>{info.concluidos}</div>
                <div className={`bg-[#B1E5FC] rounded-md w-11 h-6 text-center`}>{info.remarcados}</div>
                <div className={`bg-[#FFD88D] rounded-md w-11 h-6 text-center`}>{info.cancelados}</div>
            </div>
            
        ))}
      </div>
     </div>
     
    );
  }
  
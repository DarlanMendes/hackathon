interface Props {
    card: {
        titulo: string,
        qtd: string,
        porcentagem: string,
        periodo: string,
        img: string
    }
}
export default function Overview(props: Props) {
    return (
        <div className="">
            <div className="h-48 w-[19vw] bg-lime-100 grid  grid-cols-2 place-content-center items-center rounded-2xl">
                <div className="w-22 h-20 bg-white rounded-2xl flex place-content-center items-center mx-6">
                    <div className="w-20 h-20 flex items-center place-content-center bg-zinc-500 rounded-lg">
                        <img src={props.card?.img} 
                        alt="checkList"
                        className="h-12"
                        />
                    </div>
                </div>
                <div className="h-28">
                    <div className="text-md font-semibold">{props.card?.titulo} <div className="w-3 inline-flex">
                        <img src="https://cdn-icons-png.flaticon.com/512/1/1176.png" alt="info" />

                    </div>
                    </div>
                    <div className="text-5xl mb-2 font-semibold">{props.card?.qtd}</div>
                    <div className="bg-white w-30 h-6 rounded-2xl flex items-center my-1" >
                        <div className="w-4 mx-1"><img src="https://icones.pro/wp-content/uploads/2021/02/icone-de-fleche-vers-le-haut-vert.png" alt="stonks" /></div>
                        <div className="text-sm text-green-700 mx-">{props.card?.porcentagem}</div>
                        <div className="text-xs mx-1">{props.card?.periodo}</div>
                    </div>
                </div>
            </div>


        </div>





    )
}
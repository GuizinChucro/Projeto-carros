import iconSedans from "./assets/icon-sedans.svg"
import iconSUVs from "./assets/icon-suvs.svg"
import iconLuxuosos from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className=" min-h-svh bg-offwhitebg py-20 px-6">
      <section>
        <div className="bg-orange">
          <img src={iconSedans} alt="" />
          <h2 className="font-shoulders">Sedans</h2>
          <p className="font-lexend">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/sedans" target="_blank">Ver Mais</a>
        </div>

        <div className="bg-green">
          <img src={iconSUVs} alt="" />
          <h2 className="font-shoulders">SUVs</h2>
          <p className="font-lexend">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/suvs/carros/estoque?tipoveiculo=carros&necessidade=SUVs" target="_blank">Ver Mais</a>
        </div>

        <div  className="bg-dark-green">
          <img src={iconLuxuosos} alt="" />
          <h2 className="font-shoulders">Luxuosos</h2>
          <p className="font-lexend">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-lexend" href="https://www.webmotors.com.br/carros-de-luxo" target="_blank">Ver Mais</a>
        </div>
      </section>
    </main>
  )
}
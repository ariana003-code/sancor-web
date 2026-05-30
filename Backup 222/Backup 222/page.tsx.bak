"use client";
import { useState } from "react";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [page, setPage] = useState("inicio");

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    localidad: "",
    celular: "",
    fijo: "",
    interes: ""
  });

  const [consulta, setConsulta] = useState({
    nombre: "",
    email: "",
    telefono: "",
    localidad: "",
    plan: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const enviarMail = () => {
    const body = `
Nombre: ${form.nombre}
Email: ${form.email}
Localidad: ${form.localidad}
Celular: ${form.celular}
Teléfono fijo: ${form.fijo}

Área de interés:
${form.interes}
    `;

    window.location.href = `mailto:Walter.aducci@sancorsalud.com.ar?subject=Cotización Plan Salud&body=${encodeURIComponent(body)}`;
  };

  const handleConsultaChange = (e) => {
    setConsulta({
      ...consulta,
      [e.target.name]: e.target.value
    });
  };

  const enviarConsulta = (e) => {
    e.preventDefault();

    const body = `
Nombre: ${consulta.nombre}
E-mail: ${consulta.email}
Teléfono: ${consulta.telefono}
Localidad: ${consulta.localidad}
Tipo de plan: ${consulta.plan}

Consulta:
${consulta.mensaje}
    `;

    window.location.href = `mailto:walter.aducci@gmail.com?subject=Nueva consulta web&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="bg-white text-black">

      {/* ================= MENU ================= */}
      {showMenu && (
        <div className="fixed top-0 right-0 w-[90%] max-w-md h-full bg-white text-black p-6 z-50 shadow-lg">
          <button onClick={() => setShowMenu(false)} className="mb-6 text-xl">
            ✕ Cerrar
          </button>

          <div className="flex flex-col gap-4">
            <button onClick={() => { setPage("inicio"); setShowMenu(false); }} className="bg-gray-200 p-3 rounded">
              Inicio
            </button>

            <button onClick={() => { setPage("planes"); setShowMenu(false); }} className="bg-[#334f67] text-white p-3 rounded">
              SanCorSalud, Nuestros Planes
            </button>

            <button onClick={() => { setPage("cotizacion"); setShowMenu(false); }} className="bg-red-500 text-white p-3 rounded">
              Pedir Cotización
            </button>
          </div>
        </div>
      )}

      {/* ================= INICIO ================= */}
      {page === "inicio" && (
        <>
          {/* HERO */}
          <section className="relative w-full h-[600px]">
            <img src="/1imagen.png" className="absolute w-full h-full object-cover" />
            <div className="absolute w-full h-full bg-black/40"></div>

            <div className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-20">
              <img src="/logolargo.png" className="h-28 object-contain" />
              <button onClick={() => setShowMenu(true)} className="text-white text-3xl">☰</button>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
              <h1 className="text-4xl font-bold mb-4">ASESORATE POR UN PLAN A TU MEDIDA</h1>
              <p className="mb-6">HAY UN ASESOR PARA INFORMARTE AHORA</p>

              <a href="https://wa.me/5491130707897"
                className="bg-green-500 px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                <img src="/logowssp.png" className="w-5 h-5 object-contain" />
                ESCRIBINOS POR WHATSAPP
              </a>
            </div>
          </section>

          {/* DESCUENTO */}
          <div className="w-full bg-[#013861] text-white text-center py-4">
            <p className="text-xl md:text-2xl font-bold tracking-wide">
              Descuentos de hasta 50%
            </p>
          </div>

          {/* BENEFICIOS */}
          <div className="relative bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-[#334f67]/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-6 bg-[#334f67] rounded-full"></div>
              <h3 className="font-bold text-xl text-[#334f67]">BENEFICIOS</h3>
            </div>

            <ul className="text-sm space-y-2 text-gray-700">
              <li>✔ Consultas médicas sin límite.</li>
              <li>✔ Estudios sin tope.</li>
              <li>✔ Internación sin cargo.</li>
              <li>✔ Emergencia 24 hs.</li>
              <li>✔ Farmacias con descuento.</li>
              <li>✔ Cobertura nacional e internacional.</li>
              <li>✔ Anticonceptivos sin cargo.</li>
            </ul>
          </div>

          {/* IMAGEN 2 */}
          <div className="w-full">
            <img src="/2imagen.png" className="w-full object-cover" />
          </div>

          {/* BANDA BENEFICIOS ADICIONALES */}
          <div className="w-full bg-[#013861] text-white py-6 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-xl font-bold">OBTENÉ BENEFICIOS ADICIONALES</h2>
              <p className="text-sm opacity-90">Consultá con un asesor</p>
              <p className="text-sm font-semibold mt-2">Gen: Entre 18 y 35 años</p>
            </div>

            <img src="/logolargo.png" className="h-14" />
          </div>

          {/* COBERTURA */}
          <div className="w-full bg-[#e0e3eb] py-10 px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-[#334f67]">
              Cobertura en los sanatorios, hospitales y clínicas más reconocidos
            </h2>
          </div>

          {/* LOGOS */}
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white">
            <img src="/logosmedicina.png" className="w-full block" />
          </div>

          {/* ZONAS */}
          <div className="w-full bg-[#013861] text-white py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <h3 className="font-bold">Zona Sur</h3>
                <p>Sanatorio Juncal - Clínica Ima - Clínica Rodríguez</p>
              </div>

              <div>
                <h3 className="font-bold">Zona Oeste</h3>
                <p>San Juan de Dios - Hosp. Italiano - Clínica Modelo</p>
              </div>

              <div>
                <h3 className="font-bold">Zona Norte</h3>
                <p>San Lucas - Clínica Angelus - Las Lomas</p>
              </div>

              <div>
  <h3 className="font-bold">CABA</h3>
  <p>
    Hosp. Italiano - Hosp. Británico - Favaloro - Güemes - Alemán - San Camilo y más...
  </p>
</div>


            </div>
          </div>

          {/* FORMULARIO FINAL */}
          <div className="w-full bg-[#e0e3eb] py-12 px-6 flex justify-center">

            <form onSubmit={enviarConsulta}
              className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-xl space-y-4">

              <h2 className="text-2xl font-bold text-[#334f67]">
                Enviar consulta
              </h2>

              <input name="nombre" onChange={handleConsultaChange} placeholder="Nombre" className="w-full p-2 border rounded" />
              <input name="email" onChange={handleConsultaChange} placeholder="E-mail" className="w-full p-2 border rounded" />
              <input name="telefono" onChange={handleConsultaChange} placeholder="Teléfono" className="w-full p-2 border rounded" />
              <input name="localidad" onChange={handleConsultaChange} placeholder="Localidad" className="w-full p-2 border rounded" />

              <select name="plan" onChange={handleConsultaChange} className="w-full p-2 border rounded">
                <option value="">Tipo de plan</option>
                <option>Familiar</option>
                <option>Individual</option>
                <option>Jubilado</option>
              </select>

              <textarea name="mensaje" onChange={handleConsultaChange} placeholder="Consulta" className="w-full p-2 border rounded h-32" />

              <button className="w-full bg-[#013861] text-white py-3 rounded font-bold">
                Enviar consulta
              </button>

            </form>
          </div>

        </>
      )}
      {/* ================= PLANES ================= */}
      {page === "planes" && (
        <section className="p-6 bg-[#e0e3eb] min-h-screen">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#334f67]">PLANES DE SALUD</h2>
            <button onClick={() => setShowMenu(true)} className="text-3xl text-[#334f67]">☰</button>
          </div>

          <div className="grid gap-6">

            {/* PLAN S1000 */}
            <div className="bg-white p-4 rounded-xl shadow border-l-4 border-[#334f67]">
              <h3 className="font-bold text-lg mb-2 text-[#334f67]">Plan S1000</h3>
              <ul className="text-sm space-y-1">
                <li>Plan Con Copagos.</li>
                <li>Farmacia: 40% en el interior y 50% en AMBA</li>
                <li>Habitación compartida</li>
                <li>PMI: 100% cobertura de vacunas dentro del calendario oficial</li>
                <li>Cobertura del 100% en Pastillas Anticonceptivas dentro de la Resolución 310</li>
                <li>Reintegros solo para Ortodoncia (8 a 16 años), Nutrición y Ortopedia (un par zapatos y dos pares de plantillas por año)</li>
                <li>25 sesiones de fisiatría, kinesiología y fonoaudiología</li>
                <li>30 sesiones de psicología c/c</li>
                <li>Óptica: cristales comunes blancos</li>
                <li>Reconocimiento del 30% en extracción de Células Madre en Protectia, con una permanencia de 12 meses en el Plan</li>
              </ul>
            </div>

            {/* PLAN S1500 */}
            <div className="bg-white p-4 rounded-xl shadow border-l-4 border-[#334f67]">
              <h3 className="font-bold text-lg mb-2 text-[#334f67]">Plan S1500</h3>
              <ul className="text-sm space-y-1">
                <li>Plan Sin Copagos</li>
                <li>Habitación individual</li>
                <li>Cobertura del 70% en pastillas anticonceptivas de marcas comerciales no incluidas en la Resolución 310</li>
                <li>Ortodoncia de 8 a 16 años (cobertura por reintegro o por sistema cerrado)</li>
                <li>Sesiones de kinesiología ST y SL</li>
                <li>25 sesiones de fonoaudiología</li>
                <li>Óptica: 100% en cristales lejos/cerca, 50% en bifocales/multifocales, 50% en lentes de contacto, y armazones</li>
                <li>PMI: ecografía 3D una por embarazo</li>
                <li>Cirugía refractiva: 100% de cobertura a partir de 3,5 dioptrías, con 12 meses de permanencia en el plan</li>
                <li>Nutrición: cobertura en dieta y 12 consultas anuales (hasta 2 por mes)</li>
                <li>Asistencia al viajero en países limítrofes, a través de ASSIST CARD</li>
              </ul>
            </div>

            {/* PLAN S3000 */}
            <div className="bg-white p-4 rounded-xl shadow border-l-4 border-[#334f67]">
              <h3 className="font-bold text-lg mb-2 text-[#334f67]">Plan S3000</h3>
              <ul className="text-sm space-y-1">
                <li>Cobertura al 100% de todas las pastillas anticonceptivas</li>
                <li>Ortodoncia hasta los 30 años (Por reintegro ó por sistema cerrado)</li>
                <li>35 sesiones de rehabilitación en fonoaudiología y terapia Ocupacional</li>
                <li>40 sesiones de psicología</li>
                <li>Cirugía refractiva: cobertura al 100% a partir de 3 dioptrías, con 12 meses de permanencia en el plan</li>
                <li>PMI: ecografía 3D, 4D ó 5D una por embarazo</li>
                <li>Cobertura en Cremas nutritivas durante el embarazo (4 envases de 200grs.)</li>
                <li>Cobertura de prótesis odontológica al 50% valores Sancor, con 12 meses de permanencia</li>
                <li>Asistencia al viajero internacional, a través de ASSIST CARD</li>
                <li>Reconocimiento del 40% en extracción de Células Madre en Protectia</li>
              </ul>
            </div>

            {/* PLAN S3500 */}
            <div className="bg-white p-4 rounded-xl shadow border-l-4 border-[#334f67]">
              <h3 className="font-bold text-lg mb-2 text-[#334f67]">Plan S3500</h3>
              <ul className="text-sm space-y-1">
                <li>50 sesiones de rehabilitación en fonoaudiología y terapia Ocupacional</li>
                <li>Óptica: 100% en cristales lejos/cerca, 100% en bifocales/multifocales, 100% en lentes de contacto, y armazones</li>
                <li>Cobertura de prótesis odontológica al 100% valores Sancor, con 12 meses de permanencia.</li>
              </ul>
            </div>

            {/* PLAN S4500 */}
            <div className="bg-white p-4 rounded-xl shadow border-l-4 border-[#334f67]">
              <h3 className="font-bold text-lg mb-2 text-[#334f67]">Plan S4500</h3>
              <ul className="text-sm space-y-1">
                <li>75 sesiones de rehabilitación en fonoaudiología y terapia Ocupacional</li>
                <li>50 sesiones de psicología</li>
                <li>Cobertura de implantes odontológicos, con 12 meses de permanencia.</li>
                <li>Cobertura en Cremas nutritivas durante el embarazo (6 envases de 200grs.)</li>
                <li>Reconocimiento del 75% en extracción de Células Madre, con una permanencia de 12 meses en el Plan.</li>
                <li>Cobertura en cirugía estética con un reconocimiento de hasta $20.000, mediante reintegro</li>
                <li>Reintegro en tratamientos estéticos</li>
              </ul>
            </div>

            {/* PLAN S5000 */}
            <div className="bg-white p-4 rounded-xl shadow border-l-4 border-[#334f67]">
              <h3 className="font-bold text-lg mb-2 text-[#334f67]">Plan S5000</h3>
              <ul className="text-sm space-y-1">
                <li>Habitación VIP</li>
                <li>Farmacia: 60% de cobertura</li>
                <li>Ecografía 3D/4D/5D, dos por embarazo</li>
                <li>Sesiones de rehabilitación sin límite</li>
                <li>Reintegros Especiales</li>
                <li>Cirugía Estética por reintegro</li>
              </ul>
            </div>

          </div>
        </section>
      )}
        {/* ================= COTIZACION ================= */}
      {page === "cotizacion" && (
        <section
          className="min-h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/medicina.png')" }}
        >

          {/* HEADER SUPERIOR */}
          <div className="w-full flex justify-between items-center p-4 bg-[#334f67]/90 backdrop-blur-sm">
            <img
  src="/logolargo.png"
  className="h-16 object-contain"
/>

            <button
              onClick={() => setShowMenu(true)}
              className="text-white text-3xl"
            >
              ☰
            </button>
          </div>

          {/* CONTENIDO */}
          <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] px-6 gap-10">

            {/* TEXTO IZQUIERDO */}
           <div className="max-w-lg text-center md:text-left bg-[#334f67]/60 p-6 rounded-xl backdrop-blur-sm">

  <h1 className="text-3xl md:text-5xl font-bold mb-2 leading-tight text-white">
  Planes de Sancor Salud
</h1>

<h2 className="text-xl md:text-2xl font-medium mb-2 text-white">
  Planes de salud pensados para cada etapa de tu vida
</h2>

<p className="text-lg text-white">
  Solicitá cotización ahora
</p>

</div>

            {/* FORMULARIO */}
            <div className="w-full max-w-md bg-[#334f67]/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-white">

              <h2 className="text-xl font-bold mb-4">
                Solicitá una cotización ahora
              </h2>

              <input name="nombre" onChange={handleChange} placeholder="Nombre" className="w-full p-2 border mb-2 text-white bg-transparent placeholder-white rounded" />
              <input name="email" onChange={handleChange} placeholder="Email" className="w-full p-2 border mb-2 text-white bg-transparent placeholder-white rounded" />
              <input name="localidad" onChange={handleChange} placeholder="Localidad" className="w-full p-2 border mb-2 text-white bg-transparent placeholder-white rounded" />
              <input name="celular" onChange={handleChange} placeholder="Teléfono celular" className="w-full p-2 border mb-2 text-white bg-transparent placeholder-white rounded" />
              <input name="fijo" onChange={handleChange} placeholder="Teléfono fijo (opcional)" className="w-full p-2 border mb-2 text-white bg-transparent placeholder-white rounded" />

              <h3 className="font-bold mb-2">
                ¿Cuál es el área de salud de tu mayor interés?
              </h3>

              <select
  name="interes"
  onChange={handleChange}
  className="w-full p-2 border border-white mb-4 text-white bg-transparent rounded"
>
                <option value="">Seleccioná</option>
                <option>Cobertura Internacional</option>
                <option>Odontología (implantes)</option>
                <option>Odontología (pernos y coronas)</option>
                <option>Ortodoncia</option>
                <option>Cirugía Estética</option>
                <option>Cirugía refractiva Ojos</option>
                <option>Ópticas (marcos, cristales o lentes de contacto)</option>
                <option>Emergencia privada en internaciones</option>
                <option>Emergencia médica las 24hs</option>
                <option>Ortopedia</option>
                <option>Kinesiología</option>
                <option>Otros</option>
              </select>
              

              <button
                onClick={enviarMail}
                className="bg-[#013861] text-white w-full py-3 rounded mb-6 text-lg font-semibold"
              >
                ENVIAR
              </button>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/5491130707897"
                className="flex flex-col items-center justify-center mt-4 bg-[#25D366] text-white p-5 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src="/logowssp.png"
                    className="h-12 w-12 object-contain"
                  />
                  <span className="text-2xl font-bold">
                  Whatsapp
                  </span>
                </div>

               <span className="text-base mt-2 opacity-90 leading-tight text-center">
                 ASESOR DISPONIBLE.
                 <br />
                 -Consultá-
                 </span>
                 </a>

            </div>
          </div>
        </section>
      )}

    </main>
  );
}
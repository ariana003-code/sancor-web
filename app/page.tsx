"use client";

import { useState } from "react";

export default function Home() {

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    dni: "",
    email: "",
    localidad: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const enviarMail = async (e: React.FormEvent) => {
    e.preventDefault();

    const body = `
nombre: ${form.nombre}
teléfono: ${form.telefono}
DNI: ${form.dni}
email: ${form.email}
localidad: ${form.localidad}
`;

    await fetch("https://formspree.io/f/xbdbllzl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: form.nombre,
        telefono: form.telefono,
        dni: form.dni,
        email: form.email,
        localidad: form.localidad,
        mensaje: body,
      }),
    });

    alert("✔ Mensaje enviado");
  };

  return (
    <main className="bg-white text-black">

          {/* HERO */}
          <section className="relative w-full h-[600px]">
            <img
              src="/1imagen.png"
              className="absolute w-full h-full object-cover"
            />

            <div className="absolute w-full h-full bg-black/40"></div>

            <div className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-20">
              <img
                src="/logolargo.png"
                className="h-28 object-contain"
              />
            </div>
        
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
              <h1 className="text-2xl md:text 5x1 font-bold mb-4 leading-tight">
                 Asesoramiento Personalizado con Sancor Salud
              </h1>

             <p className="mb-4 text-base md:text-x1 font-medium max-w-xl">
              Consultá planes de salud, cobertura médica, descuentos y beneficios de Sancor Salud.
              </p>

              <a
  href="https://wa.me/5491155231771"
    className="bg-green-500 w-fit mx-auto md:mx-0 px-4 py-2 md:px-12 md:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 md:gap-4"
>
  <img
    src="/logowssp.png"
    className="w-6 h-6 md:w-16 md:h-16 object-contain shrink-0"
  />

  <span className="text-lg md:text-4xl font-bold leading-none whitespace-nowrap">
    WhatsApp
  </span>
</a>
      </div>
      </section>
    
{/* DESCUENTO */}
          <div className="w-full bg-[#013861] text-white text-center py-4">
            <p className="text-xl md:text-2xl font-bold tracking-wide">
              ¡Consultá nuestros descuentos!
            </p>
          </div>
          {/* CONTENIDO */}
          <div
 className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] px-6 gap-10 py-10 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/medicina.png')",
  }}
>
            {/* TEXTO IZQUIERDO */}
            <div className="max-w-lg text-center md:text-left bg-[#334f67]/60 p-6 rounded-xl backdrop-blur-sm">
              <h1 className="text-3xl md:text-5xl font-bold mb-2 leading-tight text-white">
                Planes de Sancor Salud
              </h1>

              <h2 className="text-xl md:text-2xl font-medium mb-2 text-white">
                Planes de salud pensados para cada etapa de tu vida
                 </h2>

              
            </div>

{/* FORMULARIO */}
<form
  onSubmit={enviarMail}
  className="w-full max-w-md bg-[#334f67]/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-white"
>
  <h2 className="text-xl font-bold mb-4">
                O envianos tu consulta por este medio:
              </h2>

              <input
                name="nombre"
                required
                onChange={handleChange}
                placeholder="Nombre y Apellido"
                className="w-full p-2 border mb-2 text-white bg-transparent placeholder-white rounded"
              />

              <input
                name="telefono"
                required
                onChange={handleChange}
                placeholder="Teléfono/Celular/Whatsapp"
                className="w-full p-2 border mb-2 text-white bg-transparent placeholder-white rounded"
              />

              <input
                name="dni"
                onChange={handleChange}
                placeholder="DNI (opcional)"
                className="w-full p-2 border mb-2 text-white bg-transparent placeholder-white rounded"
              />

              <input
                name="email"
                onChange={handleChange}
                placeholder="E-mail (opcional)"
                className="w-full p-2 border mb-2 text-white bg-transparent placeholder-white rounded"
              />

              <input
                name="localidad"
                onChange={handleChange}
                placeholder="Localidad (opcional)"
                className="w-full p-2 border mb-2 text-white bg-transparent placeholder-white rounded"
              />

              <button
              type="submit"
              className="bg-[#013861] text-white w-full py-3 rounded mb-6 text-lg font-semibold hover:bg-[#02508a] transition"
              >
                ENVIAR
                </button>
                </form>

                </div>

          {/* BENEFICIOS */}
          <div className="relative bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-[#334f67]/20 m-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-6 bg-[#334f67] rounded-full"></div>

              <h3 className="font-bold text-xl text-[#334f67]">
                BENEFICIOS
              </h3>
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
            <img
              src="/2imagen.png"
              className="w-full object-cover"
            />
          </div>

          {/* BANDA */}
          <div className="w-full bg-[#013861] text-white py-6 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-xl font-bold">
                OBTENÉ BENEFICIOS ADICIONALES
              </h2>

              <p className="text-sm opacity-90">
                Consultá con un asesor
              </p>

              <p className="text-sm font-semibold mt-2">
                Gen: Entre 18 y 35 años
              </p>
            </div>

            <img
              src="/logolargo.png"
              className="h-14"
            />
          </div>

          {/* COBERTURA */}
          <div className="w-full bg-[#e0e3eb] py-10 px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-[#334f67]">
              Cobertura en los sanatorios, hospitales y clínicas más
              reconocidos
            </h2>
          </div>

          {/* LOGOS */}
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white">
            <img
              src="/logosmedicina.png"
              className="w-full block"
            />
          </div>

          {/* ZONAS */}
          <div className="w-full bg-[#013861] text-white py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold">Zona Sur</h3>

                <p>
                  Sanatorio Juncal - Clínica Ima - Clínica
                  Rodríguez - Modelo Quilmes - Sanatorio Itoiz
                </p>
              </div>

              <div>
                <h3 className="font-bold">Zona Oeste</h3>

                <p>
                  San Juan de Dios - Hosp. Italiano - Clínica
                  Modelo - Clínica Bessone - Corporación médica San Martín - Sanatorio Anchorena
                </p>
              </div>

              <div>
                <h3 className="font-bold">Zona Norte</h3>

                <p>
                  Hospital Austral - San Lucas - Clínica Angelus - Las Lomas - Centro médico Nordelta
                </p>
              </div>

              <div>
                <h3 className="font-bold">CABA</h3>

                <p>
                  Hosp. Italiano - Hosp. Británico - Sanatorio Mater Dei - IADT - Favaloro - 
                  Güemes - Alemán - San Camilo y muchas más...
                </p>
                </div>
    </div>
  </div>
{/* ================= PLANES EN INICIO ================= */}
<div className="w-full bg-[#f1f5f9] py-14 px-6">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl md:text-5xl font-bold text-center text-[#334f67] mb-12">
      Nuestros Planes
    </h2>

    <div className="grid gap-8">

      {/* PLAN S1000 */}
      <div className="bg-[#334f67]/85 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 text-white">
       <h3 className="font-bold text-3xl mb-4 text-white">
          Plan S1000
        </h3>

        <ul className="text-sm md:text-base space-y-2 text-white/90">
          <li>✔ Plan sin Copago</li>
          <li>✔ Consultas medicas sin topes y sin limites</li> 
          <li>✔ Estudios de baja, mediana y alta complejidad sin limites</li> 
          <li>✔ Farmacia: 40% en el interior y 50% en AMBA</li> 
          <li>✔ Habitación compartida</li> 
          <li>✔ PMI: 100% cobertura de vacunas dentro del calendario oficial</li> 
          <li>✔ Cobertura del 100% en Pastillas Anticonceptivas dentro de la Resolución 310</li> 
          <li>✔ Reintegros solo para Ortodoncia (8 a 16 años), Nutrición y Ortopedia (un par zapatos y dos pares de plantillas por año)</li> 
          <li>✔ 25 sesiones de fisiatría, kinesiología y fonoaudiología</li> 
          <li>✔ 30 sesiones de psicología c/c</li> 
          <li>✔ Óptica: cristales comunes blancos</li> 
          <li>✔ Reconocimiento del 30% en extracción de Células Madre en Protectia, con una permanencia de 12 meses en el Plan</li>
        </ul>
      </div>

      {/* PLAN S1500 */}
      <div className="bg-[#334f67]/85 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 text-white">
       <h3 className="font-bold text-3xl mb-4 text-white">
          Plan S1500
        </h3>

        <ul className="text-sm md:text-base space-y-2 text-white/90">
          <li>✔ Plan sin Copago</li> 
          <li>✔ Consultas medicas sin topes y sin limites</li> <li>Estudios de baja, mediana y alta complejidad sin limites</li> 
          <li>✔ Habitación individual</li> 
          <li>✔ Cobertura del 100% en pastillas anticonceptivas de marcas comerciales no incluidas en la Resolución 310</li> 
          <li>✔ Ortodoncia de 8 a 16 años (cobertura por reintegro o por sistema cerrado)</li> 
          <li>✔ Sesiones de kinesiología ST y SL</li> 
          <li>✔ 25 sesiones de fonoaudiología</li> 
          <li>✔ Óptica: 100% en cristales lejos/cerca, 50% en bifocales/multifocales, 50% en lentes de contacto, y armazones</li> 
          <li>✔ PMI: ecografía 3D una por embarazo</li> 
          <li>✔ Cirugía refractiva: 100% de cobertura a partir de 3,5 dioptrías, con 12 meses de permanencia en el plan</li> 
          <li>✔ Nutrición: cobertura en dieta y 12 consultas anuales (hasta 2 por mes)</li> 
          <li>✔ Asistencia al viajero en países limítrofes, a través de ASSIST CARD</li>
        </ul>
      </div>

      {/* PLAN S3000 */}
      <div className="bg-[#334f67]/85 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 text-white">
      <h3 className="font-bold text-3xl mb-4 text-white">
          Plan S3000
        </h3>

        <ul className="text-sm md:text-base space-y-2 text-white/90">
          <li>✔ Plan sin Copago</li> 
          <li>✔ Habitación individual (sin tope de vida) </li> 
          <li>✔ Consultas medicas sin topes y sin limites</li> 
          <li>✔ Estudios de baja, mediana y alta complejidad sin limites</li> 
          <li>✔ Cobertura al 100% de todas las pastillas anticonceptivas</li> 
          <li>✔ Ortodoncia hasta los 30 años (Por reintegro ó por sistema cerrado)</li> 
          <li>✔ 35 sesiones de rehabilitación en fonoaudiología y terapia Ocupacional</li> 
          <li>✔ 40 sesiones de psicología</li> 
          <li>✔ Cirugía refractiva: cobertura al 100% a partir de 3 dioptrías, con 12 meses de permanencia en el plan</li> 
          <li>✔ PMI: ecografía 3D, 4D ó 5D una por embarazo</li> <li>Cobertura en Cremas nutritivas durante el embarazo (4 envases de 200grs.)</li> 
          <li>✔ Cobertura de prótesis odontológica al 50% valores Sancor, con 12 meses de permanencia</li> 
          <li>✔ Asistencia al viajero internacional, a través de ASSIST CARD</li> 
          <li>✔ Reconocimiento del 40% en extracción de Células Madre en Protectia</li>
        </ul>
      </div>

      {/* PLAN S4500 */}
      <div className="bg-[#334f67]/85 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 text-white">
        <h3 className="font-bold text-3xl mb-4 text-white">
          Plan S4500
        </h3>

        <ul className="text-sm md:text-base space-y-2 text-white/90">
          <li>✔ Plan sin Copago</li> <li>Cobertura en cirugía estética</li> 
          <li>✔ Habitación individual (sin tope de vida) </li> 
          <li>✔ Consultas medicas sin topes y sin limites</li> 
          <li>✔ Estudios de baja, mediana y alta complejidad sin limites</li> 
          <li>✔ 75 sesiones de rehabilitación en fonoaudiología y terapia Ocupacional</li> 
          <li>✔ 50 sesiones de psicología</li> 
          <li>✔ Cobertura de implantes odontológicos, con 12 meses de permanencia.</li> 
          <li>✔ Cobertura en Cremas nutritivas durante el embarazo (6 envases de 200grs.)</li> 
          <li>✔ Reconocimiento del 75% en extracción de Células Madre, con una permanencia de 12 meses en el Plan.</li> 
          <li>✔ Cobertura en cirugía estética con un reconocimiento de hasta $20.000, mediante reintegro</li> 
          <li>✔ Reintegro en tratamientos estéticos</li>
        </ul>
      </div>

      {/* PLAN S5000 */}
      <div className="bg-[#334f67]/85 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 text-white">
        <h3 className="font-bold text-3xl mb-4 text-white">
          Plan S5000
        </h3>

        <ul className="text-sm md:text-base space-y-2 text-white/90">
          <li>✔ Plan sin Copago</li> <li>Cobertura en cirugía estética</li> 
          <li>✔ Consultas medicas sin topes y sin limites</li> 
          <li>✔ Estudios de baja, mediana y alta complejidad sin limites</li> 
          <li>✔ Habitación VIP (individual) </li> 
          <li>✔ Farmacia: 60% de cobertura</li> 
          <li>✔ Ecografía 3D/4D/5D, dos por embarazo</li> 
          <li>✔ Sesiones de rehabilitación sin límite</li> 
          <li>✔ Reintegros Especiales</li> 
          <li>✔ Cirugía Estética por reintegro</li>
        </ul>
      </div>

    </div>
  </div>
</div>

    </main>
  );
}

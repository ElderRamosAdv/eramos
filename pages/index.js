export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>

      {/* HERO */}
      <section style={{
        background: '#0f1a2b',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: 40 }}>E. Ramos Advocacia</h1>
        <p>Excelência jurídica nas áreas Cível, Contratual, Bancária e Criminal</p>
      </section>

      {/* SOBRE */}
      <section style={{ padding: 60 }}>
        <h2>Sobre o Escritório</h2>
        <p>
          Atuação estratégica com foco em resultados, ética e excelência técnica.
        </p>
      </section>

      {/* ÁREAS */}
      <section style={{ padding: 60, background: '#f5f5f5' }}>
        <h2>Áreas de Atuação</h2>
        <ul>
          <li>Cível</li>
          <li>Contratual</li>
          <li>Bancário</li>
          <li>Criminal</li>
        </ul>
      </section>

      {/* CONTATO */}
      <section style={{ padding: 60 }}>
        <h2>Contato</h2>
        <p>WhatsApp: (61) 99999-9999</p>
      </section>

    </div>
  )
}

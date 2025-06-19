
fetch('main.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('body').innerHTML = `
        <div id="content">
            <div id="message">
                <p>Estas acá porque te elegí.</p>
                <p>Hay un mensaje oculto en esta página. Decifralo para continuar.</p>
                <p>Mucha suerte.</p>
            </div>
            <p style="color: #000; position: absolute;">${data._0xijk}</p>
        </div>
    `;

    const message = document.getElementById('message');
    message.innerHTML += `
    <div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
      <input type="text" id="input" autocomplete="off">
      <button id="submit" style="margin-left: 10px; height: 40px;">Enviar</button>
    </div>
    <div id="feedback"></div>
  `;

    document.getElementById('submit').addEventListener('click', () => {
      const value = document.getElementById('input').value.trim().toUpperCase();
      const feedback = document.getElementById('feedback');
      if (value === data._0xabc) {
        document.getElementById('body').innerHTML = `
          <div id="content">
            <div id="message">
              <p>¿Sos capaz de descubrir aquello que está oculto a los ojos?</p>
              <p>César dice: "${data._0xwhd}"</p>
              <div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
                <input type="text" id="input2" autocomplete="off">
                <button id="submit2" style="margin-left: 10px; height: 40px;">Enviar</button>
              </div>
            </div>
            <div id="feedback2"></div>
          </div>
        `;

        document.getElementById('submit2').addEventListener('click', () => {
          const value2 = document.getElementById('input2').value.trim().toUpperCase();
          const feedback2 = document.getElementById('feedback2');
          if (value2 === data._0xdef) {
            document.getElementById('body').innerHTML = `
              <div id="content">
                <div id="message">
                  <p>¡Felicitaciones! Descubriste todos los acertijos. Soy ${data._0xghj}. Veni a contarme tan pronto hayas terminado.</p>
                </div>
              </div>
            `;
          } else {
            feedback2.innerHTML = `<span style="padding: 20px; color: #b00; font-size: 0.9em;">No te rindas</span>`;
          }
        });
      } else {
        feedback.innerHTML = `<span style="padding: 20px; color: #b00; font-size: 0.9em;">No te rindas</span>`;
      }
    });
  });

document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && (e.key === 'a' || e.key === 'A')) {
    e.preventDefault();
  }
});